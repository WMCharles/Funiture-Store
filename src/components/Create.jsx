import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/Create.css'

export default function Create() {

    // states
    const [categories, setCategories] = useState([])
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const params = useParams()

    // eslint-disable-next-line no-unused-vars
    const [id, setId] = useState(params.id)

    // fetching categories
    useEffect(() => {
        fetch('/categories')
            .then((response) => response.json())
            .then((data) => {
                setCategories(data)
            })
    }, [])

    // Form inputs
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: 0,
        category_id: 1,
        quantity: 1,
        image_url: ""
    })

    // handling input change 
    function handleInputChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    // fetching data while editing
    useEffect(() => {
        if (id) {
            fetch(`/products/${id}`)
                .then(resp => resp.json())
                .then((item) => {
                    setFormData(item);
                })
        }
    }, [id]);

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
        <div className='Products'>
            <h1>{id ? "Edit Product" : "Add Product"}</h1>
            <form onSubmit={handleFormSubmit}>
                <label for="fname">Title</label>
                <input type="text" id="fname" name='title' onChange={handleInputChange} value={formData.title} placeholder="Enter product title" />

                <label for="fname">Price</label>
                <input type="text" id="fname" name='price' onChange={handleInputChange} value={formData.price} placeholder="Enter Price" />

                <label for="lname">Image</label>
                <input type="text" id="lname" name='image_url' onChange={handleInputChange} value={formData.image_url} placeholder="Enter image url" />

                <label for="country">Category</label>
                <select id="country" name='category_id' onChange={handleInputChange}>
                    {categories.map((category) =>
                        <option key={category.id} value={category.id}>{category.name}</option>
                    )}
                </select>

                <label for="subject">Description</label>
                <textarea id="subject" name='description' onChange={handleInputChange} value={formData.description} placeholder="Add description. Minimum (50 Characters)"></textarea>

                <div className="errors">
                    {errors.length > 0 && (
                        <div style={{ color: "red" }}>
                            {errors.map((error) => (
                                <p key={error}>{error}</p>
                            ))}
                        </div>
                    )}
                </div>
                <input type="submit" value={id ? "Update Product" : "Add Product"}></input>
            </form >
        </div>
    )
}
