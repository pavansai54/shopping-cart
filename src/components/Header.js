import React from 'react';
//import Menu from './bar.svg';
//import CartIcon from './cart.svg';
//import {Link} from  'react-router-dom';
//import './Header.css';
//import Section from './Section';
//import Cart from './cart';





function Header() 
{
/*
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

            </div>*/
           <text>
 <div class="container">
  <h2>Carousel Example</h2>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">

      <div class="item active">
        <img src="https://static.digit.in/default/d142953cb8bf34c26a9bebc4eadc55a0856d3762.png?tr=n-product_detail_leader_thumb" alt="Los Angeles" style="width:100%;"/>
        <div class="carousel-caption">
          <h3>Los Angeles</h3>
          <p>LA is always so much fun!</p>
        </div>
      </div>

      <div class="item">
        <img src="https://static.digit.in/default/d142953cb8bf34c26a9bebc4eadc55a0856d3762.png?tr=n-product_detail_leader_thumb" alt="Chicago" style="width:100%;"/>
        <div class="carousel-caption">
          <h3>Chicago</h3>
          <p>Thank you, Chicago!</p>
        </div>
      </div>
    
      <div class="item">
        <img src="https://static.digit.in/default/d142953cb8bf34c26a9bebc4eadc55a0856d3762.png?tr=n-product_detail_leader_thumb" alt="New York" style="width:100%;"/>
        <div class="carousel-caption">
          <h3>New York</h3>
          <p>We love the Big Apple!</p>
        </div>
      </div>
  
    </div>
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
 </text>
 
     ;
    }

 
export default Header;
