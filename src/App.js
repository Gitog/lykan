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
import NewProduct from './pages/admin/NewProduct';
import Clients from './pages/admin/Clients';
import DisplayProducts from './pages/admin/DisplayProducts';
import NotFound from './pages/NotFound';

//layout
import RootLayout from './layouts/RootLayout';
import AdminLayout from './layouts/AdminLayout';






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
    <Route index element={<Homepage />} />
    <Route path='signup' element={<Signup />} />
    <Route path='signin' element={<Signin />} />
    <Route path='products' element={<Products />} />
    
  
    <Route path='admin' element={<AdminLayout />}>
       <Route path='displayproducts' element={<DisplayProducts />} />
       <Route path='newproduct' element={<NewProduct />} />
       <Route path='clients' element={<Clients/>} />
      </Route>

        {/* error page */}
    <Route path='*' element={<NotFound />} />
  </Route>
  )
)


function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
