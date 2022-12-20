import './App.css';
import {createBrowserRouter, 
   Route, 
   createRoutesFromElements,
   RouterProvider} from 'react-router-dom'
   //pages
import Homepage from './pages/Homepage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
    <Route index element={<Homepage />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/signin' element={<Signin />} />
  </Route>
  )
)


function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
