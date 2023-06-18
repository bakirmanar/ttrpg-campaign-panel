import React, { useLayoutEffect } from 'react'
import * as d3 from 'd3'
import KindvarMap from './parts/kindvar.component'
import MizinecMap from './parts/mizinec.component'
import KirMap from './parts/kir.component'
import VerdenMap from './parts/verden.component'
import OrzammarMap from './parts/orzammar.component'
import EdenaMap from './parts/edena.component'
import OrangeDesertMap from './parts/orange-desert.component'

import './game-map.scss'

const GameMap = React.memo(() => {
  useLayoutEffect(() => {
    const svg = d3.select('#map-svg')

    svg.selectAll('.game-map-zone')
      .on('mouseover', (event) => {
        d3.select(event.currentTarget).raise()
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
          <KirMap />
          <VerdenMap />
          <OrzammarMap />
          <EdenaMap />
          <OrangeDesertMap />
        </g>
      </svg>
    </div>
  )
})


export default GameMap
