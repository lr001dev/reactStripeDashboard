import React, { Component } from 'react'
import { BASE_URL } from '../constants.js'
import { BrowserRouter as Router, Redirect, Route, Link } from 'react-router-dom'
import DashboardProfile from './DashboardProfile'
import DashboardMembers from './DashboardMembers'
import DashboardSessions from './DashboardSessions'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'

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
                              <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                          </NavIcon>
                          <NavText>
                              My Dashboard
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="classes">
                          <NavIcon>
                              <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                          </NavIcon>
                          <NavText>
                              Class Catalog
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="community">
                          <NavIcon>
                              <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                          </NavIcon>
                          <NavText>
                              Community
                          </NavText>
                      </NavItem>
                  </SideNav.Nav>
              </SideNav>
              <main>
                <Route path="/dashboard" exact
                  render= { (props) => <DashboardProfile { ...props } /> }
                />
                <Route path="/classes"
                  render={ (props) => <DashboardSessions { ...props } /> }
                />
                <Route path="/members"
                  render= { (props) => <DashboardMembers { ...props } /> }
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
