import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import "../styles/Item.css"

export default function Item({ addToCart }) {

    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    function handleAddToCart(item) {
        addToCart(item)
    }

    const fetchProduct = async () => {
        fetch(`/products/${id}`)
            .then((res) => res.json())
            .then((item) => {
                setLoading(false)
                setProduct(item)
            })
    }
    useEffect(() => {
        fetchProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleDelete(product) {
        fetch(`/products/${product.id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
    }


    const ShowProduct = () => {
        return (
            <div className='ProductDetail'>
                <h1 className='pagetitle'>Product Details</h1>
                <div className='Item' >
                    <div className='productImage'>
                        <img src={product.image_url} alt="" />
                    </div>
                    <div className='Description'>
                        <h1>{product.title}</h1>
                        <h2>Category: {product.category.name}</h2>
                        <h2>Kshs. {product.price}</h2>
                        <p>{product.description}</p>
                        <div>
                            <button className='bt1' onClick={() => { handleAddToCart(product); }}>Add to Cart</button>
                            <button className='bt2' onClick={() => { navigate(`/cart`) }}>Go to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='update-delete'>
                    <button className='button button1'><a href={`edit/${product.id}`}>Edit Product</a></button>
                    <button className='button button2' onClick={() => { handleDelete(product); navigate(`/products`) }}>Delete Product</button>
                </div>
                <div className="reviews">
                    <hr style={{ marginBottom: ".5em" }} />
                    <h2>Reviews</h2>
                    <div className='review-items'>
                        {product.reviews.map((review) =>
                            <div key={review.id} className='comment'>
                                <p className='username'>{review.user.username}: </p> <p> {review.comment}</p>
                            </div>
                        )}
                    </div>
                    <div className='input-review'>
                        <form>
                            <textarea id="subject" name="subject" placeholder="Leave your review..."></textarea>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {loading ? <Loading /> : <ShowProduct />}
        </div>
    )
}
