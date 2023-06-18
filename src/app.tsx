import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/root.component'
import MainPage from './pages/main/main.page'
import CharactersPage from './pages/characters/characters.page'
import SessionsPage from './pages/sessions/sessions.page'
import FractionsPage from './pages/fractions/fractions.page'
import LocationsPage from './pages/locations/locations.page'
import MapPage from './pages/map/map.page'

const router = createHashRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { path: '/', Component: MainPage },
      { path: '/characters', Component: CharactersPage },
      { path: '/fractions', Component: FractionsPage },
      { path: '/locations', Component: LocationsPage },
      { path: '/sessions', Component: SessionsPage },
      { path: '/map', Component: MapPage },
      { path: '*', Component: MainPage },
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
