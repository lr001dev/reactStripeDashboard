import React from 'react';
import { BASE_URL } from './constants.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
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
    sessions: []

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

  loginInUser = (formInputs) => {
    console.log(formInputs)
  }

  render() {
    return (
      <Router>
        <Container fluid>
          <Header
            sessions = { this.state.sessions }
            loginInUser = { this.loginInUser }
          />
        </Container>
          <Route exact path="/" component={ Home } />
          <Route path="/create-account" component={ CreateAccount } />
          <Route path="/signup" component={ SignUp } />
          <Route path="/dashboard" component={ Dashboard } />
        <Footer />

      </Router>

    )
  }

}

export default App
