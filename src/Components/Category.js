import React from "react";
import { baseUrl } from "./Constant";
import { Link } from "react-router-dom";

function Category({ item }) {

  return (
    <div  className=" col col-md-6 col-lg-4 mb-3">
      <Link to={`/subcategory/${item.slug}`}>
      <div className="cate-cards">
        <div className="card cat-card py-2">
          <img
            src={`${baseUrl}/${item.category_image}`}
            className="card-img-top cat-img"
            alt="Category img"
          />
          <div className="card-body">
            <h2 className="category-item">{item.category_name}</h2>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Category;
