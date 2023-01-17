import {NavLink, Outlet, useLocation} from 'react-router-dom'
import {BsFillCartPlusFill} from 'react-icons/bs'
import {useDispatch, useSelector} from 'react-redux'
import '../App.css'
import { searchItem } from '../redux/reducers/productSlice'


export default function RootLayout() {
    const dispatch = useDispatch()
    const location = useLocation()
    const path = location.pathname

    const cart = useSelector(state => state.products.cart) ?? []
    const product = useSelector(state => state.products.cart) ?? []

    return (
        <div className='root-layout'>
            {
            ! path.includes('admin') && <header>
                <nav>
                    <NavLink to='/' className="logo"><img src='./images/Llogo.png' alt="Logo"/></NavLink>
                    <div className="filterfield">
                        <input onChange={(e) => dispatch(searchItem(e.target.value))} type="text" id="searchInput" placeholder="Search..."/>
                    </div>
                    <div className='thepages'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to="products">Shop</NavLink>
                        <NavLink to='cart' id="cart"><span><BsFillCartPlusFill/></span><span>{
                                cart.length
                            }</span>
                        </NavLink>
                        <NavLink to='signin'>My Account</NavLink>
                        <NavLink to="checkoutpage">Checkout</NavLink>
                    </div>

                </nav>
            </header>
        }

            <main>
                <Outlet/>
            </main>
        </div>
    )
}