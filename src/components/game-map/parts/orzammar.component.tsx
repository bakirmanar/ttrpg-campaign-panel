import React from 'react'
import { COLORS, PATHS } from '../game-map.variables'

const OrzammarMap = () => {
  return (
    <g id="orzammar-zone" className="game-map-zone" transform="translate(321, 118)">
      <clipPath id="orzammar-clip">
        <path d={PATHS.ORZAMMAR} />
      </clipPath>
      <g className="game-map-zone-body">
        <path d={PATHS.ORZAMMAR} fill={COLORS.TEMPERATE} />
        <g clipPath="url(#orzammar-clip)">
          <path d={PATHS.ORZAMMAR_SHORE_1} stroke="#000" strokeOpacity="0.2" strokeWidth="20" />
          <path d={PATHS.ORZAMMAR_SHORE_1} stroke="#000" strokeOpacity="0.2" strokeWidth="10" />
          <path d={PATHS.ORZAMMAR_SHORE_2} stroke="#000" strokeOpacity="0.2" strokeWidth="20" />
          <path d={PATHS.ORZAMMAR_SHORE_2} stroke="#000" strokeOpacity="0.2" strokeWidth="10" />
        </g>
      </g>
    </g>
  )
}

export default OrzammarMap
