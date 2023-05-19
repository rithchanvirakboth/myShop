import React from "react";
import HelpCenterImg from "../../../components/assets/Help-center.png";
import { HELP_CENTER_FAQ } from "../../../shared/constant";

function HelpCenter() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-12 col-lg-12 col-md-12">
            <div className="row">
              <div className="col-12 col-lg-12 col-md-12">
                <h1 className="text-center get-in-touch">How can we help?</h1>
              </div>
              <div className="col-12 mt-3">
                <div className="col-12 col-lg-12">
                  <div className="row">
                    {/* Content */}
                    <div className="col-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                      <div className="help-center-content">
                        <h3 className="">
                          Welcome to our Help Center! This is the place where
                          you can find answers to your questions and get
                          assistance with any issues you may be experiencing.
                        </h3>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="col-6 d-flex justify-content-center align-items-center">
                      <div className="help-center-image d-lg-block d-none">
                        <img
                          src={HelpCenterImg}
                          alt="help-center-img"
                          className="help-center-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <hr className="divider" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-12 col-md-12">
            <div className="row">
              <div className="col-12 col-lg-12 col-md-12">
                <h3 className="text-start mt-4 ms-2">
                  <strong>Frequently Asked Questions</strong>
                </h3>
              </div>
              <div className="col-3">
                <hr className="divider" />
              </div>
              <div className="help-center-faq">
                <div className="col-12 col-lg-12 col-md-12">
                  <div className="row">
                    {HELP_CENTER_FAQ.map((item, index) => {
                      return (
                        <div
                          className="col-12 col-lg-3 col-md-4 mb-4"
                          key={index}
                        >
                          <div
                            className="accordion accordion-flush"
                            id="accordionFlushExample"
                          >
                            <div className="accordion-item">
                              <h2 className="accordion-header" id={item.ID}>
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={item.TARGET}
                                  aria-expanded="false"
                                  aria-controls={item.ARIA_CONTROLS}
                                >
                                  {item.QUESTION}
                                </button>
                              </h2>
                              <div
                                id={item.ARIA_CONTROLS}
                                className="accordion-collapse collapse"
                                aria-labelledby={item.ID}
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: item.ANSWER,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-12 col-md-12">
            <div className="row">
              <div className="col-12 col-lg-12 col-md-12">
                <h3 className="text-start mt-4 ms-2">
                  <strong>SUPPORT TOPICS</strong>
                </h3>
              </div>
              <div className="col-6">
                <hr className="divider" />
              </div>

              {/* Display on medium - large screen */}
              <div className="d-none d-sm-none d-md-block">
                <div className="col-12 col-lg-12 col-md-12">
                  <div className="d-flex align-items-start">
                    <div
                      className="col-12 col-lg-3 col-md-3 nav flex-column nav-pills me-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        className="btn-support-topics active"
                        id="v-pills-company-infor-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-company-infor"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-company-infor"
                        aria-selected="false"
                      >
                        COMPANY INFORMATION
                      </button>
                      <hr className="break" />
                      <button
                        className="btn-support-topics"
                        id="v-pills-account-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-account"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-account"
                        aria-selected="true"
                      >
                        ACCOUNT
                      </button>
                      <hr className="break" />
                      <button
                        className="btn-support-topics"
                        id="v-pills-delivery-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-delivery"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-delivery"
                        aria-selected="false"
                      >
                        DELIVERY
                      </button>
                      <hr className="break" />
                      <button
                        className="btn-support-topics"
                        id="v-pills-ordering-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-ordering"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-ordering"
                        aria-selected="false"
                      >
                        ORDERING
                      </button>
                      <hr className="break" />
                      <button
                        className="btn-support-topics"
                        id="v-pills-product-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-product"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-product"
                        aria-selected="false"
                      >
                        PRODUCT
                      </button>
                      <hr className="break" />
                      <button
                        className="btn-support-topics"
                        id="v-pills-payment-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-payment"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-payment"
                        aria-selected="false"
                      >
                        PAYMENT
                      </button>
                      <hr className="break" />
                      <button
                        className="btn-support-topics"
                        id="v-pills-return-refund-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-return-refund"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-return-refund"
                        aria-selected="false"
                      >
                        RETURN & REFUND
                      </button>
                    </div>
                    <div
                      className="tab-content col-12 col-lg-8 col-md-9"
                      id="v-pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-company-infor"
                        role="tabpanel"
                        aria-labelledby="v-pills-company-infor-tab"
                        tabIndex="0"
                      >
                        <div className="d-flex justify-content-center p-4">
                          <div className="col-12 col-lg-9 col-md-9">
                            <div className="row">
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do I find a store nearby?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                Where is shop located?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                Can I use myShop name, logos or images?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do I contact adidas?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do i apply for a job at myShop?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                What are the opening hours of myShop?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                What are the terms and conditions of myShop?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                Does myShop have a privacy policy?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                Does myShop have any job vacancies?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                Does myShop have any collaborations?
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-account"
                        role="tabpanel"
                        aria-labelledby="v-pills-account-tab"
                        tabIndex="0"
                      >
                        <div className="d-flex justify-content-center p-4">
                          <div className="col-12 col-lg-9 col-md-9">
                            <div className="row">
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do i change my username?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do i change my password?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do i change my email address?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do i change my language settings?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do i change my date of birth?
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-delivery"
                        role="tabpanel"
                        aria-labelledby="v-pills-delivery-tab"
                        tabIndex="0"
                      >
                        <div className="d-flex justify-content-center p-4">
                          <div className="col-12 col-lg-9 col-md-9">
                            <div className="row">
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do i change my delivery address?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do i change my delivery method?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do i change my delivery date?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do i change my delivery time?
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-ordering"
                        role="tabpanel"
                        aria-labelledby="v-pills-order-tab"
                        tabIndex="0"
                      >
                        <div className="d-flex justify-content-center p-4">
                          <div className="col-12 col-lg-9 col-md-9">
                            <div className="row">
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How can i track my order?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                Why is my order late?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                Why does my order not have a tracking number?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                Is order tracking available for all orders?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How to cancel my order?
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-product"
                        role="tabpanel"
                        aria-labelledby="v-pills-product-tab"
                        tabIndex="0"
                      >
                        <div className="d-flex justify-content-center p-4">
                          <div className="col-12 col-lg-9 col-md-9">
                            <div className="row">
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do i change my product size?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How to know if a product is available?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                What size does the product based on?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do i know if a product is out of stock?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                Where can i find the product size guide?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How can i get discount for a product?
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-payment"
                        role="tabpanel"
                        aria-labelledby="v-pills-payment-tab"
                        tabIndex="0"
                      >
                        <div className="d-flex justify-content-center p-4">
                          <div className="col-12 col-lg-9 col-md-9">
                            <div className="row">
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                What payment methods are available?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do i change my payment method?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                Can i pay using real money?
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-return-refund"
                        role="tabpanel"
                        aria-labelledby="v-pills-return-refund-tab"
                        tabIndex="0"
                      >
                        <div className="d-flex justify-content-center p-4">
                          <div className="col-12 col-lg-9 col-md-9">
                            <div className="row">
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How many day can i return a product?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do i return a product?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                Where can i find the return form?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do i get a refund?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How long does it take to get a refund?
                              </a>
                              <a
                                href=""
                                className="link-support-topics text-start"
                              >
                                How do i know if my refund is successful?
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Display on small screen */}
              <div className="d-sm-block d-md-none">
                <div className="col-12">
                  <nav>
                    <div
                      className="nav nav-tabs col-12"
                      id="nav-tab"
                      role="tablist"
                    >
                      <div className="col-4">
                        <button
                          className="btn-support-topics-sm active"
                          id="nav-company-infor-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-company-infor"
                          type="button"
                          role="tab"
                          aria-controls="nav-company-infor"
                          aria-selected="true"
                        >
                          Company Information
                        </button>
                      </div>
                      <hr className="break" />
                      <div className="col-4">
                        <button
                          className="btn-support-topics-sm"
                          id="nav-account-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-account"
                          type="button"
                          role="tab"
                          aria-controls="nav-account"
                          aria-selected="false"
                        >
                          Account
                        </button>
                      </div>
                      <hr className="break" />
                      <div className="col-4">
                        <button
                          className="btn-support-topics-sm"
                          id="nav-delivery-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-delivery"
                          type="button"
                          role="tab"
                          aria-controls="nav-delivery"
                          aria-selected="false"
                        >
                          Delivery
                        </button>
                      </div>
                      <div className="col-12">
                        <hr className="hr-support-topics" />
                      </div>
                      <div className="col-3">
                        <button
                          className="btn-support-topics-sm"
                          id="nav-ordering-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-ordering"
                          type="button"
                          role="tab"
                          aria-controls="nav-ordering"
                          aria-selected="false"
                        >
                          Ordering
                        </button>
                      </div>
                      <hr className="break" />
                      <div className="col-3">
                        <button
                          className="btn-support-topics-sm"
                          id="nav-product-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-product"
                          type="button"
                          role="tab"
                          aria-controls="nav-product"
                          aria-selected="false"
                        >
                          Product
                        </button>
                      </div>
                      <hr className="break" />
                      <div className="col-3">
                        <button
                          className="btn-support-topics-sm"
                          id="nav-payment-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-payment"
                          type="button"
                          role="tab"
                          aria-controls="nav-payment"
                          aria-selected="false"
                        >
                          Payment
                        </button>
                      </div>
                      <hr className="break" />
                      <div className="col-3">
                        <button
                          className="btn-support-topics-sm"
                          id="nav-return-refund-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-return-refund"
                          type="button"
                          role="tab"
                          aria-controls="nav-return-refund"
                          aria-selected="false"
                        >
                          Return & Refund
                        </button>
                      </div>
                    </div>
                  </nav>
                  <div className="tab-content mt-3" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-company-infor"
                      role="tabpanel"
                      aria-labelledby="nav-company-infor-tab"
                    >
                      <div className="d-flex justify-content-center p-4">
                        <div className="col-12 col-lg-9 col-md-9">
                          <div className="row">
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do I find a store nearby?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              Where is shop located?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              Can I use myShop name, logos or images?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do I contact adidas?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do i apply for a job at myShop?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              What are the opening hours of myShop?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              What are the terms and conditions of myShop?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              Does myShop have a privacy policy?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              Does myShop have any job vacancies?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              Does myShop have any collaborations?
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-account"
                      role="tabpanel"
                      aria-labelledby="nav-account-tab"
                    >
                      <div className="d-flex justify-content-center p-4">
                        <div className="col-12 col-lg-9 col-md-9">
                          <div className="row">
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do i change my username?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do i change my password?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do i change my email address?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do i change my language settings?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do i change my date of birth?
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-delivery"
                      role="tabpanel"
                      aria-labelledby="nav-delivery-tab"
                    >
                      <div className="d-flex justify-content-center p-4">
                        <div className="col-12 col-lg-9 col-md-9">
                          <div className="row">
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do i change my delivery address?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do i change my delivery method?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do i change my delivery date?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do i change my delivery time?
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-ordering"
                      role="tabpanel"
                      aria-labelledby="nav-ordering-tab"
                    >
                      <div className="d-flex justify-content-center p-4">
                        <div className="col-12 col-lg-9 col-md-9">
                          <div className="row">
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How can i track my order?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              Why is my order late?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              Why does my order not have a tracking number?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              Is order tracking available for all orders?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How to cancel my order?
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-product"
                      role="tabpanel"
                      aria-labelledby="nav-product-tab"
                    >
                      <div className="d-flex justify-content-center p-4">
                        <div className="col-12 col-lg-9 col-md-9">
                          <div className="row">
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do i change my product size?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How to know if a product is available?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              What size does the product based on?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do i know if a product is out of stock?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              Where can i find the product size guide?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How can i get discount for a product?
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-payment"
                      role="tabpanel"
                      aria-labelledby="nav-payment-tab"
                    >
                      <div className="d-flex justify-content-center p-4">
                        <div className="col-12 col-lg-9 col-md-9">
                          <div className="row">
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              What payment methods are available?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do i change my payment method?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              Can i pay using real money?
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-return-refund"
                      role="tabpanel"
                      aria-labelledby="nav-return-refund-tab"
                    >
                      <div className="d-flex justify-content-center p-4">
                        <div className="col-12 col-lg-9 col-md-9">
                          <div className="row">
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How many day can i return a product?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do i return a product?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              Where can i find the return form?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do i get a refund?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How long does it take to get a refund?
                            </a>
                            <a
                              href=""
                              className="link-support-topics text-start"
                            >
                              How do i know if my refund is successful?
                            </a>
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
    </div>
  );
}

export default HelpCenter;
