/*import React, { Component } from 'react';
import {Link, Route, Router} from 'react-router-dom';
import cartIcon from './cart.svg';
import menu from './bar.svg';
import GoCart from './Section';
import{BrowserRouter}
class NavBar extends Component {
  state= {
    value: 0
};
handleClick()
{

}
 handleIncrement = () => {
    this.setState({value: this.state.value + 1})
}


    render() { 
        return ( 
        <React.Fragment>
  <header class="site-header sticky-top py-1">
          <nav>
                <div class="container d-flex flex-column flex-md-row justify-content-between">
                <a class="py-2" href="#" aria-label="Product">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
    </a>

            
                      
                <a class="py-2 d-none d-md-inline-block" href="#">Product</a>
          <a class="py-2 d-none d-md-inline-block" href="#">Features</a>
          <a class="py-2 d-none d-md-inline-block" href="#">Support</a>
          <a class="py-2 d-none d-md-inline-block" href="#">Pricing</a>


         <button
         class="btn btn-outline-primary"
         onClick={this.handleClick}
        >
           GoCart({this.state.value})
<img src ={cartIcon} alt="" width="40"></img>

</button>
</div>  
      </nav>
        </header>
  
<main>

      <div class="container">
      <div class="jumbotron">
         
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="text-muted-50 bg-light-dark ">
        <h1 class="display-4 font-weight-normal">ShoppMe</h1>
        <p class="text-secondary"
        class="text-black-50" class="lead font-weight-normal">Latest Phone Factory </p>
        <a class="btn btn-outline-secondary  stretched-link" href="#">New ModelsOfMobiles</a>
      </div>
      
      </div>
      </div>
      </div>
      </main>
      
      
      <div class="product-device box-shadow d-none d-md-block"></div>
      <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
    
  
  
 <textPath>       
    <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center ">
        <div class="my-3 p-3">
        <div class="row">
    <div class="col-sm-9" >
        <div class="card">
  <div class="card-body">
          <h2 class="display-5">OnePlus</h2>
          <p class="lead">8TPRO</p>
          <h3>$124</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqY5KJdzN1A8mqgMETWAoOhziu2ytqmXOEjA&usqp=CAU" /> 
        </div>
        <button class="btn btn-secondary  stretched-link" onClick={this.handleIncrement}>AddCart</button>
        </div>
        </div>
        </div>
        </div>
</div>

        
    <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center ">
        <div class="my-3 p-3">
        <div class="col-sm-9">
        <div class="card">
  <div class="card-body">
          <h2 class="display-5">OnePlus</h2>
          <p class="lead">8T</p>
          <h3>$124</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqY5KJdzN1A8mqgMETWAoOhziu2ytqmXOEjA&usqp=CAU" /> 
        </div>
        <button class="btn btn-secondary  stretched-link" onClick={this.handleIncrement}>AddCart</button>
        </div>
        </div>
        </div>
        </div>

</div>
</div>

<div class="row">        
<div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center ">
        <div class="my-3 p-3">
        <div class="col-sm-9">
        <div class="card">
  <div class="card-body">
          <h2 class="display-5">Iphone</h2>
          <p class="lead">12PRO</p>
          <h3>$124</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqY5KJdzN1A8mqgMETWAoOhziu2ytqmXOEjA&usqp=CAU" /> 
        </div>
        <button class="btn btn-secondary  stretched-link" onClick={this.handleIncrement}>AddCart</button>
        </div>
        </div>
        </div>
        </div>

        
    <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center ">
        <div class="my-3 p-3">
        <div class="col-sm-6">
        <div class="card">
  <div class="card-body">
          <h2 class="display-5">OnePlus</h2>
          <p class="lead">8TPRO</p>
          <h3>$124</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqY5KJdzN1A8mqgMETWAoOhziu2ytqmXOEjA&usqp=CAU" /> 
        </div>
        <button class="btn btn-secondary stretched-link" onClick={this.handleIncrement}>AddCart</button>
        </div>
        </div>
        </div>
        
        </div>
</div>
</div>
</div>
</textPath>

  <footer class="container py-5">
  <div class="row">
    <div class="col-12 col-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
      <small class="d-block mb-3 text-muted">&copy; 2020</small>
    </div>
    <div class="col-6 col-md">
      <h5>Features</h5>
      <ul class="list-unstyled text-small">
        <li><a class="link-secondary" href="#">Latest Products</a></li>
        <li><a class="link-secondary" href="#">Excellent Feature</a></li>
        <li><a class="link-secondary" href="#">Porper Maintaince</a></li>
        <li><a class="link-secondary" href="#">Stuff Developers</a></li>
        <li><a class="link-secondary" href="#">Another one</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Resources</h5>
      <ul class="list-unstyled text-small">
        <li><a class="link-secondary" href="#">Resource name</a></li>
        <li><a class="link-secondary" href="#">Resource</a></li>
        <li><a class="link-secondary" href="#">Another resource</a></li>
        <li><a class="link-secondary" href="#">Final resource</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Contact</h5>
      <ul class="list-unstyled text-small">
        <li><a class="link-secondary" href="#"> Pavan</a></li>
        <li><a class="link-secondary" href="#">Tech@core</a></li>
        <li><a class="link-secondary" href="#">Pavansai@gmail.com</a></li>
        <li><a class="link-secondary" href="#">+91 6305342554</a></li>
      </ul>
    </div>
    
    </div>
    </footer>

      </React.Fragment>
      
    );
        }
}
export default NavBar;*/