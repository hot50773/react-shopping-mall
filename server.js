require('@google-cloud/debug-agent').start()
const { ErrorReporting } = require('@google-cloud/error-reporting') // GCP error reporting
const errors = new ErrorReporting()

const productsData = require('./backend-data/products')

const express = require('express')
const path = require('path')
const app = express()

// const production = 'production'
const development = 'development'

const ENV = process.env.NODE_ENV || development // 未來要改成更安全的寫法
const PORT = process.env.PORT || 5100
const IS_DEV = (ENV === development)
const BUILD_PATH = './client/build'

if (!IS_DEV) {
  app.use(express.static(path.join(__dirname, BUILD_PATH)))
}

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

// setting root html of React
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, BUILD_PATH, 'index.html'))
})

app.use((req, res, next) => {
  res.status(404).send('Sorry cant find that!')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// GCP error handling
// Note that express error handling middleware should be attached after all the other routes and use() calls.
app.use(errors.express)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
