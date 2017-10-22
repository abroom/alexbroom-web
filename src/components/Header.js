import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import logo from '../logo.svg';
import 'font-awesome/css/font-awesome.css';

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
            <IndexLinkContainer to="/"><NavItem eventKey={1}>Home</NavItem></IndexLinkContainer>
            <LinkContainer to="/resume"><NavItem eventKey={2}>Resume</NavItem></LinkContainer>
            <LinkContainer to="/contact"><NavItem eventKey={3}>Contact</NavItem></LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem target="_blank" href="https://github.com/abroom"><i className="fa fa-github"></i></NavItem>
            <NavItem target="_blank" href="https://www.linkedin.com/in/abroom"><i className="fa fa-linkedin"></i></NavItem>
            <NavItem target="_blank" href="https://www.facebook.com/Alexander.Do.McIntosh.Broom"><i className="fa fa-facebook"></i></NavItem>
            <NavItem target="_blank" href="https://twitter.com/admbroom"><i className="fa fa-twitter"></i></NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
