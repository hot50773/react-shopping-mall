import React from 'react'
import MyHeader from './MyHeader'
import MyBody from './MyBody'
import ProductDetails from './components/ProductDetails'

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
      <MyHeader />
      <ProductDetails name={data.name} imgSrc={data.imgSrc} price={data.price} storage={data.storage} />
      {/* <MyBody /> */}
    </div>
  )
}

export default App
