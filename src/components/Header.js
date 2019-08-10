import React, { Component } from 'react'
import Login from './Login'
import Sessions from './Sessions'
import { Link } from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Navbar.Brand  href="#home">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link to="/create-account">Create Account</Nav.Link>
              <Nav.Link to="/signup">Sign Up</Nav.Link>
            </Nav>
            <Login />
            </Navbar>
        <Sessions
          sessions = { this.props.sessions }
        />
      </>
    )
  }
}

export default Header
