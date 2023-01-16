import {useDispatch, useSelector} from "react-redux";
import '../css/cart.css'
import {addToCart} from "../redux/reducers/productSlice";
import ProductsCard from "../components/productsCard";
export default function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.products.cart)
    // const cart = useSelector(selectCart) ?? []
    console.log(cart)
    const addItemToCard = () => dispatch(addToCart())
    
    return (

        <div className="carthome">
            <div className='cartdiv'>
                <h1>Your Basket</h1>
                <div className="carttrendy">
                   {cart.map((product) => <ProductsCard key={product.id} product={product} addToCart={addItemToCard}/> )}
                </div>
                <button>Proceed to checkout</button>
            </div>
        </div>
    )
}
