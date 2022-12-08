import React from 'react'
import Product from './Product'

export default function ShowProducts({filter, search}) {
    return (
        <div>
            <div className='products-wrapper'>
                {search(filter).map((product) =>
                    <Product product={product} key={product.id} />
                )}
            </div>
        </div>
    )
}
