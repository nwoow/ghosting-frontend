import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { InfinitySpin } from 'react-loader-spinner';
import { baseUrl } from "../Components/Constant";
import { useGlobalContext } from "../Context/MyContext";

function Checkout() {
  const { isLoggedIn } = useGlobalContext();
  const navigate = useNavigate();
  const [names, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [citys, setCitys] = useState('');
  const [states, setStates] = useState('');
  const [zipcodes, setZipcodes] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const item = JSON.parse(localStorage.getItem('selectedItem')) || {};
  const productUIDs = cartItems.map(product => ({ uid: product.uid }));

  const validateFields = () => {
    const newErrors = {};
    if (!names) newErrors.names = "Name is required";
    if (!emailId) newErrors.emailId = "Email is required";
    if (!address) newErrors.address = "Address is required";
    if (!mobile) newErrors.mobile = "Phone is required";
    if (!citys) newErrors.citys = "City is required";
    if (!states) newErrors.states = "State is required";
    if (!zipcodes) newErrors.zipcodes = "Zipcode is required";
    return newErrors;
  };

  const handleCheckOut = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      toast.error('Please login to proceed.');
      navigate('/login');
      return;
    }
    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const name = names;
    const email = emailId;
    const addressline = address;
    const phone = mobile;
    const state = states;
    const zipcode = zipcodes;
    const city = citys;
    const product_list = [...productUIDs];
    
    setLoading(true);
    axios.post(`${baseUrl}/accounts/checkout/`,
      { name, email, addressline, phone, state, zipcode, city, product_list },
      {
        headers: { 'Authorization': `Bearer ${token}` },
      }
    )
      .then((res) => {
        const paymentUrl = res.data.payment_url;
        if (res.data.status === 200) {
          window.location.href = paymentUrl;
        } else {
          toast.error('Something Went Wrong');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error('An error occurred. Please try again.');
        setLoading(false);
      });
  };

  useEffect(() => {
    setCartItems([item]);
  }, []);

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="check_out_form">
              <div>
                <h2 className="fw-bold text-secondary">Billing Details</h2>
                <form className="row g-3">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="inputName4" className="form-label text-white">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName4"
                      required
                      value={names}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.names && <div className="text-danger">{errors.names}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="inputEmail4" className="form-label text-white">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      required
                      value={emailId}
                      onChange={(e) => setEmailId(e.target.value)}
                    />
                    {errors.emailId && <div className="text-danger">{errors.emailId}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="inputPhone4" className="form-label text-white">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPhone4"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="inputAddress" className="form-label text-white">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    {errors.address && <div className="text-danger">{errors.address}</div>}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="inputCity" className="form-label text-white">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      required
                      value={citys}
                      onChange={(e) => setCitys(e.target.value)}
                    />
                    {errors.citys && <div className="text-danger">{errors.citys}</div>}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="inputState" className="form-label text-white">State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputState"
                      required
                      value={states}
                      onChange={(e) => setStates(e.target.value)}
                    />
                    {errors.states && <div className="text-danger">{errors.states}</div>}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="inputZip" className="form-label text-white">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputZip"
                      required
                      value={zipcodes}
                      onChange={(e) => setZipcodes(e.target.value)}
                    />
                    {errors.zipcodes && <div className="text-danger">{errors.zipcodes}</div>}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="check_out_detail" style={{ maxWidth: "500px" }}>
              <div>
                <h3 className="text-white">Your Order</h3>
                <hr style={{ color: "#f0b341" }} />

                <div className="d-flex justify-content-between align-items-center">
                  <p className="fw-bold">Product</p>
                  <p className="fw-bold">Subtotal</p>
                </div>
                <hr className="hr" />

                <div className="d-flex align-items-center justify-content-evenly">
                  {item && item.all_images?.length > 0 && (
                    <img
                      src={`${baseUrl}/${item.all_images[0].image}`}
                      className="pro_od_img"
                      style={{ width: "50px" }}
                      alt="product"
                    />
                  )}
                  &nbsp; &nbsp; &nbsp;
                  <span className="fw-medium text-white">{item.product_name}</span>
                  <div className="">
                    <span className="text-white">₹{item.dis_price}</span>
                  </div>
                </div>
                <hr className="hr" />

                <div className="d-flex justify-content-between align-items-center">
                  <p className="text-white fw-bold">Subtotal</p>
                  <p className="text-white fw-bold">₹{item.dis_price}</p>
                </div>
                <hr className="hr" />

                <div className="d-flex justify-content-between align-items-center">
                  <p className="text-white fw-bold">Total</p>
                  <p className="text-white fw-bold">₹{item.dis_price}</p>
                </div>
                <hr style={{ color: "#f0b341" }} />

                <h3 className="mb-3 text-white">Discount Code</h3>
                <form>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Coupon Code"
                      aria-label="Coupon Code"
                      aria-describedby="button-addon2"
                    />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                      Apply
                    </button>
                  </div>
                </form>
                <div className="d-grid gap-2">
                <button className="Btn-order" onClick={handleCheckOut}>
                    {loading ? <InfinitySpin width="200" color="#ffffff" /> : "Proceed to Checkout"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
