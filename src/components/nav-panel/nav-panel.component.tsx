import React from 'react'
import { Button, List } from 'antd'
import { NavLink } from 'react-router-dom'
import ThemeSwitch from '../theme-switch/theme-switch.component'

import './nav-panel.scss'

const LINKS = [
  {
    label: 'Все записи',
    route: '/',
    items: [
      {
        label: 'Персонажи',
        route: '/characters'
      },
      {
        label: 'Фракции',
        route: '/fractions'
      },
      {
        label: 'Локации',
        route: '/locations'
      },
    ]
  },
  {
    label: 'Сессии',
    route: '/sessions'
  },
  // {
  //   label: 'Карта',
  //   route: '/map'
  // }
]

const NavPanel = () => {
  return (
    <>
      <ThemeSwitch />
      <List
        className="nav-panel"
        size='small'
        itemLayout='vertical'
        split={false}
        dataSource={LINKS}
        renderItem={(item) =>
          <List.Item>
            <NavLink to={item.route} className={({ isActive }) => isActive ? 'active' : ''}>
              <Button type="link" size='small'>
                {item.label}
              </Button>
            </NavLink>
            {item.items
              ? <List
                className="nav-panel"
                size='small'
                dataSource={item.items}
                split={false}
                renderItem={(subItem) =>
                  <List.Item>
                    <NavLink to={subItem.route} className={({ isActive }) => isActive ? 'active' : ''}>
                      <Button type="link" size='small'>
                        {subItem.label}
                      </Button>
                    </NavLink>
                  </List.Item>
                }
              />
              : null
            }
          </List.Item>
        }
      />
    </>

  )
}

export default NavPanel
