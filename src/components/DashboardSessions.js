import React, { Component } from 'react'
import DashboardSession from './DashboardSession'
import { Container, Row, CardDeck } from 'react-bootstrap'

class DashboardSessions extends React.Component {

  render() {
    return (
      <Container className="sessions">
        <h1>Book A Session Based On Your Schedule</h1>
        <CardDeck>
        {
          this.props.sessions.map((theSession) => {
            return (
              <DashboardSession
                key={ theSession.id }
                theSession={ theSession }
                userId = { this.props.currentUserId }
                bookedSession = { this.props.bookedSession }
              />
            )
          })
        }
      </CardDeck>
    </Container>
    )
  }
}

export default DashboardSessions
