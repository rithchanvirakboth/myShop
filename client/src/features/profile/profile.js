import React from "react";


function Profile() {


  return (
    <div className="d-flex justify-content-center">
      <div className="col-10">
        {/* Bigger screen */}
        <div className="d-none d-lg-block">
          <div className="row gap-4 mt-4">
            <div className="d-flex justify-content-center">
              <div className="col-3 me-2">
                {/* Profile name */}
                <div className="d-flex justify-content-center bg-myshop-white">
                  {/* Logo */}
                  <div className="col-4 p-2 my-2">
                    <div className="col profile-logo">
                      <img
                        src="https://i.imgur.com/6b6psnQ.png"
                        alt="profile-logo"
                        className="avatar"
                      />
                    </div>
                  </div>
                  {/* Name */}
                  <div className="col-8 p-2 my-2">
                    <div className="profile-name">
                      <div className="row">
                        <div className="col">Hello,</div>
                        <div className="col-12">
                          <strong>Rith Chanvirakboth</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {/* Profile information */}
                  <div className="d-flex justify-content-center bg-myshop-white mt-2">
                    <button
                      className="btn-setting-profile-overview active"
                      id="v-pills-profile-overview-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile-overview"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile-overview"
                      aria-selected="true"
                    >
                      <div className="row">
                        <div className="col-4 text-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="23"
                            fill="currentColor"
                            className="bi bi-person"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                          </svg>
                        </div>
                        <div className="col-8 text-start">Profile Overview</div>
                      </div>
                    </button>
                  </div>

                  {/* Profile Menu */}
                  <div className="d-flex justify-content-center bg-myshop-white mt-2">
                    <div className="row m-0">
                      <button
                        className="btn-link"
                        id="v-pills-ordering-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-ordering"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-ordering"
                        aria-selected="true"
                      >
                        <div className="row">
                          <div className="col-4 text-end">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-cart"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                          </div>
                          <div className="col-8 text-start">Ordering</div>
                        </div>
                      </button>
                      <hr className="line-break m-0" />
                      <button
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
                            Purchased History
                          </div>
                        </div>
                      </button>
                      <hr className="line-break m-0" />
                      <button
                        className="btn-link"
                        id="v-pills-address-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-address"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-address"
                        aria-selected="true"
                      >
                        <div className="row">
                          <div className="col-4 text-end">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-house"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                            </svg>
                          </div>
                          <div className="col-8 text-start">Address</div>
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
                        <div className="row">
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
                          <div className="col-8 text-start">Payment Method</div>
                        </div>
                      </button>
                      <hr className="line-break m-0" />
                      <button
                        className="btn-link"
                        id="v-pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-contact"
                        aria-selected="true"
                      >
                        <div className="row">
                          <div className="col-4 text-end">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-person-vcard"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
                              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z" />
                            </svg>
                          </div>
                          <div className="col-8 text-start">
                            Contact Information
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  {/* FAQ */}
                  <div className="d-flex justify-content-center bg-myshop-white mt-2">
                    <div className="row m-0">
                      <button
                        className="btn-link-faq"
                        id="v-pills-faq-1-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-faq-1"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-faq-1"
                        aria-selected="true"
                      >
                        <div className="row">
                          <div className="col-4 text-end">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-stack"
                              viewBox="0 0 16 16"
                            >
                              <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                              <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
                            </svg>
                          </div>
                          <div className="col-8 text-start">
                            Change username
                          </div>
                        </div>
                      </button>
                      <hr className="line-break m-0" />
                      <button
                        className="btn-link-faq"
                        id="v-pills-faq-2-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-faq-2"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-faq-2"
                        aria-selected="true"
                      >
                        <div className="row">
                          <div className="col-4 text-end">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-stack"
                              viewBox="0 0 16 16"
                            >
                              <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                              <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
                            </svg>
                          </div>
                          <div className="col-8 text-start">
                            Change password
                          </div>
                        </div>
                      </button>
                      <hr className="line-break m-0" />
                      <button
                        className="btn-link-faq"
                        id="v-pills-faq-3-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-faq-3"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-faq-3"
                        aria-selected="true"
                      >
                        <div className="row">
                          <div className="col-4 text-end">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-stack"
                              viewBox="0 0 16 16"
                            >
                              <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                              <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
                            </svg>
                          </div>
                          <div className="col-8 text-start">Change email</div>
                        </div>
                      </button>
                      <hr className="line-break m-0" />
                      <button
                        className="btn-link-faq"
                        id="v-pills-faq-4-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-faq-4"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-faq-4"
                        aria-selected="true"
                      >
                        <div className="row">
                          <div className="col-4 text-end">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-stack"
                              viewBox="0 0 16 16"
                            >
                              <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                              <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
                            </svg>
                          </div>
                          <div className="col-8 text-start">Change contact</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Setting */}
                  <div className="d-flex justify-content-center bg-myshop-white mt-2">
                    <button
                      className="btn-setting-profile-overview"
                      id="v-pills-setting-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-setting"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-setting"
                      aria-selected="true"
                    >
                      <div className="row">
                        <div className="col-4 text-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="23"
                            fill="currentColor"
                            className="bi bi-gear-wide-connected"
                            viewBox="0 0 16 16"
                          >
                            <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
                          </svg>
                        </div>
                        <div className="col-8 text-start">Setting</div>
                      </div>
                    </button>
                  </div>
                </div>
                {/* LOGOUT */}
                <div className="btn-logout d-flex justify-content-center bg-myshop-white mt-2">
                  Logout
                </div>
              </div>
              <div className="col-8">
                <div className="tab-content" id="v-pills-tabContent">
                  {/* Profile Overview */}
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-profile-overview"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-overview-tab"
                  >
                    profile overview
                  </div>

                  {/* Menu */}
                  <div
                    className="tab-pane fade"
                    id="v-pills-ordering"
                    role="tabpanel"
                    aria-labelledby="v-pills-ordering-tab"
                  >
                    ordering
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-purchased-history"
                    role="tabpanel"
                    aria-labelledby="v-pills-purchased-history-tab"
                  >
                    purchased history
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-address"
                    role="tabpanel"
                    aria-labelledby="v-pills-address-tab"
                  >
                    address
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-payment-method"
                    role="tabpanel"
                    aria-labelledby="v-pills-payment-method-tab"
                  >
                    payment method
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-contact"
                    role="tabpanel"
                    aria-labelledby="v-pills-contact-tab"
                  >
                    contact information
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-faq-1"
                    role="tabpanel"
                    aria-labelledby="v-pills-faq-1-tab"
                  >
                    Faq 1
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-faq-2"
                    role="tabpanel"
                    aria-labelledby="v-pills-faq-2-tab"
                  >
                    Faq 2
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-faq-3"
                    role="tabpanel"
                    aria-labelledby="v-pills-faq-3-tab"
                  >
                    Faq 3
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-faq-4"
                    role="tabpanel"
                    aria-labelledby="v-pills-faq-4-tab"
                  >
                    Faq 4
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-setting"
                    role="tabpanel"
                    aria-labelledby="v-pills-setting-tab"
                  >
                    setting
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
                <div className="col-2">
                  <button
                    className="btn-nav active"
                    id="nav-profile-overview-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile-overview"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile-overview"
                    aria-selected="true"
                  >
                    <div className="row m-2">
                      <div className="col-4 text-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          fill="currentColor"
                          className="bi bi-person"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                        </svg>
                      </div>
                      <div className="col-8 text-start">Profile Overview</div>
                    </div>
                  </button>
                </div>
                <div className="col-2">
                  <button
                    className="btn-nav"
                    id="nav-ordering-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-ordering"
                    type="button"
                    role="tab"
                    aria-controls="nav-ordering"
                    aria-selected="true"
                  >
                    <div className="row m-2">
                      <div className="col-4 text-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          fill="currentColor"
                          className="bi bi-cart"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                      </div>
                      <div className="col-8 text-start mt-1">Ordering</div>
                    </div>
                  </button>
                </div>
                <div className="col-2">
                  <button
                      className="btn-nav"
                      id="nav-purchased-history-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-purchased-history"
                      type="button"
                      role="tab"
                      aria-controls="nav-purchased-history"
                      aria-selected="true"
                  >
                    <div className="row m-2">
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
                      <div className="col-8 text-start">Purchased History</div>
                    </div>
                  </button>
                </div>
                <div className="col-2">
                  <button
                    className="btn-nav"
                    id="nav-address-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-address"
                    type="button"
                    role="tab"
                    aria-controls="nav-address"
                    aria-selected="true"
                  >
                    <div className="row m-2">
                      <div className="col-4 text-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          fill="currentColor"
                          className="bi bi-house"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                        </svg>
                      </div>
                      <div className="col-8 text-start mt-1">Address</div>
                    </div>
                  </button>
                </div>
                <div className="col-2">
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
                      <div className="col-8 text-start">Payment Method</div>
                    </div>
                  </button>
                </div>
                <div className="col-2">
                  <button
                    className="btn-nav"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="true"
                  >
                    <div className="row m-2">
                      <div className="col-4 text-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          fill="currentColor"
                          className="bi bi-person-vcard"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
                          <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z" />
                        </svg>
                      </div>
                      <div className="col-8 text-start">
                        Contact Information
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-12 mt-2">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-profile-overview" role="tabpanel" aria-labelledby="nav-profile-overview-tab">
                 profile overview
              </div>
              <div className="tab-pane fade show active" id="nav-ordering" role="tabpanel" aria-labelledby="nav-ordering-tab">
                 Ordering
              </div>
              <div className="tab-pane fade show active" id="nav-purchased-history" role="tabpanel" aria-labelledby="nav-purchased-history-tab">
                  Purchased History
              </div>
              <div className="tab-pane fade show active" id="nav-address" role="tabpanel" aria-labelledby="nav-address-tab">
                  address
              </div>
              <div className="tab-pane fade show active" id="nav-payment-method" role="tabpanel" aria-labelledby="nav-payment-method-tab">
                  payment method
              </div>
              <div className="tab-pane fade show active" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                  contact 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
