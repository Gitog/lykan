import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import Carousel from "../components/Carousel";
import {addToCart, addToProducts, addToAllProducts} from "../redux/reducers/productSlice";
import ProductsCard from "../components/productsCard";
import {useEffect} from 'react'
import axios from 'axios'

export default function Homepage() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    
    const { products } = useSelector(state => state.products)
    let randomProduct = Math.random() * products ?. length - 4

    const addItemToCard = (product) => dispatch(addToCart(product))

    useEffect(() => {
        axios({method: 'GET', url: 'http://localhost:3000/products'}).then((res) => {
            dispatch(addToProducts(res.data))
            dispatch(addToAllProducts(res.data))
        }).catch(err => console.log(err))
    }, [])
    console.log(products )

    return (

        <div className="home">
            <Carousel/>

            <div className='main'>
                <h1 className="homeh1">EXPLORE TRENDING PRODUCTS</h1>
                <div className="trendy">
                    {
                    products ?. slice(0, 4).map((product) => <ProductsCard key={
                            product.id
                        }
                        product={product}
                        addToCart={addItemToCard}/>)
                } </div>
            </div>
            <div className="branding1">
                <h5>Latest & Fashion & Design</h5>
                <button type='button'
                    onClick={
                        () => {
                            navigate("/products")
                        }
                }>SHOP
                </button>
            </div>
            <div className="bycategory">
                <h1 className="homeh1">SHOP BY CATEGORY</h1>
                <div className="thecategories">
                    <div className="c1">
                        <img src="https://cdn.pixabay.com/photo/2020/07/11/16/16/jeans-5394561_960_720.jpg" alt="jeans"/>
                    </div>
                    <div className="c1">
                        <img src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_960_720.jpg" alt="shirts"/>
                    </div>
                    <div className="c1">
                        <img src="https://cdn.pixabay.com/photo/2017/12/15/18/50/isolated-3021541_960_720.png" alt="suit"/>
                    </div>
                    <div className="c1">
                        <img src="https://cdn.pixabay.com/photo/2016/11/19/11/33/footwear-1838767_960_720.jpg" alt="shoes"/>
                    </div>
                </div>
            </div>

            <div className="branding1">
                <h5>Quality & Affordable Wear</h5>
                <button type='button'
                    onClick={
                        () => {
                            navigate("/cart")
                        }
                }>
                    CART
                </button>
            </div>
            <h1 className="homeh1">MORE PRODUCTS</h1>
            <div className="trendy">
                {

                products ?. slice(randomProduct, randomProduct + 4).map((product) => <ProductsCard key={
                        product.id
                    }
                    product={product}
                    addToCart={addItemToCard}/>)
            } </div>

            <div className='info'>

                <div className='info-details'>
                    <div className='im'>
                        <img src='images/delivery.png' alt='Delivery'/>
                    </div>
                    <div className="dt">
                        <h2>Standard Shipping</h2>
                        <p>On all orders</p>
                    </div>
                </div>
                <div className='info-details'>
                    <div className='im'>
                        <img src='images/calendar.png' alt='Join anytime'/>
                    </div>
                    <div className="dt">
                        <h2>Join Risk Free</h2>
                        <p>30 days Refund</p>
                    </div>
                </div>
                <div className='info-details'>
                    <div className='im'>
                        <img src='images/support.png' alt='Support'/>
                    </div>
                    <div className="dt">
                        <h2>Support 24/7</h2>
                        <p>Online 24 hours</p>
                    </div>
                </div>
                <div className='info-details'>
                    <div className='im'>
                        <img src='images/padlock.png' alt='Secure'/>
                    </div>
                    <div className="dt">
                        <h2>100% safe</h2>
                        <p>Secure shopping</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
