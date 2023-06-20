import React from 'react'
import { GameMapFigure } from '../game-map.models'
import { COLORS } from '../game-map.variables'

const Mountain3 = ({
  color,
  x,
  y,
}: GameMapFigure) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <path fill={color}
        d="M26.5 1C20.9 7.4 7.16667 16 1 19.5C9.8 27.5 17.6667 33.1667 20.5 35C26.9 37 32.8333 38.8333 35 39.5L61 28.5C56 25.8333 46.1 17.7 42.5 10.5C41.8151 11.6985 40.368 13.1316 38.5 14.5583C36 13.0583 31.3 7.4 26.5 1Z"
        />
      <path stroke={COLORS.MOUNTAIN_SHADOW}
        d="M1 19.5C7.16667 16 20.9 7.4 26.5 1C31.3 7.4 36 13.0583 38.5 14.5583M25.5 21C32 19.5 40.5 14 42.5 10.5C46.1 17.7 56 25.8333 61 28.5M24 33.5C31.5 31 37 27 39.5 24C41.9 28.4 46.1667 31.1667 48 32"
        />
      <path fill={COLORS.MOUNTAIN_SHADOW} stroke={COLORS.MOUNTAIN_SHADOW}
        d="M35.5 14.5C34 13 29.5 8.5 26.5 4L20 9.5L25.5 9L19 19.5C29.5 18.5 32 17 35.5 14.5Z"
            />
      <path fill={COLORS.MOUNTAIN_SHADOW} stroke={COLORS.MOUNTAIN_SHADOW}
        d="M42 14C41 15 40 16 38 17.5H41L37 22.5C37 22.5 39.5 22 40.5 21C42 24 47 29 50.5 29.5C50 28.5 49 27.5 48 25C48 25 53 27 55.5 27C51.5 24.5 46 20 42 14Z"
        />
      <path fill={COLORS.MOUNTAIN_SHADOW} stroke={COLORS.MOUNTAIN_SHADOW}
        d="M43.5 31.5C41 29.5 40.5 29 39 27L36.5 29H38.5L35.5 32.5L37.5 32L38.5 31.5L40 30.5C41 31 42.5 31.5 43.5 31.5Z"
        />
    </g>
  )
}

export default Mountain3
