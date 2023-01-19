import {addToCart} from "../redux/reducers/productSlice";
import ProductsCard from "../components/productsCard";
import {useState, useEffect} from 'react'
import axios from 'axios'
import '../css/products.css'

import { useSelector, useDispatch } from 'react-redux'
import HomeCard from "../components/homeCard";
// import { decrement, increment } from './redux/reducers/counterSlice'


export default function Products() {

    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    // const cart = useSelector(selectCart) ?? []
    // console.log(state)
    const addItemToCard = (product) => dispatch(addToCart(product))

    const [selectedFilter, setSelectedFilter] = useState("")

    const categories = {
        Shoes: 1,
        Clothes: 2,
        Accessories: 3
    }

    const handleSelectChange = (e) => {
        const { value } = e.target
        setSelectedFilter(value)
        let filteredProducts = allProducts.filter(product => {
            return categories?.[value] === product.category_id
        })
        if (value === "All") {
            filteredProducts = allProducts
        }
        setProducts(filteredProducts)
        // console.log(">>.........", categories?.[value])
        console.log(e.target.value)
    }

    useEffect(() => {
        axios({method: 'GET', url: 'http://localhost:3000/products'}).then((res) => {
            setProducts(res.data)
            setAllProducts(res.data)
        }).catch(err => console.log(err))
    }, [])


    return (


        <div className="productspage">

            <div className="majorshop">
                <div className='row'>
                 <div className="rowheader">
                 <div className="majorshoptitle">
                        <h1>Shop</h1>
                    </div>
                    <div className="majorshopselector">
                        <select
                          name="categories"
                          id="categories"
                          value={selectedFilter}
                          onChange={handleSelectChange}>
                            <option value="All">All</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                    </div>
                 </div>
                 <div className="productsdiv">

                    {
                    products.map((product) => <HomeCard key={
                            product.id
                        }
                        product={product}
                        addToCart={addItemToCard}/>)
                }

                </div>
            </div>
            </div>
        </div>
    )
}
