import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Product({ product }) {
  const navigate = useNavigate()
  return (
    <div className='product-container' onClick={() => { navigate(`/products/${product.id}`); }}>
      <div className='product'>
        <div className='image'>
          <img src={product.image_url} alt='' />
        </div>
        <div className='details'>
          <h2>{product.title}</h2>
          <h2>Kshs. {product.price}</h2>
        </div>
      </div>
    </div>
  )
}
