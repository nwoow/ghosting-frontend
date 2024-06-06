import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-center">
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              to="#!"
              role="button"
              title="FACEBOOK"
            >
              <FaFacebookF />
            </Link>

            {/* <!-- Twitter --> */}
            {/* <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#222" }}
              to="#!"
              role="button"
              title="TWITTER"
            >
              <box-icon name="twitter" type="logo"></box-icon>
            </Link> */}



            {/* <!-- Google --> */}
            <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: " #dd4b39" }}
              to="#!"
              role="button"
              title="GOOGLE"
            >
              <box-icon name="google-plus" type="logo"></box-icon>

            </Link>

            {/* <!-- Instagram --> */}
            <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              to="#!"
              role="button"
              title="INSTAGRAM"
            >
              <FaInstagram />
            </Link>

            {/* <!-- Linkedin --> */}
            <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              to="#!"
              role="button"
              title="LINKEDIN"
            >
              <FaLinkedinIn />
            </Link>
            {/* <!-- Github --> */}
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3 text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright: &nbsp;
          <Link
            className=" text-white text-decoration-none "
            to="https://mdbootstrap.com/"
          >
            Ghosting tech
          </Link>
        </div>

        {/* <!-- Copyright --> */}
        <div
          className="text-center  text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <Link
            className=" text-white text-decoration-none "
            to="/terms&conditions"
          >
            Terms & Conditions
          </Link>
        </div>
        {/* privacyPolices */}
        <div
          className="text-center mt-2 mb-2 text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <Link
            className=" text-white text-decoration-none "
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </div>
        {/* REFUND POLICY */}
        <div
          className="text-center mt-2 mb-2 text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <Link
            className=" text-white text-decoration-none "
            to="/refund-policy"
          >
            Refund Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
