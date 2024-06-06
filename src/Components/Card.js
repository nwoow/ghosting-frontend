import React from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "./Constant";

function Card({ item }) {
  console.log(item);
  return (
    <div className="col-lg-3 mb-4 col-6 ">
      <Link to={`/product/${item.product.slug}`} style={{ textDecoration: 'none' }}>
        <div className="card border-warning best-1" style={{ borderRadius: "15px" ,overflow: "hidden" }}>
         {
          item && item.all_images.length > 0 &&(
            <img 
            src={`${baseUrl}/${item.all_images[0].image}`}
            style={{height:"auto",width:"100%"}}
            alt="product"
            />
          )
         }
          <div className="card-body">
            <h5 className="card-title text-white text-center" style={{fontSize:"19px",fontWeight:"500"}}>
              {item.product.product_name}
            </h5>
            <p className="card-text text-secondary text-center"  style={{fontSize:"19px",fontWeight:"500"}}>
              ₹{item.product.mrp_price} - ₹{item.product.dis_price}
            </p>
            <div className="text-center">
              <span className="btn btn-warning rounded-pill">
                Go to product detail
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
