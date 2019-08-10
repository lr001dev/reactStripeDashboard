import React, { Component } from 'react'
import Session from './Session.js'

class Sessions extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.sessions.map((theSession) => {
            return(
              <Session
                key={ theSession.id }
                theSession={ theSession }
              />
            )
          })
        }
      </div>
    )
  }
}
export default Sessions
