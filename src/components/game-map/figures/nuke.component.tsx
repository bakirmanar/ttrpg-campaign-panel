import React from 'react'
import { GameMapObject } from '../game-map.models'
import { ReactComponent as NukeSvg } from '../../../assets/images/nuke.svg'

const Nuke = ({
  x,
  y,
}: GameMapObject) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <NukeSvg />
    </g>
  )
}

export default Nuke
