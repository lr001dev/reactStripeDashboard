import React, { Component } from 'react'
import { BASE_URL } from '../constants.js'
import { BrowserRouter as Router, Redirect, Route} from "react-router-dom"

class Dashboard extends React.Component {
  state = {

  }
  componentDidMount() {
  }

  getUsers() {
    fetch(`${ BASE_URL }/users/`, {
      credentials: 'include'
    })
    .then(response => response.json())
    .then((currentUser) => {
      this.setState({ currentUser: currentUser })
    })
    .then(theUser=>(console.log(theUser)))
    .catch(err=> console.log(err))
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
