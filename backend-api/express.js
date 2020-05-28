const express = require('express')
const app = express()
const port = 5100

const productsData = require('./products-data')

app.get('/test', (req, res) => {
  res.json({ num1: '1', num2: 2, num3: 4 })
})

app.get('/list/:tag', (req, res) => {
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

app.get('/product/:id', (req, res) => {
  const id = req.params.id

  const product = productsData.filter(item => item.id === id)

  if (product === undefined || product === null || Object.keys(product).length === 0 || product.length === 0) {
    res.status(404).send(`Product of id "${id}" doesn't exist. Please recheck it!`) // status code reference: https://noob.tw/restful-api/
  }

  res.json(product)
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
