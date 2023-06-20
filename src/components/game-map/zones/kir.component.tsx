import React from 'react'
import { COLORS, PATHS } from '../game-map.variables'

const KirMap = () => {
  return (
    <g id="kir-zone" className="game-map-zone" transform="translate(209, 131)">
      <g className="game-map-zone-body">
        <path className="game-map-zone-path" d={PATHS.KIR} fill={COLORS.TEMPERATE} />
      </g>
    </g>
  )
}

export default KirMap
