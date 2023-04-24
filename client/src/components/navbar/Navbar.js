import React from "react";
import { NAVBAR_MENU, PROFILE_DROPDOWN_MENU } from "../../shared/constant";
import logo from "../assets/myShop-logo.png";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                          <a className="nav-link" href={NAVBAR_MENU.BLOG.LINK}>
                            {NAVBAR_MENU.BLOG.NAME}
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
                      <a className="nav-link" href={NAVBAR_MENU.OUR_STORE.NAME}>
                        {NAVBAR_MENU.OUR_STORE.NAME}
                      </a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link" href={NAVBAR_MENU.ABOUT_US.NAME}>
                        {NAVBAR_MENU.ABOUT_US.NAME}
                      </a>
                    </li>
                    <li className="nav-item mx-2">
                      <a
                        className="nav-link"
                        href={NAVBAR_MENU.CONTACT_US.NAME}
                      >
                        {NAVBAR_MENU.CONTACT_US.NAME}
                      </a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link" href={NAVBAR_MENU.BLOG.NAME}>
                        {NAVBAR_MENU.BLOG.NAME}
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
          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="d-flex justify-content-center p-2">
              <div className="btn-group">
                <button
                  className="btn btn-profile"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" id="dropdown-menu-css">
                  <li className="dropdown-item mb-2 mt-2 text-center">
                    <a
                      className="nav-link"
                      href={PROFILE_DROPDOWN_MENU.PROFILE.LINK}
                    >
                      {PROFILE_DROPDOWN_MENU.PROFILE.NAME}
                    </a>
                  </li>
                  {/* IF ADMIN LOGGED IN */}
                  <li className="dropdown-item mb-2 text-center">
                    <a
                      className="nav-link"
                      href={PROFILE_DROPDOWN_MENU.ADMIN_CONSOLE.LINK}
                    >
                      {PROFILE_DROPDOWN_MENU.ADMIN_CONSOLE.NAME}
                    </a>
                  </li>
                  <li className="dropdown-item mb-2 text-center">
                    <a
                      className="nav-link"
                      href={PROFILE_DROPDOWN_MENU.PURCHASE_HISTORY.LINK}
                    >
                      {PROFILE_DROPDOWN_MENU.PURCHASE_HISTORY.NAME}
                    </a>
                  </li>
                  <li className="dropdown-item mb-2 text-center">
                    <a
                      className="nav-link"
                      href={PROFILE_DROPDOWN_MENU.SHIPPING_ADDRESS.LINK}
                    >
                      {PROFILE_DROPDOWN_MENU.SHIPPING_ADDRESS.NAME}
                    </a>
                  </li>
                  <li className="dropdown-item mb-2 text-center">
                    <a
                      className="nav-link"
                      href={PROFILE_DROPDOWN_MENU.SETTING.LINK}
                    >
                      {PROFILE_DROPDOWN_MENU.SETTING.NAME}
                    </a>
                  </li>
                  <li>
                    <hr className={PROFILE_DROPDOWN_MENU.DIVIDER.CLASSNAME} />
                  </li>
                  <li className="dropdown-item text-center">
                    <a
                      className="nav-link"
                      href={PROFILE_DROPDOWN_MENU.LOGOUT.LINK}
                    >
                      {PROFILE_DROPDOWN_MENU.LOGOUT.NAME}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
