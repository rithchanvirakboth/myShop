import React from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          {/* Logo big screen and bars smaller screen */}
          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="d-flex justify-content-center">
              <div className="p-2">
                <div className="d-lg-block d-xl-block d-none">
                  <a className="navbar-brand text-center" href="/">
                    logo
                  </a>
                </div>

                <div className="d-lg-none d-xl-none">
                  <button
                    class="btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div
                    class="offcanvas offcanvas-start"
                    data-bs-scroll="true"
                    tabindex="-1"
                    id="offcanvasWithBothOptions"
                    aria-labelledby="offcanvasWithBothOptionsLabel"
                  >
                    <div class="offcanvas-header">
                      <h5
                        class="offcanvas-title"
                        id="offcanvasWithBothOptionsLabel"
                      >
                        Logo
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="offcanvas-body">
                      {/* Content */}
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item m-3">
                          <a className="nav-link" aria-current="page" href="/">
                            Home
                          </a>
                        </li>
                        <li className="nav-item mb-3">
                          <a className="nav-link" href="/about">
                            About
                          </a>
                        </li>
                        <li className="nav-item mb-3">
                          <a className="nav-link" href="/contact">
                            Contact
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
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contact">
                        Contact
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
              <div class="btn-group">
                <button
                  class="btn btn-profile"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  profile
                </button>
                <ul class="dropdown-menu" id="dropdown-menu-css">
                  <li>
                    <a class="dropdown-item mb-2" href="/profile">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item mb-2" href="/settings">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/logout">
                      Logout
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
