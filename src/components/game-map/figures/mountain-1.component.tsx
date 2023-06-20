import React from 'react'
import { GameMapFigure } from '../game-map.models'
import { COLORS } from '../game-map.variables'

const MOUNTAIN_SHAPE_PATH = 'M35.5 1C24.3 11.4 7.66667 22 1 25L21 30L61 25C54.5 25.5 40 6 35.5 1Z'
const MOUNTAIN_CONTOUR_PATH = 'M1 24.5C7.66667 21.5 24.3 11.4 35.5 1C39 7 54.5 25 61 24.5'
const MOUNTAIN_SHADOW_PATH = 'M35.5 18.5C35.5 21.5 35.5 22 36.5 25L29 23.5C28.5 23.6667 27.5 24.5 23 25.5L27.5 21.5L32.5 16L28 15.5L34.5 9.5H31C32.5 8 34 5.5 35 4C36.5 6.5 45 16 47 18C45 17.5 43.5 16.5 39.5 14C40.3333 16.3333 40.5 19.5 41.5 21.5C40 21 37.5 19.6667 35.5 18.5Z'

const Mountain1 = ({
  color,
  x,
  y,
}: GameMapFigure) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <path d={MOUNTAIN_SHAPE_PATH} fill={color} />
      <path d={MOUNTAIN_CONTOUR_PATH} stroke={COLORS.MOUNTAIN_SHADOW} />
      <path d={MOUNTAIN_SHADOW_PATH} fill={COLORS.MOUNTAIN_SHADOW} stroke={COLORS.MOUNTAIN_SHADOW} />
    </g>
  )
}

export default Mountain1
