import React from 'react'
import { COLORS, PATHS } from '../game-map.variables'
import { GameMapObject } from '../game-map.models'

const KindvarMap = ({
  x,
  y,
}: GameMapObject) => {
  return (
    <g id="kindvar-zone" className="game-map-zone" transform={`translate(${x}, ${y})`}>
      <g className="game-map-zone-body">
        <clipPath id="kindvar-clip">
          <path d={PATHS.KINDVAR} />
        </clipPath>
        <path className="game-map-zone-path" d={PATHS.KINDVAR} fill={COLORS.WINTER} />

        <g clipPath="url(#kindvar-clip)">
          <path d={PATHS.KINDVAR_SHORE} stroke="#000" strokeOpacity="0.2" strokeWidth="20" />
          <path d={PATHS.KINDVAR_SHORE} stroke="#000" strokeOpacity="0.2" strokeWidth="10" />
        </g>
      </g>
    </g>
  )
}

export default KindvarMap
