import React from 'react'
import { Card } from 'antd'
import AppTitle from '../app-title/app-title.component'
import CharacterView from '../character-view/character-view.component'
import { DataVM } from '../../models/data.model'

import './content-section.scss';

type ContentSectionProps = {
  title: string,
  data: DataVM[]
}

export default function ContentSection({
  title,
  data
}: ContentSectionProps) {
  return (
    <Card className='content-section'>
      <AppTitle level={3}>{title}</AppTitle>
      {data.map((pc) => <CharacterView key={pc.id} data={pc} />)}
    </Card>
  )
}
