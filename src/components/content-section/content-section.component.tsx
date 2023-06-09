import React from 'react'
import { Card } from 'antd'
import Title from 'antd/lib/typography/Title'
import PC from '../pc/pc.component'
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
      <Title level={3}>{title}</Title>
      {data.map((pc) => <PC key={pc.id} pc={pc} />)}
    </Card>
  )
}
