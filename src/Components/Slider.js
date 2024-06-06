import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "./Constant";
import { useGlobalContext } from "../Context/MyContext";


const options = {
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  dots: true,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};
function Slider({ product }) {

  const { AddCart } = useGlobalContext();

  const navigate = useNavigate();

  const handleBuyNow = (item) => {
    // Store the selected item in local storage
    localStorage.setItem('selectedItem', JSON.stringify(item));
    // Navigate to the checkout page
    navigate('/checkout');
  }

  const handleAddCart = (item) => {
    console.log(item)
    AddCart(item)

  }

  return (
    <div>
      <div className="container mb-4 mt-5">
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              nav
              {...options}
            >
              {
                product.allproduct.map((item, index) => {
                  console.log(item)
                  return (
                    <div class="item">
                      <div class="card border-warning best-1">
                        <Link to={`/product/${item.slug}`} style={{ textDecoration: 'none' }}>
                        {item.all_images && item.all_images.length > 0 && (
                          <img
                            src={`${baseUrl}${item.all_images[0].image}`}
                            className="card-img-top bestseller-1"
                            alt="category-img"
                          />
                        )}
                          <div className="card-body ">
                            <h5 className="card-title text-white text-center">
                              {item.product_name}
                            </h5>
                            <p className="card-text text-secondary text-center">
                              ₹{item.mrp_price} - ₹{item.dis_price}
                            </p>
                          </div>
                        </Link>

                        <div className="d-flex justify-content-around mb-3">
                          <button onClick={() => handleBuyNow(item)} className="btn btn-warning rounded-pill">
                            Buy Now
                          </button>
                          <div>
                            <button onClick={() => handleAddCart(item)} className="btn btn-success rounded-pill">
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  )
                })
              }
            </OwlCarousel>
          </div>
        </div>
      </div >
    </div >
  );
}

export default Slider;
