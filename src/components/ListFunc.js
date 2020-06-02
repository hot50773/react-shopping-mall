import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'

function ProductList () {
  // 0. init products state
  const [products, updateProducts] = useState([])
  // const { url } = useRouteMatch()

  // 1. get params from URL
  const { name } = useParams()
  if (['women', 'men', 'all'].indexOf(name) <= -1) throw new Error('category not exist')

  // 2. update to state
  const [category, getCategory] = useState(name)

  // 3. fetch product list and update state (must bind with state 'category' or it will cause error)
  useEffect(() => {
    window.fetch(`/list/${category}`)
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
  }, [category])

  // 4. render
  // const renderSingleColumnCard = ({ id = null, name = '', imgSrc = '', price = '' } = {}) => {
  //   return (
  //     <Col xs='6' md='4' lg='3'>
  //       <ProductCard imgSrc={imgSrc} name={name} id={id} price={price} />
  //     </Col>
  //   )
  // }

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
            // return renderSingleColumnCard({
            //   id: product.id,
            //   name: product.name,
            //   imgSrc: product.imgSrc,
            //   price: product.price
            // })
          })
        }
      </Row>
    </Container>
  )
}

export default ProductList
