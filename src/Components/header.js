import React, { useState, useEffect } from "react";

// import Logo from "./GHOSTING.png";
import Logo from "../assets/Image/GHOSTING.png";
import { Link } from "react-router-dom";
import {
  FaSignInAlt,
  FaRegUser,
  FaCartArrowDown,
  FaShoppingCart
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useGlobalContext } from "../Context/MyContext";
import { baseUrl } from "./Constant";
import axios from "axios";



const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const { category, isLoggedIn, cartItems, handleDeleteItem } = useGlobalContext();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const deleteItem = (item) => {
    handleDeleteItem(item)

  }

  useEffect(() => {
    const totalPrice = calculateTotalPrice();
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.totalPrice || 0), 0);
  };

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);


  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    if (inputValue.trim() === "") {
      setSuggestions([]);
    } else {
      fetchSuggestions(inputValue);
    }
  };

  const fetchSuggestions = async (input) => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/home/get-search/?q=${input}`);
      console.log(response.data)
      setSuggestions(response.data.payload);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler bg-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 headerDesign">
              <li className="nav-item ms-3">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ms-3 dropdown mb-3">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul
                  className="dropdown-menu mega-menu mt-lg-5 mt-3"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="container">
                    <div className="row">
                      {
                        category.map((item, index) => {
                          return (
                            <div key={index} className="col-sm-4 mb-3">
                              <ul className="list-unstyled">
                                <li>
                                  <Link to={`/subcategory/${item.slug}`} className="dropdown-item" >
                                    {item.category_name}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </ul>
              </li>
              {
                isLoggedIn ? (
                  <li className="nav-item ms-3" title="USER PROFILE">
                    <Link to="/profile" className="nav-link">
                      <FaRegUser />
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item ms-3">
                    <Link to="/login" className="nav-link" title="Login">
                      Login <FaSignInAlt />
                    </Link>
                  </li>
                )
              }

              <li className="nav-item ms-3 position-relative" title="CART">
                <button className="nav-link btn " onClick={toggleCart}>
                  {" "}
                  <FaShoppingCart />
                  {totalItemsInCart > 0 &&
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ marginTop: "11px" }}>
                      {totalItemsInCart}
                    </span>
                  }
                </button>
              </li>

              {/* ------------------------SEARCH-------------------------------------------- */}

              <li className="nav-item ms-3 mt-2 position-relative">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2 form-input rounded"
                    type="search"
                    aria-label="Search"
                    placeholder="Search..."
                    value={query}
                    onChange={handleSearchChange}
                  />
                </form>
                {suggestions.length === 0 && query && (
                  <div style={{ position: 'absolute', top: '40px', zIndex: '9999' }}>
                    <p style={{ color: "red", padding: '20px', borderRadius: "10px", background: "white", maxHeight: "200px", width: '220px', }}>No results found.</p>
                  </div>
                )
                }
                <div style={{ position: 'absolute', top: '40px', zIndex: '9999' }}>
                  <ul style={{ borderRadius: "10px", background: "white", maxHeight: "200px", width: '220px', overflowY: 'auto' }}>
                    {suggestions.map((suggestion) => (
                      <Link to={`/product/${suggestion.slug}`}>
                        <li style={{ color: "grey", fontSize: '1.3rem', marginBottom: "10px" }} key={suggestion.id}>{suggestion.name} </li>
                      </Link>

                    ))}
                  </ul>
                </div>
              </li>
              {/* ------------------------SEARCH-------------------------------------------- */}

            </ul>
          </div>
        </div>
      </nav>
      {/* ==================== CART SECTION ======================= */}
      <div
        className={`offcanvas offcanvas-end bg-dark ${showCart ? "show" : ""}`}
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasCart"
        aria-labelledby="offcanvasCartLabel"
      >
        <div className="offcanvas-header">
          <h3
            className="offcanvas-title text-warning fw-bold "
            id="offcanvasCartLabel"
          >
            Your Cart <FaCartArrowDown />
          </h3>
          <button
            type="button"
            className="btn-close"
            onClick={toggleCart}
            aria-label="Close"
          ></button>
        </div>
        {/* <hr className="hr" /> */}
        {/* -------- main code of cart here ---------- */}
        <div className="offcanvas-body  p-4 ">
          {/* Add your cart items and total here */}


          <div className="card mb-3 bg-dark border border-warning ">
            <div className="row g-0">
              {
                cartItems.map((item, index) => {
                  return (
                    <>
                      <div className="col-md-4 m-auto ">
                        <img
                          src={`${baseUrl}/${item.all_images[0].image}`}
                          className="pro_od_img"
                          style={{ width: "50px" }}
                          alt="product"
                        />
                      </div>
                      <div className="col-md-8">
                        <div
                          className="card-body bg-dark d-flex flex-column justify-content-between"
                          style={{ height: "100%" }}
                        >
                          <div>
                            <h5 className="card-title text-white">{item.product_name}</h5>
                            <p className="card-text">
                              <span>Price</span>&nbsp;: ₹{item.dis_price}
                            </p>
                          </div>
                          <button onClick={() => { deleteItem(item) }} className="btn btn-danger btn-sm align-self-end">
                            <MdDelete />
                          </button>
                        </div>
                      </div>
                      <hr className="hr" />
                    </>
                  )
                })
              }
            </div>
          </div>
          {/* SUBTOTAL BUTTON CODE BELOW */}
          {
            cartItems.length > 0 && (
              <div>
                <p className="text-center">Subtotal: ₹{totalPrice}</p>
                <hr className="hr" />
                <Link to={'/cardcheckoutpage'} className="btn btn-success d-block w-100">Checkout</Link>
              </div>
            )
          }
        </div>
      </div>
      {/* ==================== CART SECTION ======================= */}
    </>
  );
};

export default Header;
