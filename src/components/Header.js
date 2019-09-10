import React, { Component } from 'react'
import Login from './Login'
import Sessions from './Sessions'
import { Link } from "react-router-dom"
import { Container, Navbar, Nav, Button } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <Container fluid>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Nav className="mr-auto home-nav">
            <Navbar.Brand  href="#home">
              <img
                alt=""
                src="/images/trainer.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Button  className="links-nav" variant="light"><Link to="/">Home</Link></Button>
              <Button  className="links-nav" variant="light"><Link to="/create-account">Create Account</Link></Button>
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
