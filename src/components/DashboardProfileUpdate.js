import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class DashboardProfileUpdate extends React.Component {
  state = {
    updateUser: ''
  }

  componentDidMount() {
    const setUser = {
      first_name: this.props.currentUser.user.first_name,
      last_name: this.props.currentUser.user.last_name,
      email: this.props.currentUser.user.email,
      username: this.props.currentUser.user.username,
      password: ''
    }
    this.setState({ updateUser: setUser })
  }

  handleChange = (event) => {
    this.setState({[event.target.id] : event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const updateFormInputs = {
      user: {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      }
    }
    this.props.updatesProfile()
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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              id="first_name"
              onChange={ this.handleChange }
              value= { this.state.updateUser.first_name }
              type="text"
              placeholder="first name"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control id="last_name"
              onChange={ this.handleChange }
              value= { this.state.updateUser.last_name }
              type="text"
              placeholder="last name"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              id="username"
              onChange={ this.handleChange }
              value= { this.state.updateUser.username }
              type="text"
              placeholder="username"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="email" onChange={ this.handleChange }
              value= { this.state.updateUser.email }
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
              value= { this.state.updateUser.password }
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">Update Profile</Button>
        </Form>
      </Container>
    )
  }
}

export default DashboardProfileUpdate
