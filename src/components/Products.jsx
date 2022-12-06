import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Loading from "./Loading"
import Product from "./Product"
import "../styles/Products.css"

export default function Products() {

    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchProducts = async () => {
        fetch('/products')
            .then((resp) => resp.json())
            .then((data) => {
                setLoading(false)
                setProducts(data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const ShowProducts = () => {
        return (
            <div>
                <div className='headers'>
                    <h1>FUNITURES</h1>
                    <h3 onClick={() => { navigate('/addproduct') }}>ADD FUNITURE</h3>
                </div>
                <div className='products-wrapper'>
                    {products.map((product, index) =>
                        <Product product={product} key={index} />
                    )}
                </div>
            </div>
        )
    }
    
    return (
        <div className='products'>
            {loading ? <Loading /> : <ShowProducts/>}
        </div>
    )
}
