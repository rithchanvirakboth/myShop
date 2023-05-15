import React from "react";
import nikeLogo from "../assets/Jumbotron-logo/Nike-Logo.png";
import adidasLogo from "../assets/Jumbotron-logo/Adidas-Logo.png";
import PumaLogo from "../assets/Jumbotron-logo/Puma-Logo.png";
import GucciLogo from "../assets/Jumbotron-logo/Gucci-Logo.png"
import HmLOGO from "../assets/Jumbotron-logo/H&M-Logo.png";
import ChanelLogo from "../assets/Jumbotron-logo/Chanel-Logo.png";
import LeviLogo from "../assets/Jumbotron-logo/Levi-Logo.png";
import LacosteLogo from "../assets/Jumbotron-logo/Lacoste-Logo.png";
import FendiLogo from "../assets/Jumbotron-logo/Fendi-Logo.png";
import CalvinKleinLogo from "../assets/Jumbotron-logo/Calvin-Klein-Logo.png";
import LouisVuittonLogo from "../assets/Jumbotron-logo/Louis-Vuitton-Logo.png";
import ZaraLogo from "../assets/Jumbotron-logo/Zara-Logo.png";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container jumbotron-content">
        <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col my-2">
            <img src={nikeLogo} alt="nike-logo" className="logo-jumbotron" />
          </div>
          <div className="col my-2">
            <img src={PumaLogo} alt="puma-logo" className="logo-jumbotron" />
          </div>
          <div className="col my-2">
            <img src={adidasLogo} alt="adidas-logo" className="logo-jumbotron" />
          </div>
          <div className="col my-2">
            <img src={GucciLogo} alt="gucci-logo" className="logo-jumbotron-sm" />
          </div>
          <div className="col my-2">
            <img src={HmLOGO} alt="H&M-logo" className="logo-jumbotron" />
          </div>
          <div className="col my-2">
            <img src={ChanelLogo} alt="Chanel-logo" className="logo-jumbotron" />
          </div>
          <div className="col my-2">
            <img src={LeviLogo} alt="levi-logo" className="logo-jumbotron" />
          </div>
          <div className="col my-2">
            <img src={LacosteLogo} alt="Lacoste-logo" className="logo-jumbotron" />
          </div>
          <div className="col my-2">
            <img src={FendiLogo} alt="Fendi-logo" className="logo-jumbotron" />
          </div>
          <div className="col my-2">
            <img src={CalvinKleinLogo} alt="Calvin-Klein-logo" className="logo-jumbotron-sm" />
          </div>
          <div className="col my-2">
            <img src={LouisVuittonLogo} alt="Louis Vuitton-logo" className="logo-jumbotron-sm" />
          </div>
          <div className="col my-2">
            <img src={ZaraLogo} alt="zara-logo" className="logo-jumbotron" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
