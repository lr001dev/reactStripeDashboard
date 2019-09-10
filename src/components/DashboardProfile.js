import React, { Component } from 'react'
import { BASE_URL } from '../constants.js'
import { Container, Card, CardDeck, Button, Table  } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class DashboardProfile extends Component {
  state = {
    currentUser: this.props.currentUser
  }

  deleteBooking = (bookingId, index) => {
    fetch(`${ BASE_URL }/users/${this.state.currentUser.user.id}/bookings/${bookingId}/`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      this.notify()
      this.props.bookingDeleted(index)
    })
      .catch(err=> console.log(err))
  }

  notify = () => toast("Session Canceled")
  render() {
    return (
      <Container className="profile-container">
        <ToastContainer />
        <h1>Upcoming Sessions</h1>
        <CardDeck>
        {
          this.state.currentUser.bookings.map((theBooking, index) => {
              if(index < 4) {
                return(
                    <Card key={index} body>
                      <Card.Img variant="top" src={theBooking.img_url} />
                      <Card.Body>
                        <Card.Title>{ theBooking.name }</Card.Title>
                        <Card.Text>
                          <p>Length: { theBooking.length } </p>
                          { theBooking.booked_date }
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">
                          <Button
                            onClick={() => {
                              this.deleteBooking(theBooking.id, index)
                              }}
                            variant="outline-warning" size="sm">Cancel Session
                          </Button>
                        </small>
                      </Card.Footer>
                    </Card>
                )
              } else {
                return(
                  <>
                  </>
                )
              }
            })
        }
        </CardDeck>
        <Table className="profile-table" responsive="sm">
          <thead>
            <tr>
              <th>Booking Id</th>
              <th>Image</th>
              <th>Length</th>
              <th>Modality</th>
              <th>Name</th>
              <th>Trainer</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.currentUser.bookings.map((theBooking, index) => {
              if(index > 4) {
                return (
                  <tr key={index}>
                    <td>{theBooking.id}</td>
                    <td><img alt="Fitness classes" width="50px" src={theBooking.img_url} /></td>
                    <td>{theBooking.length} min</td>
                    <td>{theBooking.modality}</td>
                    <td>{theBooking.name}</td>
                    <td>{theBooking.trainer}</td>
                    <td>
                      <Button
                        onClick={() => {
                          this.deleteBooking(theBooking.id, index)
                          }}
                        variant="outline-warning" size="sm">Cancel Session
                      </Button>
                    </td>
                  </tr>
                )
              } else {
                return(
                  <>
                  </>
                )
              }
            })
          }
          </tbody>
        </Table>
      </Container>
    )
  }
}

export default DashboardProfile
