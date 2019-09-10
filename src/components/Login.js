import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap'

class Login extends Component  {
  constructor (props) {
    super(props)
    this.state = {
        username: '',
        password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (event) {
      this.setState({[event.target.id] : event.target.value})
    }

  handleSubmit (event) {
    event.preventDefault()
    const loginFormInputs = {
      user: {
        username: this.state.username,
        password: this.state.password
      }
    }
    this.props.loginTheUser(loginFormInputs)
  }

  render() {
    return (
      <Form  onSubmit={this.handleSubmit}>
        <Form.Row className="login-form" >
          <Col>
            <Form.Control
              id="username"
              type="text"
              onChange={ this.handleChange }
              value= { this.state.username }
              placeholder="username"
            />
          </Col>
          <Col>
            <Form.Control
              id="password"
              type="text"
              onChange={ this.handleChange }
              value= { this.state.password }
              placeholder="password"
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Button className="login-button" variant="primary" type="submit">Login</Button>
        </Form.Row>
      </Form>
    )
  }
}

export default Login
