import React from 'react'
import { withRouter } from 'react-router-dom'
import ProductDetailsView from './ProductDetailsView'
import axios from 'axios'
// TODO: Router https://pjchender.blogspot.com/2018/11/react-react-router-dynamic-breadcrumb.html
class ProductDetailsWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = { id: null, productData: null }
  }

  componentDidMount () {
    if (this.props.match.params.name !== this.state.id) {
      const id = this._synchronizeIDFromURL() // 1. get url params

      this._loadAsyncData({ url: `/api/product/${id}` })
    }
  }

  componentDidUpdate () {
    if (this.props.match.params.id !== this.state.id) {
      const id = this._synchronizeIDFromURL() // 1. get url params

      this._loadAsyncData({ url: `/api/product/${id}` })
    }
  }

  _synchronizeIDFromURL () {
    const id = this.props.match.params.id

    this.setState({ id: id })

    return id
  }

  _loadAsyncData ({ url = null } = {}) {
    axios({
      method: 'get',
      url,
      timeout: 10000
    })
      .then((res) => {
        this.setState({ productData: res.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render () {
    const data = this.state.productData || null

    if (data === null) {
      return 'loading...'
    } else {
      return (
        <ProductDetailsView
          name={data.name}
          imgSrc={data.imgSrc}
          price={data.price}
          storage={data.storage}
        />
      )
    }
  }
}

export default withRouter(ProductDetailsWrapper)
