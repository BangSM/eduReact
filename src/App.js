import React from 'react';
import './App.css';
import {Header} from './components/Header'
import Player from './components/Player'
import AddPlayerForm from './components/AddPlayerForm'



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

  handleChangeScore = (id, delta) => {
    this.setState(prevState => {
      prevState.players.forEach(item => {
        if(item._id === id){
          item.score += delta
        }
      })
      return {players : [...prevState.players]}
    })
  }

  handleRemovePlayer = (id) => {
   this.setState(prevState => ({ players : prevState.players.filter(item => item._id !== id) }))
  }

  totalScore = () => {
    let total = 0
    total = this.state.players.reduce((total,player) => total + player.score , 0 )
    return total  
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => (
      { players : [...prevState.players, { _id : prevState.players.length, name : name, score : 0}]}
    ))
  }

  render(){
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={this.state.players.length} totalScore = {this.totalScore()}/>
        {
          this.state.players.map((player) => {
            return(
              <Player name={player.name} key={player._id} id={player._id} score={player.score} handleRemovePlayer={this.handleRemovePlayer} handleChangeScore={this.handleChangeScore} />
            )
          })
        }
        <AddPlayerForm handleAddPlayer={this.handleAddPlayer}/>
      </div>
    )
  }
}

export default App;
