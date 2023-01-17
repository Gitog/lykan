import {useDispatch, useSelector} from "react-redux";
import '../css/cart.css'
import CartCard from "../components/cartCard";
import {removeFromCart} from "../redux/reducers/productSlice";


export default function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.products.cart)
    // const cart = useSelector(selectCart) ?? []
    console.log(cart)
    const removeItemFromCart = (product) => dispatch(removeFromCart(product))

    return (

        <div className="carthome">
            <div className='cartdiv'>
                <h1>Your Basket</h1>
                <div className="carttrendy">
                   {cart.map((product) => (
                   <CartCard
                      key={product.id}
                      product={product}
                      removeFromCart={removeItemFromCart} />
                    ))}
                </div>
                <button>Proceed to checkout</button>
            </div>
        </div>
    )
}
