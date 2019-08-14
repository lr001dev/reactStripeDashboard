import React, { Component } from 'react'
import { BASE_URL } from '../constants.js'
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Form, Button } from 'react-bootstrap'
import DateTimePicker from 'react-datetime-picker'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class DashboardSession extends React.Component {
  state = {
    date: new Date(),
    session: this.props.theSession,
    userId: this.props.userId
  }
  onChange = date => this.setState({ date })

  handleSubmit = (event) => {
    event.preventDefault()
    const addDateFormInputs = {
      booking: {
        booked_date: this.state.date,
        session_id: this.state.session.id
      }
    }
    this.createBooking(addDateFormInputs)
  }
  createBooking = (bookingData) => {
    fetch(`${ BASE_URL }/users/${ this.state.userId }/bookings/`, {
      body: JSON.stringify(bookingData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      }
    })
    .then(() => {
      this.props.bookedSession()
      this.notify()
    })
    .catch(err=> console.log(err))
  }

  notify = () => toast("Date Added")

  render() {
    return (
      <Col sm>
        <Card style={{ width: '18rem' }}>
          <ToastContainer />
          <Card.Img variant="top" src={ this.state.session.img_url } />
          <Card.Body>
            <Card.Title>{ this.state.session.name }</Card.Title>
              <Card.Text>
              { this.state.session.description }
              </Card.Text>
            </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{ this.state.session.length } minutes</ListGroupItem>
            <ListGroupItem>{ this.state.session.modality }</ListGroupItem>
            <ListGroupItem>Trainer is { this.state.session.trainer }</ListGroupItem>
            <ListGroupItem>
              <DateTimePicker onChange={this.onChange} value={this.state.date} />
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Control
                    type="hidden"
                    id="date"
                    value= { this.state.date }
                  />
                </Form.Group>
                <Button type="submit" variant="primary">Add Date To Your Schedule</Button>
              </Form>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    )
  }
}

export default DashboardSession
