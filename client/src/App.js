// https://coolors.co/0b132b-84dcc6-1c2541-ff6b6b-ffa69e
import React from 'react'
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
  const cartData = [
    {
      id: '123',
      name: 'Tomato Soup - 女',
      imgSrc: 'linear-gradient(#000, #fff)',
      price: '$598',
      orderSize: 'L',
      orderAmount: 2
    },
    {
      id: '120001',
      name: 'CAt Product',
      imgSrc: 'linear-gradient(#00a, #fff)',
      price: '$599',
      orderSize: 'M',
      orderAmount: 2
    }
  ]

  return (
    <div>
      {/* Router */}
      <Router basename='/'>
        <MyHeader cartData={cartData} />

        <article className='m-page-content-wrapper'>
          <Switch>
            <Route path='/detail/:id'>
              <ProductDetailsWrapper />
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
