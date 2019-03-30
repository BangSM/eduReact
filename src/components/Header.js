import React from 'react'
import {Statistics} from './Statistics'
import Stopwatch from './Stopwatch';
import PropTypes from 'prop-types'

export const Header = ({title, totalPlayers, totalScore}) => {
  // const { title, totalPlayers, totalScore} = {...props}
  // destruct assignment
  return (
    <header>
      <Statistics totalPlayers={totalPlayers} totalScore={totalScore}/>
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  )
}
Header.propsType = {
  title : PropTypes.string.isRequired,
  totalPlayers : PropTypes.arrayOf(PropTypes.shape({
    id : PropTypes.number,
    score : PropTypes.number,
    name : PropTypes.string
  })),
  totalScore : PropTypes.number
}
Header.defaultProps = {
  title : 'ScoreBoard'
}