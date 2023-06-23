import React from 'react'
import { COLORS, PATHS } from '../game-map.variables'
import { GameMapObject } from '../game-map.models'
import Town2 from '../figures/town-2.component'

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

        {/*Road to Kir*/}
        <path transform="translate(157, 69)"
              d="M44.8561 35.9453C54.4808 16.3436 56.1771 -1.02735 1 2.44534"
              stroke="black" strokeWidth="3" strokeDasharray="4"/>

        <Town2 x="121" y="37" />
      </g>
    </g>
  )
}

export default KindvarMap
