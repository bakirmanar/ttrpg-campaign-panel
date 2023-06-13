import React from 'react'
import BasePageContentRenderer from '../../components/base-page-content-renderer/base-page-content-renderer.component'
import DataService from '../../services/data.service'

const LocationsPage: React.FC = () => {
  const data = DataService.getBlocks(['LOCATIONS'])

  return (
    <BasePageContentRenderer dataSource={data} />
  )
}

export default LocationsPage
