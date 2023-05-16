import React from "react";
import OurExperienceImg1 from "../../../../../components/assets/aboutus-page/our-experience/our-experience-img-1.jpg";
import OurExperienceImg2 from "../../../../../components/assets/aboutus-page/our-experience/our-experience-img-2.png";
import OurExperienceImg3 from "../../../../../components/assets/aboutus-page/our-experience/our-experience-img-3.png";
import OurExperienceImg4 from "../../../../../components/assets/aboutus-page/our-experience/our-experience-img-4.png";

function OurExperience() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          {/* TITLE */}
          <div className="d-flex justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-6 main-title">
              <h1 className="about-us-title text-center">OUR EXPERIENCE</h1>
              <p className="our-experience-message">
                We have been in the business for over 10 years. We have been
                through many ups and downs, but we have never stopped trying to
                improve our services and products. We have always been trying to
                make our customers happy and satisfied and always testing new
                products to make sure we are always up to date with the latest
                trends. From free shipping and return to innovative products, we
                find ways to do it anyway.
              </p>
            </div>
          </div>
          {/* FIRST SECTION */}
          <div className="d-flex justify-content-center">
            <div className="col-sm-6 col-md-6 col-lg-6" style={{ height: "500px" }}>
              <img
                src={OurExperienceImg1}
                alt="our-experience"
                className="img-our-experience"
              />
            </div>
            <div className="col-6 ms-4">
              <div className="our-experience-title">
                <strong>Free delivery and returns</strong>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 text-justify our-experience-desc">
                We continually strive to make your experience with us as
                seamless as possible. Or in real speak, we're on it with free
                delivery and returns (Ts&Cs and country exclusions apply). Two
                of your favourite ASOS things… and ours, too
              </div>
              <div className="button-see-more">
                <a href="/return-refund" className="btn btn-see-more">
                  GET TO KNOW
                </a>
              </div>
            </div>
          </div>
          {/* SECOND SECTION */}
          <div className="d-flex justify-content-center">
            <div className="col-6">
              <div className="our-experience-title mt-4">
                <strong>Style Match</strong>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 text-justify our-experience-desc">
                We know one size doesn't fit all, so we've created a range of
                different fits for everybody and every body. We've got your back
                with our MyShop Brands, too. They're the ones to watch, bringing
                you the latest styles and trends from our top brands.
              </div>
              <div className="button-see-more">
                <a href="/our-store" className="btn btn-see-more">
                  CHECK IT OUT
                </a>
              </div>
            </div>
            <div className="col-6 mt-4" style={{ height: "500px" }}>
              <img
                src={OurExperienceImg2}
                alt="our-experience"
                className="img-our-experience"
              />
            </div>
          </div>
          {/* THIRD SECTION */}
          <div className="d-flex justify-content-center">
            <div className="col-6 mt-4" style={{ height: "500px" }}>
              <img
                src={OurExperienceImg3}
                alt="our-experience"
                className="img-our-experience"
              />
            </div>
            <div className="col-6 ms-4 mt-4">
              <div className="our-experience-title">
                <strong>Student discount (10% off until you graduate)</strong>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 text-justify our-experience-desc">
              Being a student can mean you’re low on funds, but don’t worry, we got you.
              We give students 10% off all the way through to graduation. Cos your budget shouldn’t stop you being you.
              </div>
              <div className="button-see-more">
                <a href="/about-us" className="btn btn-see-more">
                  GET IT NOW
                </a>
              </div>
            </div>
          </div>
          {/* FOURTH SECTION */}
          <div className="d-flex justify-content-center">
            <div className="col-6">
              <div className="our-experience-title mt-4">
                <strong>Customer care</strong>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 text-justify our-experience-desc">
                We're here for you, whatever you need. We've got a whole team
                of Customer Care Advisors who are always ready to chat all
                things ASAP. We're available 24/7, 365 days a year, so whether
                you need help with your order or just fancy a chat, we're
                always here.
              </div>
              <div className="button-see-more">
                <a href="/contact" className="btn btn-see-more">
                  CONTACT US
                </a>
              </div>
            </div>
            <div className="col-6 mt-4" style={{ height: "500px" }}>
              <img
                src={OurExperienceImg4}
                alt="our-experience"
                className="img-our-experience"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurExperience;
