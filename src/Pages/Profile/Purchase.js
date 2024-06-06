import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
// import Footer from "../../Components/Footer";
// import Header from "../../Components/header";
// import Img from "../../assets/Image/Stationary.jpg";
import axios from "axios";
import { baseUrl } from "../../Components/Constant";

function Purchase() {
  const [order, setOrder] = useState([]);

  const bookingOrder = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .get(`${baseUrl}/accounts/booking-details/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setOrder(res.data.booking);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    bookingOrder();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4 text-warning fw-bold display-5">Purchase History</h2>
        <div className="row">
          <div className="col-lg-2 col-2">
            <Sidebar />
          </div>
          <div className="col-lg-10 col-10 g-0  g-1">
            <div class="row">
              {order.map((item, index) =>
                item.pursed_product.map((product, productIndex) => (
                  <div class="col-md-4 mb-5">
                    <div key={productIndex}>
                      {
                        order.length > 0 ? (
                          <div className="cardc">
                          {product.all_images && product.all_images[0] && (
                            <img
                              src={`${baseUrl}/${product.all_images[0].image}`}
                              className="card-img-top"
                              alt="Purchase"
                              style={{ width: "100%" }}
                            />
                          )}
                          <div className="card-body bg-black">
                            {product.product && (
                              <>
                                <h5 className="card-title">{product.product.product_name}</h5>
                                <p className="card-text">Price: ₹{product.product.dis_price}</p>
                              </>
                            )}
  
                          </div>
                        </div>
                        ):<div>
                          <p className="text-white">NO PURCHASED PRODUCT</p>
                        </div>
                      }
                    
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Purchase;