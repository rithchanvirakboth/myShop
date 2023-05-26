import React from "react";

function Setting() {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-10">
        {/* Bigger screen */}
        <div className="d-none d-lg-block">
          <div className="row gap-4 mt-4">
            <div className="d-flex justify-content-center">
              <div className="col-3 me-2">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <div className="d-flex justify-content-center bg-myshop-white">
                    <div className="row m-0">
                      <button
                        className="btn-link"
                        id="v-pills-edit-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-edit"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-edit"
                        aria-selected="true"
                      >
                        <div className="btn-setting row">
                          <div className="col-4 text-end">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              class="bi bi-gear-wide-connected"
                              viewBox="0 0 16 16"
                            >
                              <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
                            </svg>
                          </div>
                          <div className="col-8 text-start">Edit profile</div>
                        </div>
                      </button>
                      <hr className="line-break m-0" />
                      {/* <button
                        className="btn-link"
                        id="v-pills-purchased-history-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-purchased-history"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-purchased-history"
                        aria-selected="true"
                      >
                        <div className="row">
                          <div className="col-4 text-end">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-clock-history"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                              <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                              <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                            </svg>
                          </div>
                          <div className="col-8 text-start">
                            Change email
                          </div>
                        </div>
                      </button> */}
                      <hr className="line-break m-0" />
                      <button
                        className="btn-link"
                        id="v-pills-change-password-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-change-password"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-change-password"
                        aria-selected="true"
                      >
                        <div className="btn-setting row">
                          <div className="col-4 text-end">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              class="bi bi-lock"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                            </svg>
                          </div>
                          <div className="col-8 text-start">
                            Change password
                          </div>
                        </div>
                      </button>
                      <hr className="line-break m-0" />
                      <button
                        className="btn-link"
                        id="v-pills-payment-method-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-payment-method"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-payment-method"
                        aria-selected="true"
                      >
                        <div className="btn-setting row">
                          <div className="col-4 text-end">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-credit-card"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                              <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                            </svg>
                          </div>
                          <div className="col-8 text-start">payment method</div>
                        </div>
                      </button>
                      <hr className="line-break m-0" />
                      <button
                        className="btn-link"
                        id="v-pills-shipping-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-shipping"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-shipping"
                        aria-selected="true"
                      >
                        <div className="btn-setting row">
                          <div className="col-4 text-end">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              class="bi bi-geo-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                              />
                            </svg>
                          </div>
                          <div className="col-8 text-start">
                            Shipping address
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-edit"
                    role="tabpanel"
                    aria-labelledby="v-pills-edit-tab"
                  >
                    <div className="container">
                      <div className="d-flex justify-content-center">
                        <div className="col-6 col-lg-6">
                          <div className="row">
                            <div className="col-12 col-lg-12 mt-4">
                              <div className="setting-header">
                                <h3 className="text-center">Edit Profile</h3>
                              </div>
                            </div>
                            <div className="col-12 col-lg-12 mt-4">
                              <div className="form-group">
                                <label htmlFor="name">First Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="firstname"
                                  placeholder="Enter your first name"
                                  name="firstname"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-lg-12 mt-4">
                              <div className="form-group">
                                <label htmlFor="name">Last Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastname"
                                  placeholder="Enter your last name"
                                  name="lastname"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-lg-12 mt-4">
                              <div className="form-group">
                                <label htmlFor="name">Username</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="username"
                                  placeholder="Enter your username"
                                  name="username"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-lg-12 mt-4">
                              <div className="form-group">
                                <label htmlFor="name">Date of Birth</label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="birthDate"
                                  name="birthDate"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-lg-12 mt-4">
                              <div className="button">
                                <button
                                  type="button"
                                  className="btn btn-submit"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="v-pills-change-password"
                    role="tabpanel"
                    aria-labelledby="v-pills-change-password-tab"
                  >
                    <div className="container">
                      <div className="d-flex justify-content-center">
                        <div className="col-6 col-lg-6">
                          <div className="row">
                            <div className="col-12 col-lg-12">
                              <div className="setting-header">
                                <h3 className="text-center">Change Password</h3>
                              </div>
                            </div>
                            <div className="col-12 col-lg-12 mt-2">
                              <div className="form-group">
                                <label htmlFor="name">New Password</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="password"
                                  placeholder="Enter your new password"
                                  name="password"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-lg-12 mt-4">
                              <div className="form-group">
                                <label htmlFor="name">
                                  Confirmation Password
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="confirmPassword"
                                  placeholder="Re-enter your new password"
                                  name="confirmPassword"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-lg-12 mt-4">
                              <div className="button">
                                <button
                                  type="button"
                                  className="btn btn-submit"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-shipping"
                    role="tabpanel"
                    aria-labelledby="v-pills-shipping-tab"
                  >
                    <div className="container">
                      <div className="d-flex justify-content-center">
                        <div className="col-9 col-lg-9">
                          <div className="row">
                            <div className="col-12 col-lg-12">
                              <div className="setting-header">
                                <h3 className="text-center">Shipping Method</h3>
                              </div>
                            </div>
                            <div className="col-12 col-lg-12">
                              <span className="inconvenience-message text-center​">
                                This feature is currently unavailable due to maintenance.
                                We are sorry for the inconvenience. Please check back
                                later. Thank you.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-payment-method"
                    role="tabpanel"
                    aria-labelledby="v-pills-payment-method-tab"
                  >
                    <div className="container">
                      <div className="d-flex justify-content-center">
                        <div className="col-9 col-lg-9">
                          <div className="row">
                            <div className="col-12 col-lg-12">
                              <div className="setting-header">
                                <h3 className="text-center">Payment Method</h3>
                              </div>
                            </div>
                            <div className="col-12 col-lg-12 mt-2">
                              <span className="inconvenience-message text-center​">
                                We are sorry for the inconvenience, but we are
                                currently only accepting payment one payment
                                method.**
                              </span>
                                <br />
                                <br />
                                <strong>Bank Transfer</strong>
                                <br />
                                <br />
                                Bank Name: Bank Central Asia
                                <br />
                                Account Number: 1234567890
                                <br />
                                Account Holder: John Doe

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
        </div>

        {/* Smaller screen */}
        <div className="d-lg-none">
          <div className="col-12 mt-4">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <div className="col-3">
                  <button
                    className="btn-nav"
                    id="nav-edit-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-edit"
                    type="button"
                    role="tab"
                    aria-controls="nav-edit"
                    aria-selected="true"
                  >
                    <div className="row m-2">
                      <div className="col-4 text-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          fill="currentColor"
                          class="bi bi-gear-wide-connected"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
                        </svg>
                      </div>
                      <div className="col-8 text-start mt-0 mt-md-2 mt-sm-2">
                        Edit Profile
                      </div>
                    </div>
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn-nav"
                    id="nav-change-password-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-change-password"
                    type="button"
                    role="tab"
                    aria-controls="nav-change-password"
                    aria-selected="true"
                  >
                    <div className="row m-2">
                      <div className="col-4 text-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          fill="currentColor"
                          class="bi bi-lock"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                        </svg>
                      </div>
                      <div className="col-8 text-start">Change Password</div>
                    </div>
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn-nav"
                    id="nav-payment-method-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-payment-method"
                    type="button"
                    role="tab"
                    aria-controls="nav-payment-method"
                    aria-selected="true"
                  >
                    <div className="row m-2">
                      <div className="col-4 text-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          fill="currentColor"
                          className="bi bi-credit-card"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                          <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                        </svg>
                      </div>
                      <div className="col-8 text-start mt-1">
                        Payment Method
                      </div>
                    </div>
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn-nav"
                    id="nav-shipping-address-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-shipping-address"
                    type="button"
                    role="tab"
                    aria-controls="nav-shipping-address"
                    aria-selected="true"
                  >
                    <div className="row m-2">
                      <div className="col-4 text-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          fill="currentColor"
                          class="bi bi-geo-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                          />
                        </svg>
                      </div>
                      <div className="col-8 text-start">Shipping Address</div>
                    </div>
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-12 mt-2">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-edit"
                role="tabpanel"
                aria-labelledby="nav-edit-tab"
              >
                edit
              </div>
              <div
                className="tab-pane fade show active"
                id="nav-change-password"
                role="tabpanel"
                aria-labelledby="nav-change-password-tab"
              >
                change-password
              </div>
              <div
                className="tab-pane fade show active"
                id="nav-payment-method"
                role="tabpanel"
                aria-labelledby="nav-payment-method-tab"
              >
                payment-method
              </div>
              <div
                className="tab-pane fade show active"
                id="nav-shipping-address"
                role="tabpanel"
                aria-labelledby="nav-shipping-address-tab"
              >
                address
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
