import React, { useState } from 'react'

export default function Review({ product, user, setReload }) {

    // formData
    const [formData, setFormData] = useState({
        comment: "",
        product_id: product.id,
        user_id: user.id
    })

    // handle on change 
    function handleInputChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    // handleFormSubmit
    function handleFormSubmit(e) {
        e.preventDefault()
        setReload(true);
        fetch(`https://funiture-store-api-production.up.railway.app/reviews`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((res) => {
                if (res.ok) {
                    res.json().then((review) => console.log(review));
                } else {
                    res.json().then((errorData) => console.log(errorData.errors));
                }
            })

    }

    return (
        <div className='input-review'>
            <form onSubmit={handleFormSubmit}>
                <textarea id="subject" name="comment" placeholder="Leave your review..." value={formData.comment} onChange={handleInputChange}></textarea>
                <input type="submit" value="Submit" className='btnxx' />
            </form>
        </div>
    )
}
