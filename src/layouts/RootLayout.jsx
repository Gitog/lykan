import { NavLink, Outlet, useLocation } from 'react-router-dom'


export default function RootLayout() {
  const location = useLocation()
  const path = location.pathname
  // console.log(path.includes('admin'))
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
                <NavLink to='cart'>Cart</NavLink>
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
