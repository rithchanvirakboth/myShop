import React from "react";
import firstSlide from "../../../components/assets/aboutus-page/first-slide.jpg";
import secondSlide from "../../../components/assets/aboutus-page/second-slide.png";
import thirdSlide from "../../../components/assets/aboutus-page/third-slide.jpg";

function AboutUs() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="topper">
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={firstSlide} className="slide-image" alt="first-slide" />
                </div>
                <div className="carousel-item">
                  <img
                    src={secondSlide}
                    className="slide-image"
                    alt="second-slide"
                  />
                </div>
                <div className="carousel-item">
                  <img src={thirdSlide} className="slide-image" alt="third-slide" />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="about-us-card d-none d-lg-block">
              <div className="row">
                <div className="col-4">
                  <div className="card-aboutus">
                    <h5 className="card-title text-center">WHO WE ARE</h5>
                    <p className="card-text text-center">
                      your biggest fans, that's who 
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <a href="/about/who-we-are" className="btn btn-about-us">
                        READ MORE 
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card-aboutus">
                  <h5 className="card-title text-center">OUR PARTNERSHIP</h5>
                    <p className="card-text text-center">
                      our local and international partnership
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <a href="/about/our-team" className="btn btn-about-us">
                        EXPLORE NOW
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card-aboutus">
                  <h5 className="card-title text-center">OUR EXPERIENCE</h5>
                    <p className="card-text text-center">
                       there're so much about us
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <a href="/about/our-experience" className="btn btn-about-us">
                        DISCOVER NOW 
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-us-card d-md-block d-none d-lg-none">
              <div className="row">
                <div className="col-4">
                  <div className="card-aboutus">
                    <h5 className="text-center" style={{fontSize: "17px", fontWeight: "bold"}}>WHO WE ARE</h5>
                    <p className="text-center mt-4" style={{fontSize: "12px", fontWeight: "300", minHeight: "45px"}} >
                      your biggest fans, that's who 
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <a href="/about/who-we-are" className="btn btn-sm-about-us">
                        READ MORE 
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card-aboutus">
                  <h5 className="text-center" style={{fontSize: "17px", fontWeight: "bold"}}>OUR PARTNERSHIP</h5>
                    <p className="text-center mt-4" style={{fontSize: "12px", fontWeight: "300", minHeight: "45px"}}>
                      our local and international partnership
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <a href="/about/our-team" className="btn btn-sm-about-us">
                        EXPLORE NOW
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card-aboutus">
                  <h5 className="text-center" style={{fontSize: "17px", fontWeight: "bold"}}>OUR EXPERIENCE</h5>
                    <p className="text-center mt-4" style={{fontSize: "12px", fontWeight: "300", minHeight: "45px"}}>
                       there're so much about us
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <a href="/about/our-experience" className="btn btn-sm-about-us">
                        DISCOVER NOW 
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 content-break">
          <hr className="divider" />
        </div>
        <div className="col-12">
          <div className="col-12 mt-4 mb-4">
            <h1 className="text-center title">OUR STORY</h1>
            <p className="text-center desc-text">
              MyShop is a leading online shop that offers a wide range of high 
              quality products from the world’s most trusted brands that located in Phnom Penh Cambodia.

            </p>
          </div>
          <div className="col-12 mb-4">
            <h1 className="text-center title">OUR MISSION & VISION</h1>
            <p className="text-center desc-text">
              Our mission is to provide our customers with the best online
              shopping experience. We are determined to provide customers with the best online shopping
              experience from beginning to end, with a smart, searchable
              website, easy-to-follow instructions, clear and secure payment
              methods, and fast, quality delivery.
            </p>
          </div>
          <div className="col-12 mb-4">
            <h1 className="text-center title">OUR VALUES</h1>
            <p className="text-center desc-text">
              Our values are the guiding principles upon which MyShop was
              founded and how we strive to conduct our business on a daily
              basis. Values establish our view of the world as we shape the
              future. They determine how we treat each other. Our values are to
              be: <br />

            </p>
            <div className="span-context">
              <span className="text-left desc-text">•	To be customer obsessed</span> <br />
              <span className="text-left desc-text">•	To be passionate</span> <br />
              <span className="text-left desc-text">•	To be innovative</span> <br />
              <span className="text-left desc-text">•	To be collaborative</span> <br />
              <span className="text-left desc-text">•	To be trustworthy and transparent</span> <br />
              <span className="text-left desc-text">•	To be results oriented</span> <br />
              <span className="text-left desc-text">•	To be frugal</span> <br />
              <span className="text-left desc-text">•	To be responsible</span> <br />
              <span className="text-left desc-text">•	To be original</span> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
