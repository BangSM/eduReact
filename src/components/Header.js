import React from 'react'
import {Statistics} from './Statistics'
import Stopwatch from './Stopwatch';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateTitle} from '../redux/actions'

const Header = ({title, totalPlayers, totalScore,updateTitle}) => {
  // const { title, totalPlayers, totalScore} = {...props}
  // destruct assignment
  return (
    <header>
      <Statistics totalPlayers={totalPlayers} totalScore={totalScore}/>
      <h1 onClick={()=>{updateTitle('KKKK')}}>{title}</h1>
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

// store의 title을 props로 연결
const mapStateToProps = (state) => ({
  title : state.playerReducer.title
})

export default connect(mapStateToProps,{updateTitle})(Header)