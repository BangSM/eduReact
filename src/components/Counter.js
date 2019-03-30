import React from 'react'
import propTypes from 'prop-types'

class Counter extends React.Component{
  
  render(){
    const {score , handleChangeScore, id} = this.props
    return (
      <div className="counter">
      <button className="counter-action decrement" onClick={() => {handleChangeScore(id , -10)}}> - </button>
      <span className="counter-score">{score}</span>
      <button className="counter-action increment" onClick={() => {handleChangeScore(id , +10)}}> + </button>
    </div>
    )
  }
}
export default Counter

Counter.propTypes = {
  score : propTypes.number,
  id : propTypes.number,
  handleChangeScore : propTypes.func
}