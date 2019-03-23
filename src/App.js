import React, { Component } from 'react';
import './App.css';

const Header = (props) => {
  const { title, totalPlayers} = {...props}
  // destruct assignment
  return (
    <header>
      <h1>
        {title}
      </h1>
      <span className="stats">Players : {totalPlayers}</span>
    </header>
  )
}

class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      score : 0
    }
  }
  
  incrementScore = () => {
    // 변경을 하기 위해서는 setState를 호출
    // 이전 state 값을 가져온 후 머지
    this.setState(prevState => {
      return {
        score: prevState.score + 10
      }
    })
  }

  decrementScore =() =>{
    this.setState(prevState => {
      return {
        score: prevState.score - 10
      }
    })
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    )

  }
}


const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={()=> props.handleRemovePlayer(props.id)}>x</button>
    </span>
    <span className="player-name">{props.name}</span>
    <Counter/>
  </div>
)

class App extends React.Component{

  state = {
    players : [
      {_id: 0, name : "BSM" },
      {_id: 1, name : "you" },
      {_id: 2, name : "bo" },
      {_id: 3, name : "hyun" },
      {_id: 4, name : "kerry" }
    ]
  }

  handleRemovePlayer = (id) => {
   this.setState(prevState => ({ players : prevState.players.filter(item => item._id !== id) }))
  }

  render(){
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11}/>
        {
          this.state.players.map((player) => {
            return(
              <Player name={player.name} key={player._id} id={player._id} handleRemovePlayer={this.handleRemovePlayer} />
            )
          })
        }
        
      </div>
    )
  }
}

export default App;
