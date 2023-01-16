import {addToCart} from "../redux/reducers/productSlice";
import ProductsCard from "../components/productsCard";
import {useState, useEffect} from 'react'
import axios from 'axios'
import '../css/products.css'

import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './redux/reducers/counterSlice'


export default function Products() {

    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    // const cart = useSelector(selectCart) ?? []
    // console.log(state)
    const addItemToCard = (product) => dispatch(addToCart(product))


    useEffect(() => {
        axios({method: 'GET', url: 'http://localhost:3000/products'}).then((res) => {
            setProducts(res.data)
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
                        <select name="categories" id="categories">
                            <option value="Suits">Shoes</option>
                            <option value="Jans">Clothes</option>
                            <option value="Blazers">Accessories</option>
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
