import React from "react";
import nikeLogo from "../assets/Jumbotron-logo/Nike-Logo.png";
import adidasLogo from "../assets/Jumbotron-logo/Adidas-Logo.png";
import PumaLogo from "../assets/Jumbotron-logo/Puma-Logo.png";
import HmLOGO from "../assets/Jumbotron-logo/H&M-Logo.png";
import calvinKleinLogo from "../assets/Jumbotron-logo/Calvin-Klein-Logo.png";
import dhlLogo from "../assets/Jumbotron-logo/DHL-Logo.png";
import fedExLogo from "../assets/Jumbotron-logo/Fedex-logo.png";
import fendiLogo from "../assets/Jumbotron-logo/Fendi-Logo.png";
import leviLogo from "../assets/Jumbotron-logo/Levi-Logo.png";
import tommyHilfigerLogo from "../assets/Jumbotron-logo/Tommy-Hilfiger-Logo.png";
import uniqloLogo from "../assets/Jumbotron-logo/Uniqlo-Logo.png";
import zaraLogo from "../assets/Jumbotron-logo/Zara-Logo.png";


function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="d-flex justify-content-center">
        <div className="jumbotron-container mt-3">
          <div className="brand-logo mx-4">
            <div className="brand-logo-card">
              <div className="d-flex justify-content-center">
                <img
                  src={nikeLogo}
                  alt="nike-logo"
                  className="brand-logo-img"
                />
              </div>
            </div>
          </div>
          <div className="brand-logo mx-4">
            <div className="brand-logo-card">
              <div className="d-flex justify-content-center">
                <img
                  src={adidasLogo}
                  alt="adidas-logo"
                  className="brand-logo-img-sm"
                />
              </div>
            </div>
          </div>
          <div className="brand-logo mx-4">
            <div className="brand-logo-card">
              <div className="d-flex justify-content-center">
                <img
                  src={PumaLogo}
                  alt="puma-logo"
                  className="brand-logo-img"
                  />
              </div>
            </div>
          </div>
          <div className="brand-logo mx-4">
            <div className="brand-logo-card">
              <div className="d-flex justify-content-center">
                <img
                  src={dhlLogo}
                  alt="dhl-logo"
                  className="brand-logo-img"
                />
              </div>
            </div>
          </div>
          <div className="brand-logo mx-4">
            <div className="brand-logo-card">
              <div className="d-flex justify-content-center">
                <img
                  src={fedExLogo}
                  alt="fedEx-logo"
                  className="brand-logo-img"
                />
              </div>
            </div>
          </div>
          <div className="brand-logo mx-4">
            <div className="brand-logo-card">
              <div className="d-flex justify-content-center">
                <img
                  src={calvinKleinLogo}
                  alt="calvin-klein-logo"
                  className="brand-logo-img-xl"
                />
              </div>
            </div>
          </div>
          <div className="brand-logo mx-4">
            <div className="brand-logo-card">
              <div className="d-flex justify-content-center">
                <img
                  src={fendiLogo}
                  alt="fendi-logo"
                  className="brand-logo-img"
                />
              </div>
            </div>
          </div>
          <div className="brand-logo mx-4">
            <div className="brand-logo-card">
              <div className="d-flex justify-content-center">
                <img
                  src={tommyHilfigerLogo}
                  alt="tommy-hilfiger-logo"
                  className="brand-logo-img"
                />
              </div>
            </div>
          </div>
          <div className="brand-logo mx-4">
            <div className="brand-logo-card">
              <div className="d-flex justify-content-center">
                <img
                  src={leviLogo}
                  alt="levi-logo"
                  className="brand-logo-img"
                />
              </div>
            </div>
          </div>
          <div className="brand-logo mx-4">
            <div className="brand-logo-card">
              <div className="d-flex justify-content-center">
                <img
                  src={zaraLogo}
                  alt="zara-logo"
                  className="brand-logo-img"
                />
              </div>
            </div>
          </div>
          <div className="brand-logo mx-4">
            <div className="brand-logo-card">
              <div className="d-flex justify-content-center">
                <img
                  src={uniqloLogo}
                  alt="uniqlo-logo"
                  className="brand-logo-img"
                />
              </div>
            </div>
          </div>
          <div className="brand-logo mx-4">
            <div className="brand-logo-card">
              <div className="d-flex justify-content-center">
                <img
                  src={HmLOGO}
                  alt="hm-logo"
                  className="brand-logo-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
