import React, { Component } from 'react'
import { BASE_URL } from '../constants.js'
import { Form, Button, Container } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class DashboardProfileUpdate extends React.Component {
  state = {
    userId:'',
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '' ,
  }

  componentDidMount() {
    this.setState({
      userId: this.props.currentUser.user.id,
      first_name: this.props.currentUser.user.first_name,
      last_name: this.props.currentUser.user.last_name,
      email: this.props.currentUser.user.email,
      username: this.props.currentUser.user.username,
      password: ''
    })
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
    fetch(`${ BASE_URL }/users/${this.state.userId}`, {
      body: JSON.stringify(updateFormInputs),
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then((updatedProfile) => {
      this.props.updatedUser()
      this.notify()
    }).catch(error => console.log(error))
  }

  notify = () => toast("Profile Updated")

  render() {
    return (
      <Container className="update">
      <h1>Update Profile</h1>
      <ToastContainer />
        <Form className="update-form" onSubmit={this.handleSubmit}>
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
          <Button variant="primary" type="submit">Update Profile</Button>
        </Form>
      </Container>
    )
  }
}

export default DashboardProfileUpdate
