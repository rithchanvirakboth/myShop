import React from "react";
import landingPageImage from "../../components/assets/landing-page/landing-pag-image.png";
import logoImg from "../../components/assets/myShop-logo-white.png";
import shoesImg from "../../components/assets/landing-page/category-image/shoes-category-img.png";
import clothingImg from "../../components/assets/landing-page/category-image/Clothing-category-image.png";
import newArrivalImg from "../../components/assets/landing-page/category-image/New-arrival-category-img.png";
import topSaleImg from "../../components/assets/landing-page/category-image/top-sell-category-img.png";

function Homepage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-12 col-md-12">
          <div className="showcase">
            {/* background image */}
            <div className="landing-page-bg">
              <img
                src={landingPageImage}
                alt="landing-page"
                className="img-landing-page"
              />
            </div>
            {/* Logo x Brand name */}
            <div className="logo">
              <img src={logoImg} alt="logo" className="img-logo" />
            </div>

            {/* Brand description */}
            <div className="brand-description">
              <p>
                {" "}
                Show the world your style with our products. <br />
                Explore our collection of high quality products.
              </p>
            </div>
            {/* Button get started */}
            <div className="get-started">
              <a href="/our-store" className="btn-get-started">
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-12 col-md-12">
          <div className="category">
            <div className="d-flex justify-content-center">
              <div className="col-9 col-lg-9 col-md-12">
                <div className="row gap-2 d-flex justify-content-center">
                  <div className="col-12 col-lg-2 col-md-4 mx-2">
                    <div className="category-item-card">
                      <div className="category-item-img d-flex justify-content-center">
                        <img
                          src={shoesImg}
                          alt="shoes-img"
                          className="shoes-img"
                        />
                      </div>
                      <div className="category-item-name text-center">
                        <p>Shoes</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-2 col-md-4 mx-2">
                    <div className="category-item-card">
                      <div className="category-item-img d-flex justify-content-center">
                        <img
                          src={clothingImg}
                          alt="shoes-img"
                          className="shoes-img"
                        />
                      </div>
                      <div className="category-item-name text-center">
                        <p>Clothing</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-2 col-md-4 mx-2">
                    <div className="category-item-card">
                      <div className="category-item-img d-flex justify-content-center">
                        <img
                          src={topSaleImg}
                          alt="shoes-img"
                          className="shoes-img"
                        />
                      </div>
                      <div className="category-item-name text-center">
                        <p>Top Sale</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-2 col-md-4 mx-2">
                    <div className="category-item-card">
                      <div className="category-item-img d-flex justify-content-center">
                        <img
                          src={newArrivalImg}
                          alt="shoes-img"
                          className="shoes-img"
                        />
                      </div>
                      <div className="category-item-name text-center">
                        <p>New Arrival</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;


