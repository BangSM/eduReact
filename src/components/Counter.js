import React from 'react'

class Counter extends React.Component{
  
  render(){
    return (
      <div className="counter">
      <button className="counter-action decrement" onClick={() => {this.props.handleChangeScore(this.props.id , -10)}}> - </button>
      <span className="counter-score">{this.props.score}</span>
      <button className="counter-action increment" onClick={() => {this.props.handleChangeScore(this.props.id , +10)}}> + </button>
    </div>
    )
  }
}
export default Counter