import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Adddisc';  
import Getproducts from './components/Getdisc'; 
import Makepayment from './components/Makepayment';


function App() {
  return (
    
    <Router>
      
      <div className="App">
       
        <Routes>
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Adddisc' element={<Addproduct />} />  
          <Route path='/' element={<Getproducts />} />  
          <Route path='/makepayment' element={<Makepayment />} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
