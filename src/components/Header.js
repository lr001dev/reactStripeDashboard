import React, { Component } from 'react'
import Login from './Login'
import Sessions from './Sessions'
import { Link } from "react-router-dom"
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class Header extends React.Component {
  render() {
    return (
      <Container fluid>
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
              <Link to="/">Home</Link>
              <Link to="/create-account">Create Account</Link>
              <Link to="/signup">Sign Up</Link>
            </Nav>
            <Login
              loginTheUser = { this.props.loginTheUser }
            />
            </Navbar>
            <Sessions
              sessions = { this.props.sessions }
            />
          </Container>

    )
  }
}

export default Header
