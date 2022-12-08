import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Review from './Review'
import "../styles/Item.css"

export default function Item({ addToCart, user }) {

    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(false)

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
    }, [reload])

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
                {user !== null && user.role === 'admin' &&
                    <div className='update-delete'>
                        <button className='button button1'><a href={`edit/${product.id}`}>Edit Product</a></button>
                        <button className='button button2' onClick={() => { handleDelete(product); navigate(`/products`) }}>Delete Product</button>
                    </div>
                }
                <div className="reviews">
                    <h2>Reviews</h2>
                    <hr style={{ marginBottom: ".5em" }} />
                    {product.reviews.length === 0 &&
                        <div className="review-items" style={{textAlign:"center"}}>
                            <h2 >There are no reviews for this product.</h2>
                            <p>Be the first on to review.</p>
                        </div>
                    }
                    {product.reviews.length > 0 &&
                        <div className='review-items'>
                            {product.reviews.map((review) =>
                                <div key={review.id} className='comment'>
                                    <p className='username'>{review.user.username}: </p> <p> {review.comment}</p>
                                </div>
                            )}
                        </div>
                    }
                    {user === null && 
                        <p style={{color:"blue"}}>Please login to review product.</p>
                    }

                    {user !== null &&
                        <Review user={user} product={product} setReload={setReload} />
                    }
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
