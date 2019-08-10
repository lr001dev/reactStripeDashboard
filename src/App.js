import React from 'react';
import { BASE_URL } from './constants.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { LinkContainer } from 'react-router-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
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
    fetch(`${ BASE_URL }/sessions`)
    .then(response => response.json())
    .then((sessionData) => {
      this.setState({ sessions: sessionData})
    })
    .catch(err=> console.log(err))
  }
  render() {
    return (
      <Router>
        <Header
          className="header"
          sessions = {this.state.sessions}
        />
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/signup" component={ SignUp } />
          <Route path="/dashboard" component={ Dashboard } />
        <Footer />
      </Router>



    )
  }

}

export default App
