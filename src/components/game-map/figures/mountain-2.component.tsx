import React from 'react'
import { GameMapFigure } from '../game-map.models'
import { COLORS } from '../game-map.variables'

const MOUNTAIN_SHAPE_PATH = 'M21 1C20.6 1.4 7.5 16.5 0.5 20C4.5 22.3333 14.1 27.6 20.5 30C27 28 41.5 22 49.5 16.5C38.5 17.5 24 3.5 21 1Z'
const MOUNTAIN_CONTOUR_PATH = 'M1 20C8 16.5 20.6 1.4 21 1C24 3.5 39 17.5 50 16.5'
const MOUNTAIN_SHADOW_PATH = 'M40.5 16.5C37.5 15.5 27.5 8 21.5 3.5L17 9C17.5 9 19.5 8 20 8C19 10 16.5 14 16 15C18.4 14.6 20.1667 14 20.5 14C19.5 17.3333 17 23.5 16 24C17.5 24 20 23.5 21 23C21 25 20.5 26.5 20.5 27C25 26 34.5 21.5 35.5 21C33.5 19.5 30.5 18.6667 29 16.5C31.6667 17.6667 38.5 17.5 40.5 16.5Z'

const Mountain2 = ({
  color,
  x,
  y,
}: GameMapFigure) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <path d={MOUNTAIN_SHAPE_PATH} fill={color} />
      <path d={MOUNTAIN_CONTOUR_PATH} stroke={COLORS.MOUNTAIN_SHADOW} />
      <path d={MOUNTAIN_SHADOW_PATH} fill={COLORS.MOUNTAIN_SHADOW} />
    </g>
  )
}

export default Mountain2
