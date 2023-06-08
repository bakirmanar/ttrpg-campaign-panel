import React from 'react'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import MainPage from './pages/main/main.page'

import './app.scss'

function App() {
  return (
    <Layout className="app">
      <Content className="app-content">
        <MainPage />
      </Content>
    </Layout>
  );
}

export default App;
