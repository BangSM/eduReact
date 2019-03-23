import React from 'react'
import {Statistics} from './Statistics'

export const Header = (props) => {
  const { title, totalPlayers, totalScore} = {...props}
  // destruct assignment
  return (
    <header>
      <Statistics totalPlayers={totalPlayers} totalScore={totalScore}/>
      <h1>{title}</h1>
    </header>
  )
}