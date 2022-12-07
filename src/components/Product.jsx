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
          <h3>{product.title}</h3>
          <p>{product.description.substring(0,53)}...</p>
          <h4>Kshs. {product.price}</h4>
        </div>
      </div>
    </div>
  )
}
