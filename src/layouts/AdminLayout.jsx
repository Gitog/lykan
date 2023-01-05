import { NavLink, Outlet } from 'react-router-dom'
import '../css/admin/home.css'
import {GiClothes} from 'react-icons/gi'
import {VscNewFile} from 'react-icons/vsc'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import  {FiUsers} from 'react-icons/fi'
import {BiLogOutCircle} from 'react-icons/bi'

function AdminLayout() {
  return (
    <div className='admin'>
      <h1 className='welcome'>WELCOME TO ADMIN PAGE</h1>
      <div className='adminlayout'>
      <nav>
        <NavLink to='displayproducts'><GiClothes /> All Products</NavLink>
        <NavLink to='newproduct'><VscNewFile/>New Product</NavLink>
        <NavLink to='orders'><AiOutlineUnorderedList />Orders</NavLink>
        <NavLink to='clients'><FiUsers />Clients</NavLink>
        <NavLink to='/'><BiLogOutCircle />Logout</NavLink>
      </nav>
      </div>
      <Outlet/>
    </div>
  )
}

export default AdminLayout