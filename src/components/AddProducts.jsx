import React, { useEffect, useState } from 'react'
import "../styles/AddProduct.css"
import { useParams, useNavigate } from 'react-router-dom'

export default function AddProduct() {

    // Params Constant
    const params = useParams()
    // eslint-disable-next-line no-unused-vars
    const [id, setId] = useState(params.id)
    // navigate
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])


    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('/categories')
            .then((response) => response.json())
            .then((data) => {
                setCategories(data)
            })
    }, [])

    // Handling change in form
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: 0,
        category_id: 1,
        quantity: 1,
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
        fetch(`/products${id ? '/' + id : ''}`, {
            method: id ? "PATCH" : "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((res) => {
                if (res.ok) {
                    res.json().then((product) => console.log(product));
                    navigate(`/products`)
                } else {
                    res.json().then((errorData) => setErrors(errorData.errors));
                }
            })

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
                    <div className='select-control'>
                        <label htmlFor="category">Select Category</label>
                        <select className='select-options' name='category_id' onChange={handleInputChange}>
                            {categories.map((category) =>
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )}
                        </select>
                    </div>
                    <div className='input-control'>
                        {errors.length > 0 && (
                            <div style={{ color: "red" }}>
                                {errors.map((error) => (
                                    <p key={error}>{error}</p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className='input-control'>
                        <button type='submit'>{id ? "Update Product" : "Add Product"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
