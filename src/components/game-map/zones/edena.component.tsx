import React from 'react'
import { COLORS, PATHS } from '../game-map.variables'
import { GameMapObject } from '../game-map.models'
import Mountain1 from '../figures/mountain-1.component'
import Mountain2 from '../figures/mountain-2.component'
import Mountain3 from '../figures/mountain-3.component'
import GreenTree1 from '../figures/green-tree-1.component'
import GreenTree3 from '../figures/green-tree-3.component'
import DeadTree1 from '../figures/dead-tree-1.component'
import DeadTree2 from '../figures/dead-tree-2.component'
import DeadTree3 from '../figures/dead-tree-3.component'
import Town1 from '../figures/town-1.component'

const EdenaMap = ({
  x,
  y,
}: GameMapObject) => {
  return (
    <g id="edena-zone" className="game-map-zone" transform={`translate(${x}, ${y})`}>
      <g className="game-map-zone-body">
        <clipPath id="edena-clip">
          <path d={PATHS.EDENA}/>
        </clipPath>
        <path className="game-map-zone-path" d={PATHS.EDENA} fill={COLORS.DESERT}/>

        <g clipPath="url(#edena-clip)">
          <path d={PATHS.EDENA_GRASS} fill={COLORS.TEMPERATE} stroke={COLORS.TEMPERATE} />
          <path d={PATHS.EDENA_SHORE_1} stroke="#000" strokeOpacity="0.2" strokeWidth="20"/>
          <path d={PATHS.EDENA_SHORE_1} stroke="#000" strokeOpacity="0.2" strokeWidth="10"/>
          <path d={PATHS.EDENA_SHORE_2} stroke="#000" strokeOpacity="0.2" strokeWidth="20"/>
          <path d={PATHS.EDENA_SHORE_2} stroke="#000" strokeOpacity="0.2" strokeWidth="10"/>
        </g>

        {/*Left mountains and forest*/}
        <Mountain2 color={COLORS.DESERT} x="23" y="10"/>
        <Mountain2 color={COLORS.DESERT} x="37" y="26"/>
        <Mountain1 color={COLORS.DESERT} x="58" y="31"/>
        <DeadTree2 x="65" y="52" />
        <DeadTree2 x="85" y="54" />
        <DeadTree3 x="78" y="64" />
        <DeadTree1 x="68" y="69" />
        <DeadTree3 x="57" y="64" />
        <DeadTree1 x="59" y="76" />
        <DeadTree3 x="50" y="75" />
        <Mountain1 color={COLORS.DESERT} x="90" y="47"/>
        <Mountain2 color={COLORS.DESERT} x="79" y="65"/>
        <Mountain2 color={COLORS.DESERT} x="60" y="80"/>

        {/*Right mountains and forest*/}
        <Mountain1 color={COLORS.TEMPERATE} x="280" y="0"/>
        <DeadTree3 x="324" y="5" />
        <DeadTree2 x="306" y="8" />
        <DeadTree1 x="282" y="12" />
        <DeadTree3 x="366" y="25" />
        <DeadTree2 x="343" y="21" />
        <Mountain1 color={COLORS.DESERT} x="277" y="17" />
        <Mountain1 color={COLORS.DESERT} x="301" y="25" />
        <Mountain2 color={COLORS.DESERT} x="323" y="33" />
        <Mountain1 color={COLORS.DESERT} x="338" y="35" />
        <Mountain3 color={COLORS.DESERT} x="357" y="44" />

        {/*Green forest*/}
        <GreenTree3 x="158" y="21" />
        <GreenTree1 x="162" y="34" />

        {/*Road to Kir*/}
        <path transform="translate(216, 1)"
              d="M8 29C8 28.3333 8 26.5 8 24.5C8 22 8 20.5 5 16.5C2 12.5 2 8.5 2.5 2.5C2.56419 1.72972 2.55421 0.9512 2.487 0.169729"
              stroke="black" strokeWidth="3" strokeDasharray="4"/>

        <Town1 x="198" y="37" />
      </g>
    </g>
  )
}

export default EdenaMap
