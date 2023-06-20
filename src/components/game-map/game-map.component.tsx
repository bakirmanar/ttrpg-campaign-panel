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
import { MAP_HEIGHT, MAP_WIDTH } from './game-map.variables'

const GameMap = React.memo(() => {
  useLayoutEffect(() => {
    const svg = d3.select('#map-svg')
    const gameZones = svg.selectAll('.game-map-zone')

    gameZones.selectAll('.game-map-zone-body')
      .attr('transform', 'scale(1)')

    const zoom = d3.zoom()
      .scaleExtent([0.8, 2])
      .translateExtent([[0, 0], [MAP_WIDTH, MAP_HEIGHT]])
      .on('zoom', (e: any) => {
        svg.attr('transform', e.transform)
      })

    svg.call(zoom as any)

    gameZones.on('mouseover', (event) => {
      const target: HTMLElement = event.currentTarget
      const d3Target = d3.select(target)
      const d3TargetBody = d3Target.select('.game-map-zone-body')

      // Put element at the end of DOM structure to overlap the rest of elements
      d3Target.raise()
      // Scale size of a target
      d3TargetBody
        .transition()
        .attr('transform', 'scale(1.1)')

      const cleanEffects = () => {
        // Return size of a target
        d3TargetBody
          .transition()
          .attr('transform', 'scale(1)')

        // Reorder elements back
        gameZones.order()

        target.removeEventListener('mouseleave', cleanEffects)
      }

      target.addEventListener('mouseleave', cleanEffects)
    })
  }, [])

  return (
    <div className="game-map-container">
      <div className="game-map-background">
        <div className="game-map-background-layer" />
        <div className="game-map-background-layer reverse" />
      </div>
      <svg id="map-svg" viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} fill="none">
        <g className="game-map">
          <KindvarMap x="87" y="36" />
          <MizinecMap x="438" y="27" />
          <OrzammarMap x="321" y="118" />
          <KirMap x="209" y="131" />
          <VerdenMap x="89" y="143" />
          <EdenaMap x="50" y="211" />
          <OrangeDesertMap x="0" y="281" />
        </g>
      </svg>
    </div>
  )
})


export default GameMap
