import React from "react";
import { baseUrl } from "./Constant";

function productDetailCard({ products }) {
  // Ensure products and products.all_feature are not undefined
  if (!products || !products.all_feature) {
    return null; // Render nothing if products or all_feature is undefined
  }

  return (
    <div>
      <div className="container">
        <div className="row ">
          {products.all_feature.map((item, index) => (
            <div key={index} className="col-md-4 mb-3 text-center ">
              <div className="card bg-dark h-100 w-100 border border-warning rounded ">
                <div className="text-center">
                  <img src={`${baseUrl}/${item.image}`}
                    alt='product'
                    className="card-img-top img-fluid"
                    style={{ height: '90px', width: '90px' }} />
                </div>
                <div className="card-body ">
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


  );
}

export default productDetailCard;
