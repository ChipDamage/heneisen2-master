import React, { Component } from 'react';
import logo from './logoMain.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from './About';
import Team from './Team';
import Projects from './Projects';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class App extends Component {  
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
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar className="Navbar" color="dark" dark expand="md">
            <NavbarBrand href="/"><img src={logo} className="App-logo" alt="logo" /></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/"><NavLink href="/About/">About</NavLink></Link>
                </NavItem>
                <NavItem>
                  <Link to="/team"><NavLink href="/Team/">Team</NavLink></Link>
                </NavItem>
                <NavItem>
                  <Link to="/projects"><NavLink href="/Projects/">Projects</NavLink></Link>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/Heneisen"><img className="githubLogo smLogo" src="./githublogo.png" alt="github" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.facebook.com/heneisendev/"><img className="facebookLogo smLogo" src="./fblogo.png" alt="facebook" /></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route exact path="/" component={About} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/projects" component={Projects} />
        </div>
      </Router>
    );
  }
}
