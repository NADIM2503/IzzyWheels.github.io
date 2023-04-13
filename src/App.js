import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import NavbarNew from "./Components/NavbarNew"
import Store from './Components/Store';
import PageNotFound from './Components/PageNotFound';    
import Contact from "./Components/Contact";
import Footer from './Components/Footer';
import ProductInfo from './Components/ProductInfo';
import Cart from './Components/Cart';
import{CartProvider} from 'react-use-cart';




function App() {
  return (
    <>
    <CartProvider>
    <Router>
      
    <NavbarNew/>
    <Routes>


      <Route path='/' element={<Home/>}/>
      <Route path='/Store' element={<Store/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/PageNotFound' element={<PageNotFound/>}/>
      <Route path='/ProductInfo/:id' element={<ProductInfo/>}/>

    </Routes>
    <Footer/> 
    </Router>
    </CartProvider>
    </>
  );
}

export default App;
