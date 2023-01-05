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
                <NavLink to='/'>Home</NavLink>
                <NavLink to='signin'>Sign In</NavLink>
                <NavLink to="products">Shop</NavLink>
            </nav>
        </header>}
       
        <main>
            <Outlet />
        </main>
    </div>
  )
}
