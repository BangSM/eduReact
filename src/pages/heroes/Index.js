import React from 'react'
import {Switch , Route} from 'react-router-dom'
import Heroes from './Heroes.js'
import Register from './Register'

import { Nav, NavItem} from 'reactstrap'
import { NavLink,Redirect } from 'react-router-dom'

import './Index.scss'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink to="/heroes/hero" className='nav-link'>Heroes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/heroes/register" className='nav-link'>Register</NavLink>
          </NavItem>
        </Nav>
        <Switch>
          <Route path="/heroes/hero" component={Heroes}></Route>
          <Route path="/heroes/register" component={Register}></Route>
          <Route path="/heroes" render={()=><Redirect to="/heroes/hero"/>}></Route>
        </Switch>
      </div>
    )
  }
}