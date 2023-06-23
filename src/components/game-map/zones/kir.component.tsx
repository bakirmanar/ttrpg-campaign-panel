import React from 'react'
import { COLORS, PATHS } from '../game-map.variables'
import { GameMapObject } from '../game-map.models'
import Nuke from '../figures/nuke.component'

const KirMap = ({
  x,
  y,
}: GameMapObject) => {
  return (
    <g id="kir-zone" className="game-map-zone" transform={`translate(${x}, ${y})`}>
      <g className="game-map-zone-body">
        <path className="game-map-zone-path" d={PATHS.KIR} fill={COLORS.TEMPERATE} stroke={COLORS.TEMPERATE} />

        {/*Road to Westrock and Dale*/}
        <path transform="translate(29, 54)"
          d="M35 1.5C33 6 26 9 26.5 13.5C26.6941 15.2473 27.4159 17.296 28.1971 19.5M28.1971 19.5C29.1695 22.2435 30.2339 25.2276 30.487 28.1697M28.1971 19.5C23.2394 22.3 18.3333 23 16.5 23C12.6172 22.7573 6.32972 23.9747 0.719078 25.3792"
          stroke="black" strokeWidth="3" strokeDasharray="4" />

        {/*Road to Windheim*/}
        <path transform="translate(69, 7)" d="M2 18.5C4.9678 12.7927 8.5089 6.79873 11.3561 1"
              stroke="black" strokeWidth="3" strokeDasharray="4" />

        {/*Road to Orzammar*/}
        <path transform="translate(95, 45)" d="M1 5.49999C6.58768 4.10307 12.2838 2.92297 19.8046 2.26257"
              stroke="black" strokeWidth="3" strokeDasharray="4"/>

        <Nuke x="49" y="3" />
      </g>
    </g>
  )
}

export default KirMap
