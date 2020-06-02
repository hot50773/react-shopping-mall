import React from 'react'
import './ProductCard.css'

function ProductCard (props) {
  return (
    <div className='product-card'>
      <a className='product-card__img-wrapper' href={`/detail/${props.id}`}>
        <div className='product-card__img' style={{ backgroundImage: `url("${props.imgSrc}")` }} alt={props.name} />
      </a>
      <div className='product-card__name'>{props.name}</div>
      <div className='product-card__price'>{props.price}</div>
    </div>
  )
}

export default ProductCard
