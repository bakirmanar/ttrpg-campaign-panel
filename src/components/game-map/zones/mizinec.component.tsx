import React from 'react'
import { COLORS, PATHS } from '../game-map.variables'

const MizinecMap = () => {
  return (
    <g id="mizinec-zone" className="game-map-zone" transform="translate(438, 27)">
      <clipPath id="mizinec-clip">
        <path d={PATHS.MIZINEC} />
      </clipPath>
      <g className="game-map-zone-body">
        <path className="game-map-zone-path" d={PATHS.MIZINEC} fill={COLORS.WINTER} />

        <g clipPath="url(#mizinec-clip)">
          <path d={PATHS.MIZINEC_SHORE} stroke="#000" strokeOpacity="0.2" strokeWidth="20" />
          <path d={PATHS.MIZINEC_SHORE} stroke="#000" strokeOpacity="0.2" strokeWidth="10" />
        </g>
      </g>
    </g>
  )
}

export default MizinecMap
