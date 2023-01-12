import {useDispatch, useSelector} from "react-redux";
import Carousel from "../components/Carousel";
import {addToCart} from "../redux/reducers/productSlice";
import ProductsCard from "../components/productsCard";
export default function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.products.cart)
    // const cart = useSelector(selectCart) ?? []
    console.log(cart)
    const addItemToCard = () => dispatch(addToCart())
    
    return (

        <div className="home">
            <div className='cart'>
                <h1>Your Basket</h1>
                <div className="trendy">
                   {cart.map((product) => <ProductsCard key={product.id} product={product} addToCart={addItemToCard}/> )}
                </div>
            </div>
          
        </div>
    )
}
