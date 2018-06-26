import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Radium from 'radium';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './Navbar.css';


//********* styles **********
var linkStyle = {
  textDecoration: 'none',
  ':hover': {
    backgroundColor: 'white'
  }
};
//********* styles **********




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
      <NavbarBrand className="mr-auto App-title" href="/">TalentPick</NavbarBrand>
      <NavbarToggler className="mr-2 Burger-button" onClick={this.toggleNavbar} />
      <Collapse isOpen={!this.state.collapsed} navbar>
      <Nav navbar>
      <NavItem className="navItem">
      <NavLink to="/about" className="navLinks" style={linkStyle}>About</NavLink>
      </NavItem>
      <NavItem className="navItem">
      <NavLink to= "/" className="navLinks" style={linkStyle}>Home</NavLink>
      </NavItem>
      </Nav>
      </Collapse> 
      </Navbar>
      </div>
      );
  }
}


export default SiteNavbar