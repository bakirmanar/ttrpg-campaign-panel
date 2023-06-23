import React from 'react'
import { GameMapObject } from '../game-map.models'

const Town3 = ({
  x,
  y,
}: GameMapObject) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <path d="M1 30H21V22.4615H18.1429H15.2857H9.09524V16H8.14286H1V30Z" fill="#CECEC2"/>
      <path d="M18.5 22.5V7.5H11.5V11.8333V22.5H18.5Z" fill="#F1E6D6"/>
      <path d="M9 16.5V22.5H15V16.5H9Z" fill="#F1E6D6"/>
      <path d="M15.5 16.5H16.5L12 10.5L8 16.5H9H15.5Z" fill="#718773"/>
      <path d="M14 13V11H16V13H14Z" fill="#333333"/>
      <path d="M18.5 7.5H19.5L15 1L10.5 7.5H11.5H18.5Z" fill="#718587"/>
      <path d="M4 25V30H6V25H4Z" fill="#6F3508"/>
      <path d="M4 21V19H6V21H4Z" fill="#333333"/>
      <path d="M11 21V19H13V21H11Z" fill="#333333"/>
      <path
        d="M9 16.5V22.5H15.5M9 16.5H8M9 16.5H15.5M18.5 22.5H21.5V29.5H1V16.5H8M18.5 22.5V7.5M18.5 22.5H15.5M18.5 7.5H19.5L15 1L10.5 7.5H11.5M18.5 7.5H11.5M11.5 7.5V11.25M15.5 22.5V16.5M15.5 16.5H16.5L12 10.5L11.5 11.25M8 16.5L11.5 11.25"
        stroke="black"/>
    </g>
  )
}

export default Town3
