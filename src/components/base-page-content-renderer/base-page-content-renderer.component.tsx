import DataFilters from '../data-filters/data-filters.component'
import ContentSection from '../content-section/content-section.component'
import React, { useEffect, useMemo, useState } from 'react'
import { ContentBlock } from '../../services/data.service'
import _ from 'lodash'
import Filters from '../../models/data-filter.model'
import DataFilterService from '../../services/data-filter.service'

type BasePageContentRendererProps = {
  dataSource: ContentBlock[]
}

const BasePageContentRenderer = ({
  dataSource,

}: BasePageContentRendererProps) => {
  const [dataToDisplay, setDataToDisplay] = useState<ContentBlock[]>([])

  // on init
  useEffect(() => {
    resetData()
  }, [])

  const resetData = () => {
    setDataToDisplay([...dataSource])
  }

  const debouncedSearch = useMemo(
    () => _.debounce((filters: Filters) => {
      setDataToDisplay([...DataFilterService.filterContent(dataSource, filters)])
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

export default BasePageContentRenderer
