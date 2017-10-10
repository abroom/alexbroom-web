import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <div className="App-header-wrapper">
        <Navbar fixedTop className="App-header">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} className="App-logo" alt="logo"/>
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/">Home</NavItem>
            <NavItem eventKey={2} href="/resume">Resume</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
