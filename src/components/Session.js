import React, { Component } from 'react'

class Session extends React.Component {
  render() {
    return (
        <>
      <h1>{this.props.theSession.name}</h1>
        </>
    )
  }
}
export default Session
