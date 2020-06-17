// https://coolors.co/0b132b-84dcc6-1c2541-ff6b6b-ffa69e
import React, { useState } from 'react'
import MyHeader from './MyHeader'
import ProductListWrapper from './components/ProductListWrapperFunc'
// import ProductListWrapper from './components/ProductListWrapper'
import ProductDetailsWrapper from './components/ProductDetailsWrapper'
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

function App (props) {
  const [cartData, setCartData] = useState([])

  const addToCartData = (item = { id: '', name: '', imgSrc: '', price: '', amount: 0, size: '' }) => {
    setCartData(prevCartData => {
      // copy array by value
      const newCartData = prevCartData.slice()

      newCartData.push({
        id: item.id,
        name: item.name,
        imgSrc: item.imgSrc,
        price: item.price,
        amount: item.amount,
        size: item.size
      })

      return newCartData
    })
  }

  return (
    <div>
      {/* Router */}
      <Router basename='/'>
        <MyHeader cartData={cartData} />

        <article className='m-page-content-wrapper'>
          <Switch>
            <Route path='/detail/:id'>
              <ProductDetailsWrapper addToCartData={addToCartData} />
            </Route>

            <Route path='/list/:name' component={ProductListWrapper} />

            <Route path='/' exact>
              <Redirect to='/list/all' />
            </Route>
          </Switch>
        </article>
      </Router>
    </div>
  )
}

export default App
