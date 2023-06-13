import React, { createContext, useState } from 'react'
import { ConfigProvider, Layout, theme } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Outlet } from 'react-router-dom'
import { Content } from 'antd/es/layout/layout'
import NavPanel from '../components/nav-panel/nav-panel.component'

import './root.scss'
import { LocalStorageService } from '../services/local-storage.service'

type SelectedThemeContextType = {
  isDarkTheme: boolean
  toggleIsDarkTheme: () => void
}
export const SelectedThemeContext = createContext<SelectedThemeContextType | null>(null)

function Root (){
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return !!LocalStorageService.get('isDarkTheme')
  })

  const toggleIsDarkTheme = () => {
    setIsDarkTheme((prevValue) => {
      LocalStorageService.set('isDarkTheme', !prevValue)
      return !prevValue
    })
  }

  return (
    <SelectedThemeContext.Provider value={{
      isDarkTheme,
      toggleIsDarkTheme,
    }}>
      <ConfigProvider theme={{
        algorithm: isDarkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}>
        <Layout className="app" hasSider={true}>
          <Sider className="app-sider" breakpoint="lg" collapsedWidth="0">
            <NavPanel />
          </Sider>
          <Content className="app-content">
            <Outlet />
          </Content>
        </Layout>
      </ConfigProvider>
    </SelectedThemeContext.Provider>
  )
}

export default Root
