import React, { useEffect, useState } from 'react'
import "../styles/AddProduct.css"
import { useParams, useNavigate } from 'react-router-dom'

export default function AddProduct({ addToProducts }) {

    // Params Constant
    const params = useParams()
    // eslint-disable-next-line no-unused-vars
    const [id, setId] = useState(params.id)
    // navigate
    const navigate = useNavigate()

    // Handling change in form
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: 0,
        quantity:1,
        image_url: ""
    })

    function handleInputChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        if (id) {
            fetch(`/products/${id}`)
                .then(resp => resp.json())
                .then((item) => {
                    setFormData(item);
                })
        }
    },
        [id]
    );

    function handleFormSubmit(e) {
        e.preventDefault()
        fetch(`/products/${id ? '/' + id : ''}`, {
            method: id ? "PUT" : "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((item) => addToProducts(item))
        setTimeout(() => {
            navigate(`/products`)
        }, 2000);
    }

    return (
        <div className='Product'>
            <h1>{id ? "Edit Product" : "Add Product"}</h1>
            <div className='AddProduct'>
                <form onSubmit={handleFormSubmit}>
                    <div className='input-control'>
                        <label>Title</label>
                        <input type="text" required name='title' onChange={handleInputChange} value={formData.title} />
                    </div>
                    <div className='input-control'>
                        <label>Price</label>
                        <input type="number" name='price' required onChange={handleInputChange} value={formData.price} />
                    </div>
                    <div className='input-control'>
                        <label>Description</label>
                        <textarea cols="" rows="5" name='description' required onChange={handleInputChange} value={formData.description}></textarea>
                    </div>
                    <div className='input-control'>
                        <label>Image URL</label>
                        <input type="text" name='image_url' required onChange={handleInputChange} value={formData.image_url} />
                    </div>
                    <div className='input-control'>
                        <button type='submit'>{id ? "Update Product" : "Add Product"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
