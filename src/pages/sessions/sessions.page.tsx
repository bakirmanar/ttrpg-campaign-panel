import React from 'react'
import DataService from '../../services/data.service'
import BasePageContentRenderer from '../../components/base-page-content-renderer/base-page-content-renderer.component'

const SessionsPage: React.FC = () => {
  const data = DataService.getBlocks(['SESSIONS'])

  return (
    <BasePageContentRenderer dataSource={data} />
  )
}

export default SessionsPage
