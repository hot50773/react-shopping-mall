import React from 'react'
import { Link } from 'react-router-dom'
// import './ProductCard.css'

function ProductCard (props) {
  return (
    <div className='product-card'>
      <Link to={`/detail/${props.id}`}>
        <div className='product-card__img-wrapper'>
          <div className='product-card__img' style={{ backgroundImage: `url("${props.imgSrc}")` }} alt={props.name} />
        </div>
      </Link>
      <div className='product-card__name'>{props.name}</div>
      <div className='product-card__price m-font-family-number m-font-size-3 font-weight-bold text-primary'>{props.price}</div>
    </div>
  )
}

export default ProductCard
