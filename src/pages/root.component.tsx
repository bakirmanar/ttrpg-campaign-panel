import React from 'react'
import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Outlet } from 'react-router-dom'
import { Content } from 'antd/es/layout/layout'
import NavPanel from '../components/nav-panel/nav-panel.component'

import './root.scss'

const Root = () => {
  return (
    <Layout className="app">
      <Sider className="app-sider" breakpoint="lg" collapsedWidth="0">
        <NavPanel />
      </Sider>
      <Content className="app-content">
        <Outlet />
      </Content>
    </Layout>
  )
}

export default Root
