import React, { Component } from 'react'
import Sessions from './Sessions'
import { Link } from "react-router-dom"
import { Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand  href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              />
              {' React Fitness'}
          </Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </Navbar>
        <Sessions
          sessions = { this.props.sessions }
        />
      </>
    )
  }
}

export default Header
