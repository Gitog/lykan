import {addToCart, addToAllProducts, addToProducts, fetchCategories} from "../redux/reducers/productSlice";
import ProductsCard from "../components/productsCard";
import {useState, useEffect} from 'react'
import axios from 'axios'
import '../css/products.css'

import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './redux/reducers/counterSlice'


export default function Products() {

    const dispatch = useDispatch()
    const {products, allProducts, categories} = useSelector(state => state.products)
    // const cart = useSelector(selectCart) ?? []
    // console.log(state)
    const addItemToCard = (product) => dispatch(addToCart(product))

    const [selectedFilter, setSelectedFilter] = useState("")



    // const categories = {
    //     Shoes: 22,
    //     Clothes: 23,
    //     Accessories: 3
    // }

    const handleSelectChange = (e) => {
        const { value } = e.target
        setSelectedFilter(value)
        console.log('value', value)
        // const category = categories.find(category => category.name.toLowerCase() === value.toLowerCase())
        let filteredProducts = allProducts.filter(product => {
            console.log('product', product)
            return value == product.category_id
        })
        if (value === "All") {
            filteredProducts = allProducts
        }
        dispatch(addToProducts(filteredProducts))
    }

    useEffect(() => {
        axios.get('http://localhost:3000/products').then((res) => {
            dispatch(addToProducts(res.data))
            dispatch(addToAllProducts(res.data))
        }).catch(err => console.log(err))
        dispatch(fetchCategories())
    }, [])

    useEffect(() => {
        
    }, [categories])
    


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
                            {categories.map(category => <option value={category.id}>{category.name}</option>)}
                        </select>
                    </div>
                 </div>
                 <div className="productsdiv">

                    {
                    products.map((product) => <ProductsCard key={
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
