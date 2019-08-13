import React, { Component } from 'react'
import { BASE_URL } from '../constants.js'
import { BrowserRouter as Router, Redirect, Route} from "react-router-dom"

class Dashboard extends React.Component {
  state = {
    currentUser: '',
    sessions: this.props.sessions,
    members:''
  }

  componentDidMount() {
    this.getUser()
    this.getUsers()
  }

  getUser() {
    fetch(`${ BASE_URL }/users/${ this.props.currentUser }`, {
      credentials: 'include'
    })
    .then(response => response.json())
    .then((currentUser) => {
      this.setState({ currentUser: currentUser })
    }).catch(err=> console.log(err))
  }

  getUsers() {
    fetch(`${ BASE_URL }/users/`, {
      credentials: 'include'
    })
    .then(response => response.json())
    .then((members) => {
      this.setState({ members: members })
    }).catch(err=> console.log(err))
  }
  render() {

    return (
      <div>
        <h1>I'm Dashbaord</h1>
      </div>
    )
  }
}

export default Dashboard
