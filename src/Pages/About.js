import React from "react";
import AboutBanner from "../assets/Image//about-banner.jpg";
import AboutImg from "../assets/Image/about-2.webp";
import Companybrand from "../Components/Companybrand";

import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaCartArrowDown, FaHeadphones } from "react-icons/fa";

function About() {
  return (
    <>
      <main>
        <div className="mb-4 pb-4"></div>
        <section className="about-us container">
          <div className="row">
            <div className="col-md-12">
              <div className="mw-930">
                <h2 className="page-title text-white mb-5">ABOUT Ghosting</h2>
              </div>
              <div className="about-us__content pb-5 mb-5">
                <p className="mb-5">
                  <img
                    loading="lazy"
                    className="w-100 d-block"
                    src={AboutBanner}
                    height={550}
                    alt=""
                  />
                </p>
                <div className="mw-930">
                  <h3 className="mb-4 fw-bold text-warning display-5 ">
                    OUR STORY
                  </h3>
                  <p className="fs-6 fw-medium mb-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p className="mb-4">
                    Saw wherein fruitful good days image them, midst, waters
                    upon, saw. Seas lights seasons. Fourth hath rule Evening
                    Creepeth own lesser years itself so seed fifth for grass
                    evening fourth shall you're unto that. Had. Female replenish
                    for yielding so saw all one to yielding grass you'll air sea
                    it, open waters subdue, hath. Brought second Made. Be. Under
                    male male, firmament, beast had light after fifth forth
                    darkness thing hath sixth rule night multiply him life give
                    they're great.
                  </p>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <h5 className="mb-3 text-white ">Our Mission</h5>
                      <p className="mb-3">
                        Quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h5 className="mb-3 text-white ">Our Vision</h5>
                      <p className="mb-3">
                        Quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mw-930 d-lg-flex align-items-lg-center">
                  <div className="image-wrapper col-lg-6">
                    <img
                      className="h-auto"
                      loading="lazy"
                      src={AboutImg}
                      width="450"
                      height="500"
                      alt=""
                    />
                  </div>
                  <div className="content-wrapper col-lg-6 px-lg-4">
                    <h5 className="mb-3 text-white fw-bold ">The Company</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Amet sapien dignissim a elementum. Sociis metus, hendrerit
                      mauris id in. Quis sit sit ultrices tincidunt euismod
                      luctus diam. Turpis sodales orci etiam phasellus lacus id
                      leo. Amet turpis nunc, nulla massa est viverra interdum.
                      Praesent auctor nulla morbi non posuere mattis. Arcu eu id
                      maecenas cras.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Amet sapien dignissim a elementum. Sociis metus, hendrerit
                      mauris id in. Quis sit sit ultrices tincidunt euismod
                      luctus diam. Turpis sodales orci etiam phasellus lacus id
                      leo. Amet turpis nunc, nulla massa est viverra interdum.
                      Praesent auctor nulla morbi non posuere mattis. Arcu eu id
                      maecenas cras.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-promotion horizontal container mw-930 pt-0 mb-md-4 pb-md-4 mb-xl-5">
          <div className="row">
            <div className="col-md-4 text-center mb-5 mb-md-0">
              <div className="service-promotion__icon mb-4">
                <FaCartArrowDown color="white" className="display-3" />
              </div>
              <h3 className="service-promotion__title fs-6 text-uppercase text-white fw-bold">
                Fast And Free Delivery
              </h3>
              <p className="service-promotion__content text-secondary text-center text-white">
                Free delivery for all orders over $140
              </p>
            </div>

            <div className="col-md-4 text-center mb-5 mb-md-0">
              <div className="service-promotion__icon mb-4">
                <FaHeadphones color="white" className="display-3" />
              </div>
              <h3 className="service-promotion__title fs-6 text-uppercase text-white fw-bold">
                24/7 Customer Support
              </h3>
              <p className="service-promotion__content text-secondary text-center text-white">
                Friendly 24/7 customer support
              </p>
            </div>

            <div className="col-md-4 text-center mb-4 pb-1 mb-md-0">
              <div className="service-promotion__icon mb-4">
                <IoShieldCheckmarkSharp color="white" className="display-3" />
              </div>
              <h3 className="service-promotion__title fs-6 text-uppercase text-white fw-bold">
                Money Back Guarantee
              </h3>
              <p className="service-promotion__content text-secondary text-center text-white">
                We return money within 30 days
              </p>
            </div>
          </div>
        </section>

        <section className="brands-carousel container mw-930 mb-5">
          <h5 className="mb-3 mb-xl-5 text-warning">Company Partners</h5>
          <div className="row position-relative">
            <div className="col-md-12 mb-5">
              <Companybrand />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
