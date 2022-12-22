import { NavLink, Outlet } from 'react-router-dom'
import '../css/admin/home.css'

function AdminLayout() {
  return (
    <div className='admin'>
      <h1 className='welcome'>WELCOME TO ADMIN PAGE</h1>
      <div className='adminlayout'>
      <nav className='navlinks'>
        <NavLink to='displayproducts'>All Products</NavLink>
        <NavLink to='newproduct'>New Product</NavLink>
        <NavLink to='orders'>Orders</NavLink>
        <NavLink to='clients'>Clients</NavLink>
        <NavLink to='/'>Logout</NavLink>
      </nav>
      </div>
      <Outlet/>
    </div>
  )
}

export default AdminLayout