import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'

function ProductListWrapper () {
  // 0. init states
  const [products, updateProducts] = useState([])
  const [categoryName, getCategoryName] = useState('')

  const { name } = useParams()
  if (['women', 'men', 'all'].indexOf(name) <= -1) throw new Error('category not exist')

  useEffect(() => {
    // 1. get URL params: name
    if (categoryName !== name) {
      // 2. update to state
      getCategoryName(name)

      // 3. fetch product list and update state (must bind with state 'category' or it will cause error)
      window.fetch(`/list/${name}`)
        .then(res => res.json())
        .then(data => updateProducts(data))
        .catch(err => console.log(err))

      // Async/Await 寫法
      // async function fetchData () {
      //   const res = await window.fetch(`/list/${category}`)

      //   res.json()
      //     .then(data => updateProducts(data))
      //     .catch(err => console.log(err))
      // }

      // fetchData()
    }
  })

  // 4. render
  return (
    <Container>
      <Row>
        {
          products.map(product => {
            return (
              <Col key={`col${product.id}`} xs='6' md='4' lg='3'>
                <ProductCard
                  imgSrc={product.imgSrc}
                  name={product.name}
                  id={product.id}
                  price={product.price}
                />
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default ProductListWrapper
