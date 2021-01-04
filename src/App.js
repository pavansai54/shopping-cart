import React from 'react';
import Products from './components/Section';
import Cart from './components/cart';
import Menu from './components/bar.svg';
import cartIcon from './components/cart.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() 
{

  const PAGE_PRODUCTS = "products";
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
     <div class=" flex-fill p-3 bg-light text-white " className="well bg-light">
    <nav className="navbar navbar-expand-md   " >
     <div className ="menu" >
                    <button> <img src={Menu} alt="" width="40"/></button>
                    </div>
                    <div className="logo">
                      </div>
    <div >
      <ul className="navbar-nav ">
      <li className="nav-item">
       
        <a className="nav-link" href="/" className="display-4 font-weight-normal  font-weight-bold"><span >ShoppMe</span></a>
        </li>
        
        
        <div class="container d-flex flex-column flex-md-row justify-content-between" >
        <a class="py-2 d-none d-md-inline-block" href="#">Home</a>

        <a class="py-2 d-none d-md-inline-block" href="#">Product</a>
          <a class="py-2 d-none d-md-inline-block" href="#">Support</a>
          <a class="py-2 d-none d-md-inline-block" href="#">Contact</a>
          </div>
        
        <li className="nav-item home3">
        <button   className= "display-5 font-weight-normal " className="float" onClick={()=>navigateTo(PAGE_CART)}>
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

 <div id="demo" class="carousel slide" data-ride="carousel">

  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://rukminim1.flixcart.com/flap/844/140/image/5130c3e4895b5d5a.jpg?q=50" alt="Iphone XS"  width="1100" height="500"/>
    </div>
    <div class="carousel-item">
      <img src="https://rukminim1.flixcart.com/flap/844/140/image/b12af655d052f0fe.jpg?q=50" alt="Apple"  width="1100" height="500"/>
    </div>
    <div class="carousel-item">
      <img src="https://rukminim1.flixcart.com/flap/50/50/image/f43e4113ba12d1ac.jpg?q=50" alt="OnePlus"  width="1100" height="500"/>
    </div>
  </div>
<a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>

</div>

<div>
      {page===PAGE_PRODUCTS && <Products addToCart={addToCart}/>}
      {page===PAGE_CART && <Cart cart = {cart} removeCart = {removeCart}/>}
</div>
 
 </React.Fragment>
  );

}

export default App;