import React, { useEffect, useMemo, useState } from 'react'
import _ from 'lodash'
import ContentSection from '../../components/content-section/content-section.component'
import DataService, { ContentBlock } from '../../services/data.service'
import Filters from '../../models/data-filter.model'
import DataFilterService from '../../services/data-filter.service'
import DataFilters from '../../components/data-filters/data-filters.component'

import './main.scss'

export default function MainPage() {
  const [dataToDisplay, setDataToDisplay] = useState<ContentBlock[]>([])

  // on init
  useEffect(() => {
    resetData()
  }, [])

  const resetData = () => {
    setDataToDisplay([...DataService.getAllBlocks()])
  }

  const debouncedSearch = useMemo(
    () => _.debounce((filters: Filters) => {
      setDataToDisplay([...DataFilterService.filterContent(DataService.getAllBlocks(), filters)])
    }, 300)
  , [])

  // on destroy
  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [])

  return (
    <>
      <DataFilters onChange={debouncedSearch} onReset={resetData} />

      {dataToDisplay.map((dt) => (
        dt?.data?.length ? <ContentSection key={dt.key} title={dt.title} data={dt.data} /> : null
      ))}
    </>
  )
}
