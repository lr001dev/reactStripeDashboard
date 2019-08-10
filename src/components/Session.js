import React, { Component } from 'react'
import { Carousel, Item, Caption } from 'react-bootstrap'

class Session extends React.Component {
  render() {
    return (
        <>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src={this.props.theSession.img_url}
            alt="First slide"
            />
          <Carousel.Caption>
            <h3>{this.props.theSession.name}</h3>
            <h4>{this.props.theSession.modality}</h4>
            <p>{this.props.theSession.description}</p>
          </Carousel.Caption>
          </Carousel.Item>
        </>
    )
  }
}
export default Session
