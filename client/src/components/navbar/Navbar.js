import React from "react";
import { NAVBAR_MENU } from "../../shared/constant";
import logo from "../assets/myShop-logo.png";
import DropdownProfile from "../dropdown-profile/Dropdown-profile";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Logo big screen and bars smaller screen */}
          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="d-flex justify-content-center">
              <div className="">
                <div className="d-lg-block d-xl-block d-none">
                  <a className="navbar-brand text-center" href="/">
                    <img
                      src={logo}
                      alt="logo"
                      width={"150px"}
                      height={"75px"}
                    />
                  </a>
                </div>

                <div className="d-lg-none d-xl-none">
                  <button
                    className="btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="offcanvas offcanvas-start"
                    data-bs-scroll="true"
                    tabIndex="-1"
                    id="offcanvasWithBothOptions"
                    aria-labelledby="offcanvasWithBothOptionsLabel"
                  >
                    <div className="offcanvas-header">
                      <h5
                        className="offcanvas-title"
                        id="offcanvasWithBothOptionsLabel"
                      >
                        <img
                          src={logo}
                          alt="logo"
                          width={"250px"}
                          height={"120px"}
                        />
                      </h5>
                      <button
                        type="button"
                        className="btn-close me-3"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="offcanvas-body">
                      {/* Content */}
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item m-3">
                          <a
                            className="nav-link"
                            aria-current="page"
                            href={NAVBAR_MENU.HOME.LINK}
                          >
                            {NAVBAR_MENU.HOME.NAME}
                          </a>
                        </li>
                        <li className="nav-item mb-3">
                          <a
                            className="nav-link"
                            href={NAVBAR_MENU.OUR_STORE.LINK}
                          >
                            {NAVBAR_MENU.OUR_STORE.NAME}
                          </a>
                        </li>
                        <li className="nav-item mb-3">
                          <a
                            className="nav-link"
                            href={NAVBAR_MENU.ABOUT_US.LINK}
                          >
                            {NAVBAR_MENU.ABOUT_US.NAME}
                          </a>
                        </li>
                        <li className="nav-item mb-3">
                          <a
                            className="nav-link"
                            href={NAVBAR_MENU.CONTACT_US.LINK}
                          >
                            {NAVBAR_MENU.CONTACT_US.NAME}
                          </a>
                        </li>
                        <li className="nav-item mb-3">
                          <a className="nav-link" href={NAVBAR_MENU.NEWS.LINK}>
                            <span className="cart-icon">
                              {NAVBAR_MENU.NEWS.NAME}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* navbar items big screen and logo smaller screen */}
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="d-flex justify-content-center">
              <div className="p-2">
                <div className="d-lg-block d-xl-block d-none">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-2">
                      <a
                        className="nav-link"
                        aria-current="page"
                        href={NAVBAR_MENU.HOME.LINK}
                      >
                        {NAVBAR_MENU.HOME.NAME}
                      </a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link" href={NAVBAR_MENU.OUR_STORE.LINK}>
                        {NAVBAR_MENU.OUR_STORE.NAME}
                      </a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link" href={NAVBAR_MENU.ABOUT_US.LINK}>
                        {NAVBAR_MENU.ABOUT_US.NAME}
                      </a>
                    </li>
                    <li className="nav-item mx-2">
                      <a
                        className="nav-link"
                        href={NAVBAR_MENU.CONTACT_US.LINK}
                      >
                        {NAVBAR_MENU.CONTACT_US.NAME}
                      </a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link" href={NAVBAR_MENU.NEWS.LINK}>
                        {NAVBAR_MENU.NEWS.NAME}
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-lg-none d-xl-none">
                  <a className="navbar-brand text-center" href="/">
                    logo
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Profile Dropdown */}
            <DropdownProfile />
            {/* <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="d-flex justify-content-center p-2">
                <div className="sign-in-btn">
                  <a href={NAVBAR_MENU.SIGN_IN.LINK} className="btn-sign-in">
                    {NAVBAR_MENU.SIGN_IN.NAME}
                  </a>
                </div>
              </div>
            </div> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
