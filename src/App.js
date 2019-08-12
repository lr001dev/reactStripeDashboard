import React from 'react';
import { BASE_URL } from './constants.js'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import { LinkContainer } from 'react-router-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import CreateAccount from './components/CreateAccount'
import Sessions from './components/Sessions'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    sessions: [],
    temp: ''

  }
  componentDidMount() {
    this.getSessions()
  }

  getSessions() {
    fetch(`${ BASE_URL }/sessions`)
    .then(response => response.json())
    .then((sessionData) => {
      this.setState({ sessions: sessionData})
    })
    .catch(err=> console.log(err))
  }

  createAccount = (formInputs) => {
    const autoLogin = {
      user: {
        username: formInputs.user.username,
        password: formInputs.user.password
      }
    }
    fetch(`${ BASE_URL }/users/`, {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      }
    })
    .then(this.loginTheUser(autoLogin))
    .catch(err=> console.log(err))
  }

  loginTheUser = (formInputs) => {
    console.log("logging in")
    console.log(formInputs)
    fetch(`${ BASE_URL }/users/login`, {
      body: JSON.stringify(formInputs),
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      }
    }).then(loginResponse => loginResponse.json())
      .then(userIsLoggedIn => this.setState({ user: userIsLoggedIn.user }))
      .catch(error=> console.log(error))
  }

  render() {

    if(this.state.user) {
      return(
        <Router>
          <Redirect to='/dashboard' />
          <Route
            path="/dashboard"
            render= { (props) => <Dashboard { ...props } currentUser= { this.state.user } /> }
          />
        </Router>
      )
    } else {
      return (
        <Router>
          <Header
            sessions = { this.state.sessions }
            loginTheUser = { this.loginTheUser }
          />
          <Route exact path="/" component={ Home } />
          <Route
            path="/create-account"
            render= { (props) => <CreateAccount { ...props }
            createAccount= { this.createAccount }
            loginTheUser = { this.loginTheUser }
          /> }
          />
          <Route path="/signup" component={ SignUp } />
          <Footer />
        </Router>
      )
    }
  }

}

export default App
