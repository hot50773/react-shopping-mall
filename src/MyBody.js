import { React } from 'react'
import { Container, Row, Col } from 'reactstrap'

function MyBody () {
  return (
    <Container>
      <Row>
        <Col sm='6' md='4' lg='3'>.col-6</Col>
        <Col sm='6' md='4' lg='3'>.col-6</Col>
        <Col sm='6' md='4' lg='3'>.col-6</Col>
      </Row>
    </Container>
  )
}

export default MyBody
