/* import React from 'react';
import './App.css';
import Header from './components/Header'
import Player from './components/Player'
import AddPlayerForm from './components/AddPlayerForm'
import { connect } from 'react-redux';



class App extends React.Component{

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
    total = this.props.players.reduce((total,player) => total + player.score , 0 )
    return total  
  }

  // handleAddPlayer = (name) => {
  //   this.setState(prevState => (
  //     { players : [...prevState.players, { _id : prevState.players.length, name : name, score : 0}]}
  //   ))
  // }

  render(){
    return (
      <div className="scoreboard">
        <Header totalPlayers={this.props.players.length} totalScore = {this.totalScore()}/>
        {
          this.props.players.map((player) => {
            return(
              <Player name={player.name} key={player._id} id={player._id} score={player.score} handleRemovePlayer={this.handleRemovePlayer} handleChangeScore={this.handleChangeScore} />
            )
          })
        }
        <AddPlayerForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  players : state.playerReducer.players
})
export default connect(mapStateToProps)(App);
 */