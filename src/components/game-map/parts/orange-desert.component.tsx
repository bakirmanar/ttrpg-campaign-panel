import React from 'react'
import { COLORS, PATHS } from '../game-map.variables'

const OrangeDesertMap = () => {
  return (
    <g id="orange-desert-zone" className="game-map-zone" transform="translate(0, 281)">
      <clipPath id="orange-desert-clip">
        <path d={PATHS.ORANGE_DESERT} />
      </clipPath>
      <g className="game-map-zone-body">
        <path d={PATHS.ORANGE_DESERT} fill={COLORS.ORANGE_DESERT} />
        <g clipPath="url(#orange-desert-clip)">
          <path d={PATHS.ORANGE_DESERT_SHORE_1} stroke="#000" strokeOpacity="0.2" strokeWidth="20" />
          <path d={PATHS.ORANGE_DESERT_SHORE_1} stroke="#000" strokeOpacity="0.2" strokeWidth="10" />
          <path d={PATHS.ORANGE_DESERT_SHORE_2} stroke="#000" strokeOpacity="0.2" strokeWidth="20" />
          <path d={PATHS.ORANGE_DESERT_SHORE_2} stroke="#000" strokeOpacity="0.2" strokeWidth="10" />
        </g>
      </g>
    </g>
  )
}

export default OrangeDesertMap
