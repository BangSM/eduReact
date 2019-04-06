import React from 'react'
import {Navbar, NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,DropdownToggle,DropdownMenu,UncontrolledDropdown,DropdownItem} from 'reactstrap'
import {NavLink} from 'react-router-dom'
export default class Menu extends React.Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return (
      <Navbar color="dark" dark expand="md">
        <NavLink to="/" className='navbar-brand'>ReactBbang</NavLink>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/heroes" className='nav-link'>Heroes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/scoreboard" className='nav-link'>Scoreboard</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}