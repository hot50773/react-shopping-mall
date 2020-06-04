import React from 'react'
import MyHeader from './MyHeader'
import ProductListWrapper from './components/ProductListWrapperFunc'
// import ProductListWrapper from './components/ProductListWrapper'
import ProductDetailsWrapper from './components/ProductDetailsWrapper'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

function App () {
  return (
    <div>
      {/* Router */}
      <Router basename='/'>
        <MyHeader />

        <Switch>
          <Route path='/detail/:id'>
            <ProductDetailsWrapper />
          </Route>

          <Route path='/list/:name' component={ProductListWrapper} />

          <Route path='/' exact>
            <Redirect to='/list/all' />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
