import React, { useEffect, useMemo, useRef, useState } from 'react'
import _ from 'lodash'
import { Form, Input, Row, Select } from 'antd'
import ContentSection from '../../components/content-section/content-section.component'
import DataService, { ContentBlock } from '../../services/data.service'
import TagsService from '../../services/tags.service'
import Filters from '../../models/data-filter.model'
import DataFilterService from '../../services/data-filter.service'

import './main.scss'

export default function MainPage() {
  const filters = useRef<Filters>({});
  const [dataToDisplay, setDataToDisplay] = useState<ContentBlock[]>([]);

  // on init
  useEffect(() => {
    resetData();
  }, [])

  const resetData = () => {
    setDataToDisplay([...DataService.getAllBlocks()]);
  }

  const updateFilters = (key: keyof Filters, value: any) => {
    filters.current[key] = value
    debouncedSearch()
  }

  const debouncedSearch = useMemo(
    () => _.debounce(() => {
      console.log(filters.current)
      setDataToDisplay([...DataFilterService.filterContent(DataService.getAllBlocks(), filters.current)])
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
      <Form className="page-search">
        <Form.Item>
          <Input type="text" onChange={(e) => updateFilters('qry', e.target.value)}
                 placeholder="Поиск" allowClear={true} />
        </Form.Item>
        <Form.Item>
          <Select mode="tags" onChange={(e) => updateFilters('tags', e)} fieldNames={{ label: 'name', value: 'id'}}
                  options={TagsService.TAGS} placeholder="Тэги" allowClear={true}></Select>
        </Form.Item>
      </Form>
      {dataToDisplay.map((dt) => (
        dt?.data?.length ? <ContentSection key={dt.key} title={dt.title} data={dt.data} /> : null
      ))}
    </>
  )
}