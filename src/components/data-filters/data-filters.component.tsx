import { Button, Col, Form, FormInstance, Input, Row, Select } from 'antd'
import TagsService from '../../services/tags.service'
import React, { useRef } from 'react'
import Filters from '../../models/data-filter.model'

type DataFiltersProps = {
  onChange: (filters: Filters) => void
  onReset: (filters: Filters) => void
}

export default function DataFilters({
  onChange,
  onReset,
}: DataFiltersProps) {
  const filters = useRef<FormInstance<Filters>>(null)

  const resetFilters = () => {
    console.log('*** Filters are reset')
    filters.current?.resetFields()
    onReset(filters.current?.getFieldsValue(true))
  }

  const onFormChange = (changes: Partial<Filters>, newValue: Filters) => {
    console.log('*** Filters are changed', newValue)
    onChange(newValue)
  }

  return (
    <Form ref={filters} className="page-search" onValuesChange={onFormChange}>
      <Row wrap={true} gutter={8}>
        <Col flex="1 0 100%">
          <Form.Item name="qry">
            <Input type="text" placeholder="Поиск по названию и описанию" allowClear={true} />
          </Form.Item>
        </Col>
        <Col flex="1 0 200px">
          <Form.Item name="races">
            <Select mode="tags" options={TagsService.RACES} fieldNames={{ label: 'name', value: 'id'}}
                    filterOption={(input, option) => (option?.name ?? '').includes(input)}
                    placeholder="Расы" allowClear={true}></Select>
          </Form.Item>
        </Col>
        <Col flex="1 0 200px">
          <Form.Item name="proficiencies">
            <Select mode="tags" options={TagsService.PROFICIENCIES} fieldNames={{ label: 'name', value: 'id'}}
                    filterOption={(input, option) => (option?.name ?? '').includes(input)}
                    placeholder="Специальности" allowClear={true}></Select>
          </Form.Item>
        </Col>
        <Col flex="1 0 200px">
          <Form.Item name="locations">
            <Select mode="tags" options={TagsService.LOCATIONS} fieldNames={{ label: 'name', value: 'id'}}
                    filterOption={(input, option) => (option?.name ?? '').includes(input)}
                    placeholder="Локации" allowClear={true}></Select>
          </Form.Item>
        </Col>
        <Col flex="1 0 200px">
          <Form.Item name="fractions">
            <Select mode="tags" options={TagsService.FRACTIONS} fieldNames={{ label: 'name', value: 'id'}}
                    filterOption={(input, option) => (option?.name ?? '').includes(input)}
                    placeholder="Фракции" allowClear={true}></Select>
          </Form.Item>
        </Col>
        <Col flex="1 0 200px">
          <Form.Item name="otherTags">
            <Select mode="tags" options={TagsService.OTHER} fieldNames={{ label: 'name', value: 'id'}}
                    filterOption={(input, option) => (option?.name ?? '').includes(input)}
                    placeholder="Другие теги" allowClear={true}></Select>
          </Form.Item>
        </Col>
        <Col flex="1 0 200px">
          <Form.Item>
            <Button onClick={resetFilters}>Очистить фильтры</Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
