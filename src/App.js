import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Signin from './pages/Signin';
import Signup from './pages/Signup';


function App() {
  return (
    <Router>
     <h1>Homepage</h1>
     <Routes>
       <Route path='/signup' element={<Signup />} />
       <Route path='/signin' element={<Signin />} />
     </Routes>
     
    </Router>
  );
}

export default App;
