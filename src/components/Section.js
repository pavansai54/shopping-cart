import React from "react";
import { useState } from 'react';

function Product({addToCart})
{
	const [products] = useState([
        {
            title:"Realme 7 Pro ",
            feat:"Compact form factor, OxygenOS UI offers smooth usability,HDR-supported display",
            image:"https://static.digit.in/default/26af91b06c0e70e2de1d0ea6dd5aca991b81bb28.jpeg?tr=n-product_detail_leader_thumb",
            cost:"$77"
          },
          {
            title:"OppoReno  ",
            feat:"Compact form factor, OxygenOS UI offers smooth usability,HDR-supported display",
            image:"https://static.digit.in/default/a7955398437519b88f79fa9b1841e6906f069fab.jpeg?tr=n-product_detail_leader_thumb",
            cost:"$51"
          },
          {
            title:"Redmi9PRO ",
            feat:"Compact form factor, OxygenOS UI offers smooth usability,HDR-supported display",
            image:"https://static.digit.in/default/ee594eee7b2d1fa81762babf601677144f6e6a84.jpeg?tr=n-product_detail_leader_thumb",
            cost:"$17"
          },
         {
      title:"Samsung Galaxy Note20 Ultra ",
      feat:"Compact form factor, OxygenOS UI offers smooth usability,HDR-supported display",
      image:"https://static.digit.in/default/3692426d6a2255a6c64465b294b89b658add404f.jpeg?tr=n-product_detail_leader_thumb",
      cost:"$74"

     },
     {
        title:"Asus ",
        feat:"Compact form factor, OxygenOS UI offers smooth usability,HDR-supported display",
        image:"https://static.digit.in/default/73d8a2a98fd1ed4fefb0906779d201a86fc232ed.jpeg?tr=n-product_detail_leader_thumb",
        cost:"$41"
      },
      {
        title:"Samsung Galaxy S20 Ultra 5g       ",
        feat:"Compact form factor, OxygenOS UI offers smooth usability,HDR-supported display",
        image:"https://static.digit.in/default/69da7d4dd608dd61694ae318eefd0bcecf29c6e7.jpeg?tr=n-product_detail_leader_thumb",
        cost:"$60"
      },
     {
  title:"Samsung Galax ",
  feat:"Compact form factor, OxygenOS UI offers smooth usability,HDR-supported display",
  image:"https://static.digit.in/default/418cc90461c44bb580374d58e82ea9d48b59b88d.jpeg?tr=n-product_detail_leader_thumb",
  cost:"$88"

 },
 {
    title:"ViVo Y20 ",
    feat:"Compact form factor, OxygenOS UI offers smooth usability,HDR-supported display",
    image:"https://static.digit.in/default/6376aad06b8ccca1ebcc89f4d286972f103ab316.jpeg?tr=n-product_detail_leader_thumb",
    cost:"$14"
  },
  {
    title:"OnePlus Nord   ",
    feat:"Compact form factor, OxygenOS UI offers smooth usability,HDR-supported display",
    image:"https://static.digit.in/default/da502c9b7c4eb1168eb3b8db6861c1e33501f6d3.jpeg?tr=n-product_detail_leader_thumb",
    cost:"$122"
  },
  {
    title:"Redmi 9 Prime",
    feat:"Compact form factor, OxygenOS UI offers smooth usability,HDR-supported display",
    image:"https://static.digit.in/default/017d91ae13f8d31a685539980863cbace0f244a6.jpeg?tr=n-product_detail_leader_thumb",
    cost:"$36"
  },
 {
title:"Samsung Galaxy M54",
feat:"Compact form factor, OxygenOS UI offers smooth usability,HDR-supported display",
image:"https://static.digit.in/default/b213f6c1ac65b223296919ff397d8334b41b93fa.jpeg?tr=n-product_detail_leader_thumb",
cost:"$46"
},
   {
        title:"OnePlus8T  ",
        feat:"Compact form factor, OxygenOS UI offers smooth usability,HDR-supported display",
        image:"https://static.digit.in/default/36b13ef36655eae101b44c7e0f14d79eb63a8935.jpeg?tr=n-product_detail_leader_thumb",
        cost:"$104"
      },
      

    ]);



	return(
		<React.Fragment>  

      <h1 > BestProducts </h1>


<div className="container">
      <div className="row">
  

      {
        products.map((product, idx)=>(

    
     <div className="col-md-4" key={idx}>
      <figure className="card card-body bg-light">
        <div className="img-wrap">
         <img className="figure-img img-responsive rounded" src={product.image} />
        </div>
        
        
           <h4 className="title"> { product.title } </h4>
           <p className="feat"> { product.feat }</p>
        

        <div >
          <a  className="btn btn-outline-secondary  stretched-link btn-md float-right" onClick={()=>addToCart(product)}>Add to Cart</a>
          <div className="price-wrap h5">
             <span className="price-new">{ product.cost} </span>
          </div>
        </div>
      </figure>
    </div>


          )


          )
      }

   </div>

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
    </div>
</React.Fragment>

	);
}

export default Product;