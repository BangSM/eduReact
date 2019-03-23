import React from 'react'

class Counter extends React.Component{
  constructor(props){
    super(props)
  }
  
  // incrementScore = () => {
  //   // 변경을 하기 위해서는 setState를 호출
  //   // 이전 state 값을 가져온 후 머지
  //   this.setState(prevState => {
  //     return {
  //       score: prevState.score + 10
  //     }
  //   })
  // }

  // decrementScore =() =>{
  //   this.setState(prevState => {
  //     return {
  //       score: prevState.score - 10
  //     }
  //   })
  // }
  render(){
    return (
      <div className="counter">
      <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
      <span className="counter-score">{this.props.score}</span>
      <button className="counter-action increment" onClick={this.incrementScore}> + </button>
    </div>
    )
  }
}
export default Counter