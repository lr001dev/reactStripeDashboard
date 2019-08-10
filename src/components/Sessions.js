import React, { Component } from 'react'
import Session from './Session.js'
import Carousel from 'react-bootstrap/Carousel'

class Sessions extends React.Component {
  render() {
    return (
      <>
        <Carousel>
          {
            this.props.sessions.map((theSession) => {
              return(
                <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={theSession.img_url}
                  alt="First slide"
                  />
                <Carousel.Caption>
                  <h3>{theSession.name}</h3>
                  <h4>{theSession.modality}</h4>
                  <p>{theSession.description}</p>
                </Carousel.Caption>
                </Carousel.Item>
                )
              })
            }
        </Carousel>
      </>
    )
  }
}
export default Sessions
