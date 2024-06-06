import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { baseUrl } from "./Constant";
import axios from 'axios'
import ProductDetailCard from "./productDetailCard";
import { useGlobalContext } from "../Context/MyContext";

function ProductDetail() {

  const { AddCart } = useGlobalContext();
  const navigate = useNavigate();

  const [product, setProduct] = useState([])

  const { slug } = useParams();

  const getProduct = async () => {
    await axios.get(`${baseUrl}/products/productview/${slug}`)
      .then((res) => {
        setProduct(res.data.product)
      })
      .catch((error) => {
        console.log(error)
      })
  }


  const handleBuyNow = (item) => {
    // Store the selected item in local storage
    localStorage.setItem('selectedItem', JSON.stringify(item));
    // Navigate to the checkout page
    navigate('/checkout');
  }


  useEffect(() => {
    getProduct()
  }, [])

  return (
    <>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-5">
                {product.all_images && product.all_images.length > 0 &&
                  <div className="border border-warning rounded">
                    <img
                      src={`${baseUrl}/${product.all_images[0].image}`}
                      style={{ width: "100%", height: '100%' }}
                      alt="product-img"
                      className="product-image"
                    />
                  </div>
                }
              </div>
              <div className="col-md-6 offset-md-1 text-sm-start text-center mt-4">
                <h2 className="text-white proDetailText mb-4">{product.product_name}</h2>
                <div>
                </div>
                <p className="mb-4 fs-5 fw-medium">{product.product_description}</p>
                <p className="mb-4 fs-3 fw-bold ">
                  <span className="disPrice">
                    <del>₹{product.mrp_price}</del>
                  </span>{" "}
                  &nbsp;<span>₹{product.dis_price}</span>
                </p>
                <div className="mb-4">
                  <button className="btnCart me-4" onClick={() => AddCart(product)}>
                    Add To Cart
                    <svg className="cartIcon" viewBox="0 0 576 512">
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                    </svg>
                  </button>
                  <button className="p-2 btnBuy" onClick={()=>handleBuyNow(product)}>Buy Now</button>
                </div>
                <div className="mb-4 container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className=" border border-warning p-3 rounded enquiry">
                        <Link
                          to="/" //ADD WHATSAPP NUMBER
                          className="text-decoration-none d-flex justify-content-evenly align-item-center enquiryBtn"
                        >
                          <box-icon
                            name="whatsapp"
                            type="logo"
                            color="#35ef1c"
                            size="md"
                          ></box-icon>{" "}
                          <span className="text-warning fs-5"> Enquiry On Whatsapp</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-3">
          <ProductDetailCard products={product} />
        </div>

      </div>
    </>
  );
}

export default ProductDetail;
