import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ProductCard from './components/ProductCard'

const MyBody = (props) => {
  return (
    <Container>
      <Row>
        <Col xs='6' md='4' lg='3'><ProductCard /></Col>
        <Col xs='6' md='4' lg='3'><ProductCard /></Col>
        <Col xs='6' md='4' lg='3'><ProductCard /></Col>
        <Col xs='6' md='4' lg='3'><ProductCard /></Col>
      </Row>
    </Container>
  )
}

export default MyBody
