import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Form, Col } from 'react-bootstrap'

class Login extends React.Component {
  render() {
    return (
      <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder="username" />
          </Col>
          <Col>
            <Form.Control placeholder="password" />
          </Col>
        </Form.Row>
      </Form>
    )
  }
}

export default Login
