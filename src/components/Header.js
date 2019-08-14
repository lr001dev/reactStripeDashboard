import React, { Component } from 'react'
import Login from './Login'
import Sessions from './Sessions'
import { Link } from "react-router-dom"
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class Header extends React.Component {
  render() {
    return (
      <Container fluid>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Nav className="mr-auto home-nav">
            <Navbar.Brand  href="#home">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Button  variant="light"><Link to="/">Home</Link></Button>
              <Button  variant="light"><Link to="/create-account">Create Account</Link></Button>
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
