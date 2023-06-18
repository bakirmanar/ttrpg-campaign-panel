import React from 'react'
import { COLORS, PATHS } from '../game-map.variables'

const EdenaMap = () => {
  return (
    <g id="edena-zone" className="game-map-zone" transform="translate(50, 211)">
      <clipPath id="edena-clip">
        <path d={PATHS.EDENA} />
      </clipPath>
      <g className="game-map-zone-body">
        <path d={PATHS.EDENA} fill={COLORS.DESERT} />
        <g clipPath="url(#edena-clip)">
          <path d={PATHS.EDENA_SHORE_1} stroke="#000" strokeOpacity="0.2" strokeWidth="20" />
          <path d={PATHS.EDENA_SHORE_1} stroke="#000" strokeOpacity="0.2" strokeWidth="10" />
          <path d={PATHS.EDENA_SHORE_2} stroke="#000" strokeOpacity="0.2" strokeWidth="20" />
          <path d={PATHS.EDENA_SHORE_2} stroke="#000" strokeOpacity="0.2" strokeWidth="10" />
        </g>
      </g>
    </g>
  )
}

export default EdenaMap
