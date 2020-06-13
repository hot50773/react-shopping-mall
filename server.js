// require('@google-cloud/debug-agent').start()

const express = require('express')
const path = require('path')
// const { ErrorReporting } = require('@google-cloud/error-reporting')

// Using ES6 style imports via TypeScript or Babel
// import {ErrorReporting} from '@google-cloud/error-reporting';

// Instantiates a client
// const errors = new ErrorReporting()
const app = express()

// const ENV = process.env.NODE_ENV || 'development'
// process.env.NODE_ENV = 'production'
// const IS_PROD = (process.env.NODE_ENV === 'production')

// if (IS_PROD) {
  app.use(express.static(path.join(__dirname, './client/build')))
// }

// const port = process.env.PORT
// const port = IS_PROD ? process.env.PORT : 5100
// production
const port = 5100

// development
// const port = 5100

const productsData = require('./backend-api/products-data')

app.get('/api/test', (req, res) => {
  res.json({ num1: '1', num2: 2, num3: 4 })
})

app.get('/api/list/:tag', (req, res) => {
  const tag = req.params.tag.toLowerCase()

  if (['women', 'men', 'all'].indexOf(tag) < 0) res.status(404).send('404: resource not found!')

  if (tag === 'all') {
    res.json(productsData)
  } else {
    const list = productsData.filter(item => {
      return item.tags.some(t => t === tag)
    })

    res.json(list)
  }
})

app.get('/api/product/:id', (req, res) => {
  const id = req.params.id

  const product = productsData.filter(item => item.id === id)[0]

  if (product === undefined || product === null || Object.keys(product).length === 0 || product.length === 0) {
    res.status(404).send(`Product of id "${id}" doesn't exist. Please recheck it!`) // status code reference: https://noob.tw/restful-api/
  }

  res.json(product)
})

// setting root html of react for deployment
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

app.use((req, res, next, error) => {
  res.status(error.status || 500)
  res.send(error)
})

// / Note that express error handling middleware should be attached after all
// the other routes and use() calls. --- from GCP
// app.use(errors.express)

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

// --- backend:END
