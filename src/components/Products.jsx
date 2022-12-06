import React from 'react'
import "../styles/Products.css"
import { useNavigate } from "react-router-dom"

export default function Products() {
  const navigate = useNavigate()

  return (
    <div className='products'>
        <div className='headers'>
          <h1>FUNITURES</h1>
          <h3 onClick={() => {navigate('/addproduct')}}>ADD FUNITURE</h3>
        </div>
        <div className='products-wrapper'>
          {/* {products.map((product, index) =>
              <Product product={product} key={index}/>
          )}  */}
        </div>
    </div>
  )
}
