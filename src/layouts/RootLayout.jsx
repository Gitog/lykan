import { NavLink, Outlet, useLocation } from 'react-router-dom'
import {BsFillCartPlusFill}  from 'react-icons/bs'
import { selectCart } from '../redux/reducers/selectors'
import { useSelector } from 'react-redux'


export default function RootLayout() {
  const location = useLocation()
  const path = location.pathname
  // console.log(path.includes('admin'))
  const cart = useSelector(state => state.products.cart) ?? []
  console.log(cart)
  return (
    <div className='root-layout'>
      {!path.includes('admin') &&  <header>
            <nav>
                <NavLink to='/' className="logo"><img src='./images/Llogo.png'alt="Logo"/></NavLink>
                <div className="filterfiled">
                  <input type="text" id="searchInput" placeholder="Search..."/>
                </div>
                <div className='thepages'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to="products">Shop</NavLink>
                <NavLink to='cart'><span><BsFillCartPlusFill/></span><span>{cart.length}</span></NavLink>
                <NavLink to='signin'>My Account</NavLink>
                <NavLink to="checkoutpage">Checkout</NavLink>
                </div>
               
            </nav>
        </header>}
       
        <main>
            <Outlet />
        </main>
    </div>
  )
}
