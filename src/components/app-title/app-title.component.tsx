import React from 'react'
import { theme } from 'antd'
import Title, { TitleProps } from 'antd/lib/typography/Title'

// Hardcode of color due to bugged dark theme in antd
const AppTitle = (props: TitleProps) => {
  const themeToken = theme.useToken()
  return (
    <Title {...props} style={{ color: themeToken.token.colorText}}>{props.children}</Title>
  )
}

export default AppTitle
