import React from "react";
import { useEffect, useState } from "react";

// plugins
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import ProImg from "../assets/Image/Stationary.jpg";
import ProImgg from "../assets/Image/pr1.webp";

Fancybox.bind('[data-fancybox="gallery"]', {
  //
});

function ProductImg() {
  const [mainImage, setMainImage] = useState(ProImg);

  useEffect(() => {
    // Update main image source when a thumbnail is clicked
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        setMainImage(thumbnail.src);
      });
    });
  }, []);

  return (
    <div>
      <div className="card productCard" style={{ width: "32rem" }}>
        <div className="">
          <div style={{ position: "relative", textAlign: "center" }}>
            <a data-fancybox="gallery" href={mainImage} className="zoom-img">
              <img id="featured" src={mainImage} alt="" className="proImg" />
            </a>

            <div
              className="bottom-right proImage"
              id="ProductImage"
              style={{ display: "none" }}
            ></div>
          </div>

          {/* 4 Images */}
          <div className="fourImg px-4 my-2 mt-4 mb-5">
            <div className="row">
              <div className="col-sm-3 col-3">
                <img
                  className="thumbnail active"
                  style={{ width: "100%" }}
                  src={ProImgg}
                  alt=""
                />
              </div>

              <div className="col-sm-3 col-3">
                <img
                  className="thumbnail"
                  style={{ width: "100%" }}
                  src={ProImg}
                  alt=""
                />
              </div>

              <div className="col-sm-3 col-3">
                <img
                  className="thumbnail"
                  style={{ width: "100%" }}
                  src={ProImgg}
                  alt=""
                />
              </div>

              <div className="col-sm-3 col-3">
                <img
                  className="thumbnail"
                  style={{ width: "100%" }}
                  src={ProImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductImg;
