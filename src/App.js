import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header'
import {Player} from './components/Player'



class App extends React.Component{

  state = {
    players : [
      {_id: 0, name : "BSM", score : 0 },
      {_id: 1, name : "brad", score : 0 },
      {_id: 2, name : "shawn", score : 0 },
      {_id: 3, name : "levi", score : 0 },
      {_id: 4, name : "kerry", score : 0 },
      {_id: 5, name : "rich", score : 0 }
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
              <Player name={player.name} key={player._id} id={player._id} score={player.score} handleRemovePlayer={this.handleRemovePlayer} />
            )
          })
        }
        
      </div>
    )
  }
}

export default App;
