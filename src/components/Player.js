import React from 'react'
import Counter from './Counter'

export default class Player extends React.PureComponent {
  // componentWillReceiveProps(nextProps, nextContext){
  //   console.log('componentWillReceiveProps' , nextProps)
  // }
  // shouldComponentUpdate(nextProps, nextState, nextContext){
  //   //현재 스코어와 nextProps의 score를 비교
  //   console.log('shouldComponentUpdate', nextProps)
  //   return this.props.score !== nextProps.score ? true : false
  // }

  render(){
    // destruct assignment
    const {name, id, score, handleChangeScore} = this.props
    console.log(name, 'render')
    return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={()=> this.props.handleRemovePlayer(id)}>x</button>
      </span>
      <span className="player-name">{name}</span>
      <Counter score={score} id={id} handleChangeScore={handleChangeScore}/>
    </div>
  )}
}