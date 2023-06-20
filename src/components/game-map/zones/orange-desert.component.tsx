import React from 'react'
import { COLORS, PATHS } from '../game-map.variables'
import Mountain1 from '../figures/mountain-1.component'
import Mountain3 from '../figures/mountain-3.component'
import Mountain2 from '../figures/mountain-2.component'
import DeadTree1 from '../figures/dead-tree-1.component'

const OrangeDesertMap = () => {
  return (
    <g id="orange-desert-zone" className="game-map-zone" transform="translate(0, 281)">
      <g className="game-map-zone-body">
        <clipPath id="orange-desert-clip">
          <path d={PATHS.ORANGE_DESERT} />
        </clipPath>
        <path className="game-map-zone-path" d={PATHS.ORANGE_DESERT} fill={COLORS.ORANGE_DESERT} />

        <g clipPath="url(#orange-desert-clip)">
          <path d={PATHS.ORANGE_DESERT_SHORE_1} stroke="#000" strokeOpacity="0.2" strokeWidth="20" />
          <path d={PATHS.ORANGE_DESERT_SHORE_1} stroke="#000" strokeOpacity="0.2" strokeWidth="10" />
          <path d={PATHS.ORANGE_DESERT_SHORE_2} stroke="#000" strokeOpacity="0.2" strokeWidth="20" />
          <path d={PATHS.ORANGE_DESERT_SHORE_2} stroke="#000" strokeOpacity="0.2" strokeWidth="10" />
        </g>

        <DeadTree1 x="88" y="11" />
        <Mountain3 color={COLORS.ORANGE_DESERT} x="87" y="18" />
        <Mountain2 color={COLORS.ORANGE_DESERT} x="71" y="35" />
        <Mountain1 color={COLORS.ORANGE_DESERT} x="41" y="50" />
      </g>
    </g>
  )
}

export default OrangeDesertMap
