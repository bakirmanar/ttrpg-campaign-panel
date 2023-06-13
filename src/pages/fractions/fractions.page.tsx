import React from 'react'
import BasePageContentRenderer from '../../components/base-page-content-renderer/base-page-content-renderer.component'
import DataService from '../../services/data.service'

const FractionsPage: React.FC = () => {
  const data = DataService.getBlocks(['FRACTIONS'])

  return (
    <BasePageContentRenderer dataSource={data} />
  )
}

export default FractionsPage
