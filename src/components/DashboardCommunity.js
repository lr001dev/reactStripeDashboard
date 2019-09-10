import React, { Component } from 'react'
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

class DashboardCommunity extends Component {
  render() {
    return (
      <Container className="community">
        <h1>Community</h1>
        <Row>
        {
          this.props.community.map((member) => {
            return (
              <Col key={member.id} sm>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                  <Card.Body>
                    <Card.Title>{ member.first_name } { member.last_name }</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                      </Card.Text>
                    </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>email: { member.email }</ListGroupItem>
                    <ListGroupItem>username: { member.username }</ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            )
          })
        }

      </Row>
    </Container>
    )
  }
}

export default DashboardCommunity
