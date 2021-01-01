/*import { useState } from 'react';
import Menu from './bar.svg';
import CartIcon from './cart.svg';
import {Link} from  'react-router-dom';
import './Header.css';
import Section from './Section';
import Cart from './cart';





function Header({handleIncrement}) 
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

 const removeCart = (productsToRemove)=>
 {
  console.log( productsToRemove.title +" is removed from cart.");
    setCart(cart.filter((products)=> products!== productsToRemove));
 }
    return (
            <div>
            <header>
                <div className ="menu" >
                    <img src={Menu} alt="" width="20"/>
                    </div>
                    <div className="logo">
                        <h1>
                            <Link  to="/">ShoppMe</Link>
                        </h1>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="/" >Home</Link> </li>
                                <li><Link to="/product" >Products</Link> </li>
                                <li><Link to="/contact" >Contact</Link> </li>
                                <li><Link to="/about" >About</Link> </li>
                              </ul>
                              <button className="nav-cart"   onClick={()=>navigateTo(PAGE_CART)}>GOCart({this.state.value})
                              <div >
                                  <span>0</span>
                                  <Link to="/cart">
                                      <img src={CartIcon} alt="" width="30"/>
                                  </Link>
                              </div>
                          </button>    
                    </nav>
            </header>
            
            {page===PAGE_PRODUCTS && <products addToCart={addToCart}/>}
      {page===PAGE_CART && <Cart cart = {cart} removeCart = {removeCart}/>}

            </div>
           
          );
    }

 
export default Header;*/