import React from 'react'
import { GameMapObject } from '../game-map.models'

const Town2 = ({
  x,
  y,
}: GameMapObject) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <path d="M1 8V26H34.5V14H25V19H11V8H1Z" fill="#F1E6D6"/>
      <path d="M11 8L6 1L1 8H11Z" fill="#718587"/>
      <path d="M29 22V25.5H31V22H29Z" fill="#6F3508"/>
      <path d="M4 22V20H6V22H4Z" fill="#333333"/>
      <path d="M4 15V12H6V15H4Z" fill="#333333"/>
      <path d="M1 8V26H34.5V14H25V19H11V8M1 8L6 1L11 8M1 8H11" stroke="black"/>
    </g>
  )
}

export default Town2
