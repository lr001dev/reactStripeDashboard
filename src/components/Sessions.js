import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

class Sessions extends Component {
  render() {
    return (
      <>
      <main>
        <Carousel>
          {
            this.props.sessions.map((theSession, index) => {
              return(
                <Carousel.Item key={index} >
                  <img
                  className="d-block w-100"
                  src={theSession.img_url}
                  alt="First slide"
                  />
                <Carousel.Caption key={index} >
                  <h3>{theSession.name}</h3>
                  <h4>{theSession.modality}</h4>
                  <p>{theSession.description}</p>
                </Carousel.Caption>
                </Carousel.Item>
                )
              })
            }
        </Carousel>
        </main>
      </>
    )
  }
}
export default Sessions
