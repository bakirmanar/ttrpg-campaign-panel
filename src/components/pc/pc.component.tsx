import React from 'react'
import { Avatar, Col, Row, Tag } from 'antd'
import Title from 'antd/lib/typography/Title'
import { DataVM } from '../../models/data'

import './pc.scss'

const AVATAR_SIZE = 64

type PCProps = {
  pc: DataVM
}

export default function PC({pc}: PCProps){
  return (
    <Row className='pc-block'>
      {pc.image && <Col><Avatar className='pc-block-avatar' size={AVATAR_SIZE} src={pc.image} /></Col> }
      <Col flex={1}>
        <Title id={pc.id} level={4} className='pc-block-title'>{pc.name}</Title>
        {pc.tags?.length
          ? <div>{pc.tags.map((tag) => <Tag key={tag.id} color={tag.color}>{tag.name}</Tag>)}</div>
          : null
        }
        {pc.description}
      </Col>
    </Row>
  )
}
