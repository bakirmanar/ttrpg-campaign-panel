import React, { useLayoutEffect } from 'react'
import * as d3 from 'd3'
import KindvarMap from './zones/kindvar.component'
import MizinecMap from './zones/mizinec.component'
import KirMap from './zones/kir.component'
import VerdenMap from './zones/verden.component'
import OrzammarMap from './zones/orzammar.component'
import EdenaMap from './zones/edena.component'
import OrangeDesertMap from './zones/orange-desert.component'

import './game-map.scss'

const GameMap = React.memo(() => {
  useLayoutEffect(() => {
    const svg = d3.select('#map-svg')
    const gameZones = svg.selectAll('.game-map-zone')

    gameZones.on('mouseover', (event) => {
      const hoveredZone: HTMLElement = event.currentTarget

      // Put element at the end of DOM structure to overlap the rest of elements
      d3.select(hoveredZone).raise()

      // Reorder elements back
      const reorder = () => {
        gameZones
          .filter((gz, i, arr) => arr[i] !== hoveredZone)
          .order()

        hoveredZone.removeEventListener('mouseleave', reorder)
      }

      hoveredZone.addEventListener('mouseleave', reorder)
    })

    gameZones.on('mouseleave', (event) => {
      gameZones.order()
    })
  }, [])

  return (
    <div className="game-map-container">
      <div className="game-map-background">
        <div className="game-map-background-layer" />
        <div className="game-map-background-layer reverse" />
      </div>
      <svg id="map-svg" viewBox="0 0 638 369" fill="none">
        <g className="game-map">
          <KindvarMap />
          <MizinecMap />
          <OrzammarMap />
          <KirMap />
          <VerdenMap />
          <EdenaMap />
          <OrangeDesertMap />
        </g>
      </svg>
    </div>
  )
})


export default GameMap
