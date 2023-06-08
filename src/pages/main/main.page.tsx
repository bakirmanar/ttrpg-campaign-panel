import React, { useEffect, useMemo, useState } from 'react'
import _ from 'lodash'
import { Input, Row } from 'antd'
import ContentSection from '../../components/content-section/content-section.component'
import DataService, { ContentBlock } from '../../services/data.service'

import './main.scss'

export default function MainPage() {
  const [dataToDisplay, setDataToDisplay] = useState<ContentBlock[]>([]);

  // on init
  useEffect(() => {
    resetData();
  }, [])

  const resetData = () => {
    setDataToDisplay([...DataService.getAllBlocks()]);
  }

  const debouncedSearch = useMemo(
    () => _.debounce((e: any) => {
      const qry = (e?.target.value || '').toLocaleLowerCase();

      if (!qry) {
        return resetData();
      }

      setDataToDisplay([...DataService.filterBlocksByQuery(qry)]);
    }, 300)
  , [])

  // on destroy
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    }
  }, []);

  return (
    <>
      <Row className="page-search">
        <Input type="text" onChange={debouncedSearch} placeholder="Поиск" allowClear={true} />
      </Row>
      {dataToDisplay.map((dt) => (
        dt?.data?.length ? <ContentSection key={dt.key} title={dt.title} data={dt.data} /> : null
      ))}
    </>
  )
}