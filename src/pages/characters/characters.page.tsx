import React from 'react'
import DataService from '../../services/data.service'
import BasePageContentRenderer from '../../components/base-page-content-renderer/base-page-content-renderer.component'

const CharactersPage: React.FC = () => {
  const data = DataService.getBlocks(['PCS', 'NPCS'])

  return (
    <BasePageContentRenderer dataSource={data} />
  )
}

export default CharactersPage
