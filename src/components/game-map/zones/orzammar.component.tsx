import React from 'react'
import { COLORS, PATHS } from '../game-map.variables'
import { GameMapObject } from '../game-map.models'
import DeadTree2 from '../figures/dead-tree-2.component'
import DeadTree3 from '../figures/dead-tree-3.component'
import DeadTree1 from '../figures/dead-tree-1.component'
import Town1 from '../figures/town-1.component'

const OrzammarMap = ({
  x,
  y,
}: GameMapObject) => {
  return (
    <g id="orzammar-zone" className="game-map-zone" transform={`translate(${x}, ${y})`}>
      <g className="game-map-zone-body">
        <clipPath id="orzammar-clip">
          <path d={PATHS.ORZAMMAR} />
        </clipPath>
        <path className="game-map-zone-path" d={PATHS.ORZAMMAR} fill={COLORS.TEMPERATE} />

        <g clipPath="url(#orzammar-clip)">
          <path d={PATHS.ORZAMMAR_SHORE_1} stroke="#000" strokeOpacity="0.2" strokeWidth="20" />
          <path d={PATHS.ORZAMMAR_SHORE_1} stroke="#000" strokeOpacity="0.2" strokeWidth="10" />
          <path d={PATHS.ORZAMMAR_SHORE_2} stroke="#000" strokeOpacity="0.2" strokeWidth="20" />
          <path d={PATHS.ORZAMMAR_SHORE_2} stroke="#000" strokeOpacity="0.2" strokeWidth="10" />
        </g>

        {/*Forest top*/}
        <DeadTree1 x="90" y="-10" />
        <DeadTree2 x="65" y="-10" />
        <DeadTree3 x="80" y="-2" />
        <DeadTree3 x="51" y="-7" />
        <DeadTree3 x="60" y="3" />
        <DeadTree1 x="35" y="-5" />
        <DeadTree3 x="22" y="3" />
        <DeadTree2 x="35" y="7" />
        <DeadTree1 x="3" y="3" />
        <DeadTree3 x="14" y="11" />

        {/*Forest bottom*/}
        <DeadTree3 x="66" y="98" />
        <DeadTree1 x="79" y="98" />
        <DeadTree3 x="89" y="104" />
        <DeadTree1 x="103" y="104" />
        <DeadTree2 x="110" y="112" />

        {/*Road to Kir*/}
        <path transform="translate(3, 58)"
          d="M115.695 9.53506C115.362 9.20173 112.295 8.03506 102.695 6.03506C90.6954 3.53506 66.1954 4.53506 36.1954 2.53506C20.1646 1.46634 9.13076 1.53978 0.5 2.29764"
          stroke="black" strokeWidth="3" strokeDasharray="4"/>

        <Town1 x="112" y="42" />
      </g>
    </g>
  )
}

export default OrzammarMap
