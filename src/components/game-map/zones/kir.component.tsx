import React from 'react'
import { COLORS, PATHS } from '../game-map.variables'
import { GameMapObject } from '../game-map.models'

const KirMap = ({
  x,
  y,
}: GameMapObject) => {
  return (
    <g id="kir-zone" className="game-map-zone" transform={`translate(${x}, ${y})`}>
      <g className="game-map-zone-body">
        <path className="game-map-zone-path" d={PATHS.KIR} fill={COLORS.TEMPERATE} stroke={COLORS.TEMPERATE} />
      </g>
    </g>
  )
}

export default KirMap
