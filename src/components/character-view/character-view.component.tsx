import React from 'react'
import { Avatar, Col, Row, Space, Tag } from 'antd'
import Title from 'antd/lib/typography/Title'
import { DataVM } from '../../models/data.model'

import './character-view.scss'

const AVATAR_SIZE = 82

type CharacterViewProps = {
  data: DataVM
}

export default function CharacterView({data}: CharacterViewProps){
  return (
    <div className='character-view'>
      <Row wrap={false}>
        {data.image && <Col><Avatar className='character-view-avatar' size={AVATAR_SIZE} src={data.image} /></Col>}
        <Col>
          <Title id={data.id} level={4} className='character-view-title'>{data.name}</Title>
          {data.tags?.length
            ? <Space size={4} wrap={true}>
              {data.tags.map((tag) =>
                <Tag className='character-view-tag' key={tag.id} color={tag.color} bordered={false}>{tag.name}</Tag>)
              }
            </Space>
            : null
          }
        </Col>
      </Row>
      <Row>
        <Col className='character-view-description'>{data.description}</Col>
      </Row>
    </div>
  )
}
