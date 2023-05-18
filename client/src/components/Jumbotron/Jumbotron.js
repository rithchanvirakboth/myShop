import React from "react";
import nikeLogo from "../assets/Jumbotron-logo/Nike-Logo.png";
import adidasLogo from "../assets/Jumbotron-logo/Adidas-Logo.png";
import PumaLogo from "../assets/Jumbotron-logo/Puma-Logo.png";
import GucciLogo from "../assets/Jumbotron-logo/Gucci-Logo.png";
import HmLOGO from "../assets/Jumbotron-logo/H&M-Logo.png";
import ChanelLogo from "../assets/Jumbotron-logo/Chanel-Logo.png";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container jumbotron-content">
        <div className="brand-logo">
          <div className="container">
            <div className="row mt-2">
              <div className="d-none d-lg-block">
                <div className="col-md-12">
                  <div className="logo-brand me-3 mb-3">
                    <img
                      src={nikeLogo}
                      alt="nike-logo"
                      className="logo-jumbotron"
                    />
                  </div>
                  <div className="logo-brand me-3 mb-3">
                    <img
                      src={PumaLogo}
                      alt="puma-logo"
                      className="logo-jumbotron"
                    />
                  </div>
                  <div className="logo-brand me-3 mb-3">
                    <img
                      src={adidasLogo}
                      alt="adidas-logo"
                      className="logo-jumbotron"
                    />
                  </div>
                  <div className="logo-brand me-3 mb-3 ">
                    <img
                      src={GucciLogo}
                      alt="gucci-logo"
                      className="logo-jumbotron-lg"
                    />
                  </div>
                  <div className="logo-brand me-3 mb-3">
                    <img
                      src={HmLOGO}
                      alt="H&M-logo"
                      className="logo-jumbotron"
                    />
                  </div>
                  <div className="logo-brand me-3 mb-3">
                    <img
                      src={ChanelLogo}
                      alt="Chanel-logo"
                      className="logo-jumbotron"
                    />
                  </div>
                </div>
              </div>
              <div className="d-block d-lg-none">
              <div className="logo-brand-sm mx-3">
                    <img
                      src={nikeLogo}
                      alt="nike-logo"
                      className="logo-jumbotron"
                    />
                  </div>
                  <div className="logo-brand-sm mx-3">
                    <img
                      src={PumaLogo}
                      alt="puma-logo"
                      className="logo-jumbotron"
                    />
                  </div>
                  <div className="logo-brand-sm mx-3">
                    <img
                      src={adidasLogo}
                      alt="adidas-logo"
                      className="logo-jumbotron"
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
