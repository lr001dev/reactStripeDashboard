import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

class CreateAccount extends Component {
  constructor (props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: '',
  }
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleChange = this.handleChange.bind(this)
}
handleChange (event) {
    this.setState({[event.target.id] : event.target.value})
  }

handleSubmit (event) {
  event.preventDefault()
  const createAccountFormInputs = {
    user: {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    }
  }
    this.props.createAccount(createAccountFormInputs)
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: '',
    })
  }
  render() {
    return (
      <Container >
      <h1>Create Account</h1>
        <Form className="create-form" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              id="first_name"
              onChange={ this.handleChange }
              value= { this.state.first_name }
              type="text"
              placeholder="first name"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control id="last_name"
              onChange={ this.handleChange }
              value= { this.state.last_name }
              type="text"
              placeholder="last name"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              id="username"
              onChange={ this.handleChange }
              value= { this.state.username }
              type="text"
              placeholder="username"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="email" onChange={ this.handleChange }
              value= { this.state.email }
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="password" onChange={ this.handleChange }
              value= { this.state.password }
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">Create Account</Button>
        </Form>
      </Container>
    )
  }
}

export default CreateAccount
