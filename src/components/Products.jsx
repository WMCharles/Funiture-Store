import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Loading from "./Loading"
import Filter from "./Filter"
import ShowProducts from "./ShowProducts"
import "../styles/Products.css"

export default function Products({ user }) {

    // states 
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // navigation
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilter(data);
                setIsLoading(false);
            });
    }, [isLoading]);

    // filter products based on categories
    const filterProducts = (category) => {
        const updatedList = products.filter(
            (product) => product.category.name === category
        );
        setFilter(updatedList);
    };

    // search state
    const [query, setQuery] = useState("");

    // search fields
    const keys = ["title", "description"];

    // search function
    function search(data) {
        return data.filter((data) =>
            keys.some((key) => data[key].toLowerCase().includes(query.toLowerCase()))
        );
    }

    return (
        <div className='products'>
            <Filter input={setQuery} setFilter={setFilter} filterProducts={filterProducts} products={products} />
            <div className='headers'>
                {user && user.role === 'admin' &&
                    <button onClick={() => { navigate('/addproduct') }} className='addbtn'>Add New Product</button>
                }
            </div>
            {isLoading ? <Loading /> : <ShowProducts search={search} filter={filter} />}
        </div>
    )
}
