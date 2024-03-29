import './App.css';
import {createBrowserRouter, 
   Route, 
   createRoutesFromElements,
   RouterProvider} from 'react-router-dom'
   //pages
import Homepage from './pages/Homepage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import NewProduct from './pages/admin/NewProduct';
import Clients from './pages/admin/Clients';
import CheckoutPage from './pages/Checkoutpage';
import DisplayProducts from './pages/admin/DisplayProducts';
import Orders from './pages/admin/Orders';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

//layout
import RootLayout from './layouts/RootLayout';
import AdminLayout from './layouts/AdminLayout';
import Footer from './layouts/Footer'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
    <Route index element={<Homepage />} />
    <Route path='signup' element={<Signup />} />
    <Route path='signin' element={<Signin />} />
    <Route path='products' element={<Products />} />
    <Route path='products' element={<SingleProduct />} />
    <Route path='cart' element={<Cart />} />
    <Route path='checkoutpage' element={<CheckoutPage />} />
  
    <Route path='admin' element={<AdminLayout />}>
       <Route path='displayproducts' element={<DisplayProducts />} />
       <Route path='newproduct' element={<NewProduct />} />
       <Route path='orders' element={<Orders />} />       
       <Route path='clients' element={<Clients/>} />
       <Route path='signup' element={<Signup />} />
       <Route path='signin' element={<Signin />} />
      </Route>

        {/* error page */}
    <Route path='*' element={<NotFound />} />
  </Route>
  )
)


function App() {
  return (
    <div className='app'>
   <RouterProvider router={router}/>
   <Footer />
  </div>
  );
}

export default App;
