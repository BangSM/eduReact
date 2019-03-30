import React from 'react'
import { connect } from 'react-redux';
import {addPlayer} from '../redux/actions'

class AddPlayerForm extends React.Component{

  textInput = React.createRef()


  // constructor(props){
  //   super(props)
  //   this.state = {
  //     playerName : ""
  //   }
  // }

  // handleValueChange = (e) => {
  //   this.setState({playerName : e.target.value})
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    // DOM에 접근해서 value를 가져옴
    this.props.handleAddPlayer(this.textInput.current.value)
    e.currentTarget.reset()
    // this.setState({
    //   playerName : ''
    // })
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit} >
        <input type="text" ref={this.textInput} placeholder="enter a player's name" required />
        <input type="submit" value="Add Player" />
      </form>
    )
  }
}

export default connect(null, {addPlayer})(AddPlayerForm)
