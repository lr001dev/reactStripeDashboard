import React, { Component } from 'react'
import { BASE_URL } from '../constants.js'
import { BrowserRouter as Router, Redirect, Route, Link } from 'react-router-dom'
import DashboardProfile from './DashboardProfile'
import DashboardCommunity from './DashboardCommunity'
import DashboardSessions from './DashboardSessions'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers, faCalendarWeek } from '@fortawesome/free-solid-svg-icons'

class Dashboard extends React.Component {
  state = {
    currentUser: '',
    sessions: this.props.sessions,
    members: ''
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
      <Router>
      <Route render={({ location, history }) => (
          <React.Fragment>
              <SideNav
                  onSelect={(selected) => {
                      const to = '/' + selected;
                      if (location.pathname !== to) {
                          history.push(to);
                      }
                  }}
              >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="dashboard">
                      <NavItem eventKey="dashboard">
                          <NavIcon>
                            <FontAwesomeIcon icon={ faUser } />
                          </NavIcon>
                          <NavText>
                           My Dashboard
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="classes">
                          <NavIcon>
                            <FontAwesomeIcon icon={ faCalendarWeek } />
                          </NavIcon>
                          <NavText>
                              Class Catalog
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="community">
                          <NavIcon>
                              <FontAwesomeIcon icon={ faUsers } />
                          </NavIcon>
                          <NavText>
                              Community
                          </NavText>
                      </NavItem>
                  </SideNav.Nav>
              </SideNav>
              <main>
                <Route path="/dashboard" exact
                  render= { (props) => <DashboardProfile { ...props }
                  currentUser= { this.state.currentUser } /> }
                />
                <Route path="/classes"
                  render={ (props) => <DashboardSessions { ...props }
                  sessions= { this.state.sessions }
                  currentUserId= { this.state.currentUser.user.id }
                  getUser = { this.getUser }
                  /> }
                />
                <Route path="/community"
                  render= { (props) => <DashboardCommunity { ...props }
                  community= { this.state.members }/> }
                />
              </main>
          </React.Fragment>
      )}
      />
  </Router>
    )
  }
}

export default Dashboard
