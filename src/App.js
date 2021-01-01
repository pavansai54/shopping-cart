import React from 'react';
import Products from './components/Section';
import Cart from './components/cart';
import Menu from './components/bar.svg';
import cartIcon from './components/cart.svg';
import './App.css';
import { useState } from 'react';



function App() 
{

  const PAGE_PRODUCTS = "produts";
  const PAGE_CART = "cart";
  const [cart , setCart]= useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  


 const addToCart = (product)=>
 {
    console.log( product.title +" is added to cart.");
    setCart([...cart,{...product}]);
 };

 const navigateTo = (nextpage)=>
 {
      setPage(nextpage);
 }

 const removeCart = (productToRemove)=>
 {
  console.log( productToRemove.title +" is removed from cart.");
    setCart(cart.filter((product)=> product!== productToRemove));
 }

  return (
    <React.Fragment>
    <header class="site-header sticky-top py-1" >
     <div className="App container-fluid">
     <div class=" flex-fill p-3 bg-light text-white">
    <nav className="navbar navbar-expand-md   " >
     <div className ="menu" >
                    <img src={Menu} alt="" width="40"/>
                    </div>
                    <div className="logo">
                      </div>
    <div >
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">
       
        <a className="nav-link" href="/" className="display-4 font-weight-normal  font-weight-bold"><span >ShoppMe</span></a>
        </li>
        
        <li className="nav-item home">
        <a className="nav-link" href="/" class="font-weight-bold"  class="badge badge-light">Home</a>
        </li>

        <li className="nav-item home1">
        <a className="nav-link"  href="/"  class="badge badge-light">Contact</a>
        </li>

        <li className="nav-item home2">
        <a className="nav-link" className="py-2 d-none d-md-inline-block" href="/"  class="badge badge-light">Price</a>
        </li>

        <li className="nav-item home3">
        <button   className= "display-5 font-weight-normal " className="float-right" onClick={()=>navigateTo(PAGE_CART)}>
            GoCart{ "("+cart.length+")"}
<img src ={cartIcon} alt="" width="30"></img>
        </button>
        </li>
        </ul>
       </div>
    </nav>
    </div>
    </div>
 </header>
  
 

<div>
      {page===PAGE_PRODUCTS && <Products addToCart={addToCart}/>}
      {page===PAGE_CART && <Cart cart = {cart} removeCart = {removeCart}/>}
</div>
 
 </React.Fragment>
  );

}

export default App;