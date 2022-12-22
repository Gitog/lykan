import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className='root-layout'>
        <header>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='signin'>Sign In</NavLink>
                <NavLink to="products">Men's Wear</NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}
