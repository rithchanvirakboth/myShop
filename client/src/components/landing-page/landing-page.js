import React from "react";
import landingPageImage from "../../components/assets/landing-page/landing-pag-image.png";
import logoImg from "../../components/assets/myShop-logo-white.png";

function LandingPage() {
  return (
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
  );
}

export default LandingPage;
