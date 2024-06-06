import React from "react";
import Sidebar from "./Sidebar";
import { MdEmail, MdCall, MdWhatsapp } from "react-icons/md";
import { Link } from "react-router-dom";

function Help() {
  return (
    <>

        <div className="container mt-5">
          <h2 className="mb-4 text-warning fw-bold display-5">Help Center</h2>
          <div className="row">
            <div className="col-lg-3 col-3">
              <Sidebar />
            </div>
            <div className="col-lg-9 col-9">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100 bg-dark p-3">
                    <MdEmail
                      color="#ffb421"
                      size={80}
                      className=" m-auto p-3 border border-warning rounded-circle"
                    />
                    <div className="card-body text-center ">
                      <h4 className="card-title fw-bold text-white ">EMAIL</h4>
                      <Link
                        className="card-text  text-warning fs-6"
                        to="mailto:ghostingtech@gmail.com"
                      >
                        ghostingtech@gmail.com
                      </Link>
                      <Link to="mailto:ghostingtech@gmail.com">
                        <button className="button-89 mt-3 m-auto ">
                          Mail Us
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 bg-dark p-3">
                    <MdCall
                      color="#ffb421"
                      size={80}
                      className=" m-auto p-3 border border-warning rounded-circle"
                    />
                    <div className="card-body text-center ">
                      <h4 className="card-title fw-bold text-white ">CALL</h4>
                      <Link
                        className="card-text  text-warning fs-6"
                        to="tel:+91123456789"
                      >
                        +91 12345 56789
                      </Link>
                      <Link to="tel:+91123456789">
                        <button className="button-89 mt-3 m-auto ">
                          Call Us
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 bg-dark p-3">
                    <MdWhatsapp
                      color="#ffb421"
                      size={80}
                      className=" m-auto p-3 border border-warning rounded-circle"
                    />
                    <div className="card-body text-center ">
                      <h4 className="card-title fw-bold text-white ">CALL</h4>
                      <Link
                        className="card-text  text-warning fs-6"
                        to="https://wa.me/9117006457?text=Hi%27,%20like%20to%20chat%20with%20you"
                      >
                        +91 91170 06457
                      </Link>
                      <Link to="https://wa.me/9117006457?text=Hi%27,%20like%20to%20chat%20with%20you">
                        <button className="button-89 mt-3 m-auto ">
                          Message Us
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Help;
