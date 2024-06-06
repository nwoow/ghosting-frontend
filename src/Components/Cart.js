import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

function Cart({ showCart, toggleCart }) {
  return (
    <div>
      {showCart && (
        <div
          className="offcanvas offcanvas-end"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex="-1"
          id="offcanvasCart"
          aria-labelledby="offcanvasCartLabel"
        >
          <div className="offcanvas-header">
            <h3 className="offcanvas-title text-warning fw-bold" id="offcanvasCartLabel">
              Your Cart <FaCartArrowDown />
            </h3>
            <button type="button" className="btn-close" onClick={toggleCart} aria-label="Close"></button>
          </div>
          <hr className="hr" />
          {/* Main code of cart here */}
          <div className="offcanvas-body p-4">
            <div className="card mb-3 bg-dark border border-warning">
              <div className="row g-0">
                <div className="col-md-4 m-auto"></div>
                <div className="col-md-8">
                  <div
                    className="card-body bg-dark d-flex flex-column justify-content-between"
                    style={{ height: '100%' }}
                  >
                    <div>
                      <h5 className="card-title text-white">Product Name</h5>
                      <p className="card-text">
                        <span>X1</span>&nbsp;&nbsp; Price: ₹5000
                      </p>
                    </div>
                    <button className="btn btn-danger btn-sm align-self-end">
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <hr className="hr" />
            <div>
              <p className="text-center">Subtotal: ₹5000</p>
              <hr className="hr" />
              <button className="btn btn-success d-block w-100">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
