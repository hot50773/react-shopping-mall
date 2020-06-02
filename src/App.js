import React from 'react'
import MyHeader from './MyHeader'
// import ProductList from './components/ProductListFunc'
import ProductListWrapper from './components/ProductListWrapper'
// import ProductDetails from './components/ProductDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams
} from 'react-router-dom'

function App () {
  const data = {
    imgSrc: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=951&q=80',
    name: '灰色質感羊毛上衣 - 女',
    price: '$1299',
    storage: [
      { size: 'S', storageNum: 2 },
      { size: 'M', storageNum: 2 },
      { size: 'L', storageNum: 2 }
    ]
  }
  return (
    <div>
      {/* Router */}
      <Router basename='/'>
        <MyHeader />

        <Switch>
          <Route path='/detail/:id'>
            <PrintId />
            {/* <ProductDetails name={data.name} imgSrc={data.imgSrc} price={data.price} storage={data.storage} /> */}
          </Route>

          <Route path='/' exact>
            <Redirect to='/list/all' />
          </Route>

          <Route path='/list/:name' component={ProductListWrapper} />
        </Switch>
      </Router>
    </div>
  )
}

// TEST
function PrintId () {
  const { id } = useParams()
  console.log('print id')
  return (<div>Product id: {id}</div>)
}

export default App
