import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

class Footer extends Component {
  render() {
    return (
      <>
        <Navbar fixed="bottom" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/images/trainer.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
                {' React Fitness'}
          </Navbar.Brand>
        </Navbar>
      </>
    )
  }
}

export default Footer
