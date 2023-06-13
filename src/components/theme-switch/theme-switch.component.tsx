import React, { useContext } from 'react'
import { Switch } from 'antd'
import { SelectedThemeContext } from '../../pages/root.component'

const ThemeSwitch = () => {
  const toggleThemeContext = useContext(SelectedThemeContext)

  return (
    <Switch
      className='theme-switch'
      onChange={toggleThemeContext?.toggleIsDarkTheme}
      checkedChildren="Dark"
      unCheckedChildren="Light"
      defaultChecked={toggleThemeContext?.isDarkTheme}
    />
  )
}

export default ThemeSwitch
