import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Index from './heroes/Index.js'
import Scoreboard from './scoreboard/Scoreboard'
import Menu from './Menu'
import Hero from './hero/Hero'
export class Root extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <div className="container" style={{ backgroundColor:"#FFFFFF" }}>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/heroes' component={Index}></Route>
            <Route path='/scoreboard' component={Scoreboard}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
