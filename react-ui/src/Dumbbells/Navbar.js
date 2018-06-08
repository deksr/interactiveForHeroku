import React, { Component } from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import logo from  '../pantone.svg';
// import logo from '../cute-giraffe.svg';
import './Navbar.css';

class SiteNavbar extends Component {
  
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar className="Nav-bar" color="faded" light>
          <NavbarBrand className="mr-auto App-title" href="/"  >TalentPick</NavbarBrand>
          <NavbarToggler className="mr-2 Burger-button" onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}





export default SiteNavbar





