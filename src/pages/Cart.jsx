import {useDispatch, useSelector} from "react-redux";
import '../css/cart.css'
import CartCard from "../components/cartCard";

import { useNavigate } from 'react-router-dom';

import {removeFromCart} from "../redux/reducers/productSlice";



export default function Cart() {
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector(state => state.products.cart)
    // const cart = useSelector(selectCart) ?? []
    console.log(cart)
    const removeItemFromCart = (product) => dispatch(removeFromCart(product))

    function handleProceedToCheckout(){
        const user = JSON.parse(localStorage.getItem("user"))
        if(!user){
            navigate("/signin")
        }else{
            navigate("/checkoutpage")
        }
    }

    return (

        <div className="carthome">
            <div className='cartdiv'>
                <h1>My Basket</h1>
                <div className="carttrendy">
                   {cart.map((product) => (
                   <CartCard
                      key={product.id}
                      product={product}
                      removeFromCart={removeItemFromCart} />
                    ))}
                </div>
                <button type="button" onClick={handleProceedToCheckout}>Proceed to checkout</button>
            </div>
        </div>
    )
}
