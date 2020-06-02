import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import ProductCard from './ProductCard'

class ProductListView extends React.Component {
  render () {
    const productList = this.props.productList

    return (
      <Container>
        <Row>
          {
            productList.map(product => {
              return (
                <Col xs='6' md='4' lg='3' key={`col${product.id}`}>
                  <ProductCard
                    imgSrc={product.imgSrc}
                    name={product.name}
                    id={product.id}
                    price={product.price} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    )
  }
}

export default withRouter(ProductListView)
