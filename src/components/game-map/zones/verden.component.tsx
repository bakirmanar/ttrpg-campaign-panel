import React from 'react'
import { COLORS, PATHS } from '../game-map.variables'
import Mountain1 from '../figures/mountain-1.component'
import Mountain3 from '../figures/mountain-3.component'
import GreenTree3 from '../figures/green-tree-3.component'
import GreenTree1 from '../figures/green-tree-1.component'
import GreenTree2 from '../figures/green-tree-2.component'
import DeadTree2 from '../figures/dead-tree-2.component'
import DeadTree1 from '../figures/dead-tree-1.component'
import DeadTree3 from '../figures/dead-tree-3.component'

const VerdenMap = () => {
  return (
    <g id="verden-zone" className="game-map-zone" transform="translate(89, 143)">
      <g className="game-map-zone-body">
        <clipPath id="verden-clip">
          <path d={PATHS.VERDEN} />
        </clipPath>
        <path className="game-map-zone-path" d={PATHS.VERDEN} fill={COLORS.TEMPERATE} />

        <g clipPath="url(#verden-clip)">
          <path d={PATHS.VERDEN_SHORE} stroke="#000" strokeOpacity="0.2" strokeWidth="20" />
          <path d={PATHS.VERDEN_SHORE} stroke="#000" strokeOpacity="0.2" strokeWidth="10" />
        </g>

        {/*Dead forest top*/}
        <DeadTree2 x="120" y="-9" />
        <DeadTree1 x="107" y="-10" />
        <DeadTree3 x="114" y="3" />
        <DeadTree3 x="95" y="-11" />
        <DeadTree2 x="83" y="-1" />
        <DeadTree1 x="71" y="-8" />
        <DeadTree3 x="58" y="-2" />
        <DeadTree1 x="45" y="-2" />
        <DeadTree2 x="67" y="6" />

        {/*Mountains*/}
        <Mountain3 color={COLORS.TEMPERATE} x="75" y="6" />
        <Mountain1 color={COLORS.TEMPERATE} x="32" y="15" />
        <Mountain1 color={COLORS.TEMPERATE} x="14" y="36" />
        <Mountain3 color={COLORS.TEMPERATE} x="0" y="56" />

        {/*Green forest top*/}
        <GreenTree1 x="121" y="28" />
        <GreenTree3 x="114" y="31" />
        <GreenTree2 x="124" y="38" />
        <GreenTree3 x="130" y="42" />
        <GreenTree1 x="110" y="46" />

        {/*Green forest bottom*/}
        <GreenTree1 x="112" y="88" />
        <GreenTree2 x="101" y="94" />
      </g>
    </g>
  )
}

export default VerdenMap
