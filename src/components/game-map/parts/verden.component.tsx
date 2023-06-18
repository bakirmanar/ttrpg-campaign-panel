import React from 'react'
import { COLORS, PATHS } from '../game-map.variables'

const VerdenMap = () => {
  return (
    <g id="verden-zone" className="game-map-zone" transform="translate(89, 143)">
      <clipPath id="verden-clip">
        <path d={PATHS.VERDEN} />
      </clipPath>
      <g className="game-map-zone-body">
        <path d={PATHS.VERDEN} fill={COLORS.TEMPERATE} />
        <g clipPath="url(#verden-clip)">
          <path d={PATHS.VERDEN_SHORE} stroke="#000" strokeOpacity="0.2" strokeWidth="20" />
          <path d={PATHS.VERDEN_SHORE} stroke="#000" strokeOpacity="0.2" strokeWidth="10" />
        </g>
      </g>
    </g>
  )
}

export default VerdenMap
