import React from "react";

// Card
import Card from "../Components/Card";
import Category from "../Components/Category";
import Slider from "../Components/Slider";

// images
// import Icon from "../assets/Image/best-seller.png";
import Icon from "../assets/Image/best-seller.gif";
// import { MyContext } from '../Context/MyContext';

import { useGlobalContext } from "../Context/MyContext";

function Home() {
  const { category, subCategory, bestSeller } = useGlobalContext();
  //useState

  return (
    <div>
      <div className="mt-5 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mt-5">
              <div className="main-title">
                <h3 className="title">For All Your</h3>
                {/* <h1 className="sub-title">Marketing Needs</h1> */}
                <div class="main">
                  <h2 class="metal">Marketing Needs</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="category-section mb-5 mt-5">
        <section>
          <div className="container">
            <div className="row">
              {
                category.map((item, index) => {
                  return (
                    <Category key={index} item={item} />
                  )
                })
              }
            </div>
          </div>
        </section >
      </div>

      <div className="container">
        <div className="row mb-3">
          <h2 className="text-white fw-bold mb-3 ">
            Best Seller &nbsp;{" "}
            <img src={Icon} alt="icon" style={{ width: "45px" }} />
          </h2>

          {
            bestSeller.map((item, index) => {
              console.log(item.product.product_name)
              return (
                <Card key={index} item={item} />
              )
            })
          }
        </div>

      </div>

      {
        subCategory.map((item, index) => (
          <>
            <div key={index} className="container my-4 mt-5">
              <h2 className="text-white fw-bold ">
                {item.category_name}&nbsp;{" "}
              </h2>
            </div>
            <Slider key={index} product={item} />
          </>
        ))
      }
    </div >
  );
}

export default Home;
