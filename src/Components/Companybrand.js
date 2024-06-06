import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BrandImg from "../assets/Image/brand1.webp";

const brand = {
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true, // Enable autoplay
  autoplayTimeout: 2000, // Autoplay interval in milliseconds (5 seconds)
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
function Companybrand() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel className="owl-theme" loop margin={10} nav {...brand}>
              <div className="item ">
                <img src={BrandImg} className="componyImg" />
              </div>
              <div className="item ">
                <img src={BrandImg} className="componyImg" />
              </div>
              <div className="item ">
                <img src={BrandImg} className="componyImg" />
              </div>
              <div className="item ">
                <img src={BrandImg} className="componyImg" />
              </div>
              <div className="item ">
                <img src={BrandImg} className="componyImg" />
              </div>
              <div className="item ">
                <img src={BrandImg} className="componyImg" />
              </div>
              <div className="item ">
                <img src={BrandImg} className="componyImg" />
              </div>
              <div className="item ">
                <img src={BrandImg} className="componyImg" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companybrand;
