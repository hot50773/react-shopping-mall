import React from 'react'
import { withRouter } from 'react-router-dom'
import ProductListView from './ProductListView'

class ProductList extends React.Component {
  constructor (props) {
    super(props)

    this.state = { productList: [], categoryName: '' }
  }

  componentDidMount () {
    if (this.props.match.params.name !== this.state.categoryName) {
      const name = this._setupCategoryNameFromURL() // 1. get url params

      this._loadAsyncData({ url: `/list/${name}` }) // 2. fetch data and update state
    }
  }

  componentDidUpdate () {
    if (this.props.match.params.name !== this.state.categoryName) {
      const name = this._setupCategoryNameFromURL() // 1. get url params

      this._loadAsyncData({ url: `/list/${name}` }) // 2. fetch data and update state
    }
  }

  _setupCategoryNameFromURL () {
    const name = this.props.match.params.name

    if (['women', 'men', 'all'].indexOf(name) <= -1) {
      throw new Error('category not exist')
    } else {
      this.setState({ categoryName: name })
    }

    return name
  }

  _loadAsyncData ({ url = '' } = {}) {
    return (
      window.fetch(url)
        .then(res => res.json())
        .then(data => {
          this.setState({ productList: data })
        })
    )
  }

  render () {
    return (
      <ProductListView productList={this.state.productList} />
    )
  }
}

export default withRouter(ProductList)
