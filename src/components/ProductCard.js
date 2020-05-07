import React from 'react'
import './ProductCard.css'

function ProductCard (props) {
  return (
    <div class='product-card'>
      <a class='product-card__img-wrapper' href='/detail/product-id'>
        <img class='product-card__img' src='https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=951&q=80' alt='灰色質感羊毛上衣 - 女' />
      </a>
      <div class='product-card__name'>灰色質感羊毛上衣 - 女</div>
      <div class='product-card__price'>$1299</div>
    </div>
  )
}

export default ProductCard
