import React, { Component } from 'react'
import DashboardSession from './DashboardSession'
import { Container, Row } from 'react-bootstrap'

class DashboardSessions extends React.Component {

  render() {
    return (
      <Container>
        <Row>
        {
          this.props.sessions.map((theSession) => {
            return (
              <DashboardSession
                key={ theSession.id }
                theSession={ theSession }
                userId = { this.props.currentUserId }
                getUser = { this.props.getUser }
              />
            )
          })
        }
      </Row>
    </Container>
    )
  }
}

export default DashboardSessions
