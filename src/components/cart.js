import React from "react";

function Cart({cart, removeCart})
{
	
	return(
<React.Fragment>

  <br />
  <div className="container">
      <h1 className="phead"> MY CART</h1>
      <hr />

      <div className="row">
  

      {
        cart.map((products, idx)=>(

    
     <div className="col-md-4" key={idx}>
      <figure className="card card-product" className="card card-body bg-light">
        <div className="img-wrap">
         <img className="figure-img img-responsive rounded" src={products.image} />
        </div>
        
           <h4 className="title"> { products.title } </h4>
           <p className="feat"> { products.feat }</p>
     <select name="p" class="custom-select mb-3">
      <option selected>0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    
        <div className="bottom-wrap">
          <a  className="btn btn-danger btn-md float-right" onClick={()=>removeCart(products)} > Remove </a>
          <div className="cost-wrap h5">
             <span className="cost-new">{ products.cost } </span>
          </div>
        </div>
      </figure>
     
    </div>

          )


          )
      }

   </div>
   </div>

</React.Fragment>
    );
}
export default Cart;