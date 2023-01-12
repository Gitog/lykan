import {useDispatch, useSelector} from "react-redux";
import Carousel from "../components/Carousel";
import {addToCart} from "../redux/reducers/productSlice";
import ProductsCard from "../components/productsCard";
export default function Homepage() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    // const cart = useSelector(selectCart) ?? []
    console.log(state)
    const addItemToCard = (product) => dispatch(addToCart(product))
    const products = [
        {
            id: 1,
            img_url: 'https://cdn.pixabay.com/photo/2015/04/09/19/53/sock-715022_960_720.jpg',
            name: "socks",
            price: "1200"
        },
        {
            id: 2,
            img_url: 'https://cdn.pixabay.com/photo/2015/04/09/19/53/sock-715022_960_720.jpg',
            name: "socks",
            price: "1200"
        },
        {
            id: 3,
            img_url: 'https://cdn.pixabay.com/photo/2015/04/09/19/53/sock-715022_960_720.jpg',
            name: "socks",
            price: "1200"
        },
        {
            id: 4,
            img_url: 'https://cdn.pixabay.com/photo/2015/04/09/19/53/sock-715022_960_720.jpg',
            name: "socks",
            price: "1200"
        }, {
            id: 5,
            img_url: 'https://cdn.pixabay.com/photo/2015/04/09/19/53/sock-715022_960_720.jpg',
            name: "socks",
            price: "1200"
        }
    ]
    return (

        <div className="home">

            <Carousel/>

            <div className='main'>
                <h1>EXPLORE TRENDING PRODUCTS</h1>
                <div className="trendy">
                   {products.map((product) => <ProductsCard key={product.id} product={product} addToCart={addItemToCard}/> )}
                </div>
            </div>
            <div className="branding1">
                <h5>Latest & Fashion & Design</h5>
                <button type='button'>SHOP
                </button>
            </div>
            <div className="bycategory">
                <h1>SHOP BY CATEGORY</h1>
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
                <h5>Latest & Fashion & Design</h5>
                <button type='button'>SHOP
                </button>
            </div>
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
