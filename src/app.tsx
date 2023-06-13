import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/root.component'
import MainPage from './pages/main/main.page'
import CharactersPage from './pages/characters/characters.page'
import SessionsPage from './pages/sessions/sessions.page'
import FractionsPage from './pages/fractions/fractions.page'
import LocationsPage from './pages/locations/locations.page'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { path: '/', Component: MainPage },
      { path: '/characters', Component: CharactersPage },
      { path: '/fractions', Component: FractionsPage },
      { path: '/locations', Component: LocationsPage },
      { path: '/sessions', Component: SessionsPage },
    ]
  },
  { path: '*', Component: MainPage }
], {
  basename: '/ttrpg-campaign-panel'
})

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
