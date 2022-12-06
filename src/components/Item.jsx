import React, { useEffect } from 'react'
import "../styles/Item.css"
import { useParams, useNavigate } from 'react-router-dom'

export default function Item() {

    const { id } = useParams()
    // const navigate = useNavigate()
    // function handleAddToCart(item) {
    //     addToCart(item)
    // }

    useEffect(() => {
        fetch(`/products/${id}`)
        .then((res) => res.json())
        .then((items) => console.log(items))
    },[])
    
    // function handleDelete(product) {
    //     fetch(`/products/${product.id}`, {
    //         method: "DELETE"
    //     })
    //         .then((res) => res.json())
    //         .then(() => deleteItem(product))
    // }
    return (
        <div className='ProductDetail'>
            {/* <h1 className='pagetitle'>Product Details</h1>
            {itemData.filter((item) => item.title === title).map((product, index) =>
                <div className='Item' key={index}>
                    <div className='productImage'>
                        <img src={product.image_url} alt="" />
                    </div>
                    <div className='Description'>
                        <h1>{product.title}</h1>
                        <h2>Category: {product.category.name}</h2>
                        <h2>Kshs. {product.price}</h2>
                        <a href={`edit/${product.id}`}><h3>Edit Details</h3></a>
                        <h3 onClick={() => {handleDelete(product); navigate(`/products`)}}>Delete Item</h3>
                        <p>{product.description}</p>
                        <div>
                            <button className='bt1' onClick={() => { handleAddToCart(product); }}>Add to Cart</button>
                            <button className='bt2' onClick={() => { navigate(`/cart`) }}>Go to Cart</button>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    )
}
