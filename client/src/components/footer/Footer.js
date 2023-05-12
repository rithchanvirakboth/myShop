import React from "react";
import {
  FOOTER_CONTACT, FOOTER_CONTENT,
} from "../../shared/constant";

function Footer() {
  return (
    <>
      <footer className="footer text-center text-lg-start text-muted">
        <section className="">
          <div className="container-fluid text-center text-md-start mt-5">
            <div className="row">
              <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                <div className="d-flex justify-content-center">
                  {/* SOCIAL MEDIA CONTENT */}
                  <div className="col-6">
                    <div className="d-flex justify-content-center social-media">
                      <a
                        href={FOOTER_CONTACT.SOCIAL_MEDIA.FACEBOOK.LINK}
                        target="_blank"
                        className="text-reset mx-4"
                        rel="noreferrer"
                      >
                        {FOOTER_CONTACT.SOCIAL_MEDIA.FACEBOOK.ICON}
                      </a>
                      <a
                        href={FOOTER_CONTACT.SOCIAL_MEDIA.INSTAGRAM.LINK}
                        target="_blank"
                        className="text-reset mx-4"
                        rel="noreferrer"
                      >
                        {FOOTER_CONTACT.SOCIAL_MEDIA.INSTAGRAM.ICON}
                      </a>
                      <a
                        href={FOOTER_CONTACT.SOCIAL_MEDIA.TWITTER.LINK}
                        target="_blank"
                        className="text-reset mx-4"
                        rel="noreferrer"
                      >
                        {FOOTER_CONTACT.SOCIAL_MEDIA.TWITTER.ICON}
                      </a>
                      <a
                        href={FOOTER_CONTACT.SOCIAL_MEDIA.PINTEREST.LINK}
                        target="_blank"
                        className="text-reset mx-4"
                        rel="noreferrer"
                      >
                        {FOOTER_CONTACT.SOCIAL_MEDIA.PINTEREST.ICON}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* HORIZON LINE */}
              <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                <div className="d-flex justify-content-center">
                  <div className="col-6">
                    <hr className="divider" />
                  </div>
                </div>
              </div>

              {/* footer content */}
              <div className="col-12 col-lg-12 col-md-12 col-sm-12 my-2">
                <div className="d-flex justify-content-center">
                  {/* SOCIAL MEDIA CONTENT */}
                  <div className="col-9 col-lg-9 col-md-9 col-sm-9">
                    <div className="row">
                      <div className="col-12 col-lg-2 col-md-4 col-sm-4 my-2 text-center">
                        <a href={FOOTER_CONTENT.ABOUT.LINK} className="text-reset">
                          <span className="title-content-footer">{FOOTER_CONTENT.ABOUT.TITLE}</span>
                        </a>
                      </div>
                      <div className="col-12 col-lg-2 col-md-4 col-sm-4 my-2 text-center">
                        <a href={FOOTER_CONTENT.CAREER.LINK} className="text-reset">
                          <span className="title-content-footer">{FOOTER_CONTENT.CAREER.TITLE}</span>
                        </a>
                      </div>
                      <div className="col-12 col-lg-2 col-md-4 col-sm-4 my-2 text-center">
                        <a href={FOOTER_CONTENT.POLICY_AND_PRIVACY.LINK} className="text-reset">
                          <span className="title-content-footer">{FOOTER_CONTENT.POLICY_AND_PRIVACY.TITLE}</span>
                        </a>
                      </div>
                      <div className="col-12 col-lg-2 col-md-4 col-sm-4 my-2 text-center">
                        <a href={FOOTER_CONTENT.TERMS_AND_CONDITIONS.LINK} className="text-reset">
                          <span className="title-content-footer">{FOOTER_CONTENT.TERMS_AND_CONDITIONS.TITLE}</span>
                        </a>
                      </div>
                      <div className="col-12 col-lg-2 col-md-4 col-sm-4 my-2 text-center">
                        <a href={FOOTER_CONTENT.BLOG.LINK} className="text-reset">
                          <span className="title-content-footer">{FOOTER_CONTENT.BLOG.TITLE}</span>
                        </a>
                      </div>
                      <div className="col-12 col-lg-2 col-md-4 col-sm-4 my-2 text-center">
                        <a href={FOOTER_CONTENT.CONTACT_US.LINK} className="text-reset">
                          <span className="title-content-footer">{FOOTER_CONTENT.CONTACT_US.TITLE}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              {/* BRAND SECTION */}
              {/* <div className="col-xl-3 mx-auto mb-4 mt-4 d-none d-xl-block">
                <a
                  href={FOOTER_BRAND_DESC.BRAND_LOGO.LINK}
                  className="d-flex justify-content-center"
                >
                  <img
                    src={FOOTER_BRAND_DESC.BRAND_LOGO.SRC}
                    alt={FOOTER_BRAND_DESC.BRAND_LOGO.ALT}
                    width={"150px"}
                    height={"75px"}
                  />
                </a>
                <div className="d-flex justify-content-center">
                  <p className="brand-desc mt-3 text-center">
                    {FOOTER_BRAND_DESC.BRAND_DESC.TEXT}
                  </p>
                </div>
              </div> */}

              {/* MENU SECTION */}
              {/* <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4 mt-4 text-center">
                <h6 className="text-uppercase fw-bold mb-2 mt-2">
                  {FOOTER_MENU.TITLE.NAME}
                </h6>
                <p className="ms-section">
                  <a
                    href={FOOTER_MENU.HOME.LINK}
                    className="text-decoration-none text-reset"
                  >
                    {FOOTER_MENU.HOME.NAME}
                  </a>
                </p>
                <p className="ms-section">
                  <a
                    href={FOOTER_MENU.OUR_STORE.LINK}
                    className="text-decoration-none text-reset"
                  >
                    {FOOTER_MENU.OUR_STORE.NAME}
                  </a>
                </p>
                <p className="ms-section">
                  <a
                    href={FOOTER_MENU.ABOUT_US.LINK}
                    className="text-decoration-none text-reset"
                  >
                    {FOOTER_MENU.ABOUT_US.NAME}
                  </a>
                </p>
                <p className="ms-section">
                  <a
                    href={FOOTER_MENU.CONTACT_US.LINK}
                    className="text-decoration-none text-reset"
                  >
                    {FOOTER_MENU.CONTACT_US.NAME}
                  </a>
                </p>
                <p className="ms-section">
                  <a
                    href={FOOTER_MENU.BLOG.LINK}
                    className="text-decoration-none text-reset"
                  >
                    {FOOTER_MENU.BLOG.NAME}
                  </a>
                </p>
              </div> */}

              {/* SERVICE SECTION */}
              {/* <div className="col-md-4 col-lg-4 col-xl-3 d-none d-md-block d-lg-block d-xl-block mx-auto mb-4 mt-4 text-center">
                <h6 className="text-uppercase fw-bold mb-2 mt-2">
                  {
                    FOOTER_SERVICE.TITLE.NAME
                  }
                </h6>
                <p className="ms-section">
                  <a
                    href={FOOTER_SERVICE.PURCHASE_HISTORY.LINK}
                    className="text-decoration-none text-reset"
                  >
                    {FOOTER_SERVICE.PURCHASE_HISTORY.NAME}
                  </a>
                </p>
                <p className="ms-section">
                  <a
                    href={FOOTER_SERVICE.SHIPPING_AND_DELIVERY.LINK}
                    className="text-decoration-none text-reset"
                  >
                    {FOOTER_SERVICE.SHIPPING_AND_DELIVERY.NAME}
                  </a>
                </p>
                <p className="ms-section">
                  <a
                    href={FOOTER_SERVICE.CAREER_WITH_US.LINK}
                    className="text-decoration-none text-reset"
                  >
                    {FOOTER_SERVICE.CAREER_WITH_US.NAME}
                  </a>
                </p>
                <p className="ms-section">
                  <a
                    href={FOOTER_SERVICE.TEMRS_AND_CONDITIONS.LINK}
                    className="text-decoration-none text-reset"
                  >
                    {FOOTER_SERVICE.TEMRS_AND_CONDITIONS.NAME}
                  </a>
                </p>
                <p className="ms-section">
                  <a
                    href={FOOTER_SERVICE.POLICY_AND_PRIVACY.LINK}
                    className="text-decoration-none text-reset"
                  >
                    {FOOTER_SERVICE.POLICY_AND_PRIVACY.NAME}
                  </a>
                </p>
              </div> */}

              {/* CONTACT SECTION */}
              {/* <div className="col-md-4 col-lg-4 col-xl-3 d-none d-md-block d-lg-block d-xl-block mx-auto mb-2 mt-4 text-justify">
                <h6 className="text-uppercase fw-bold mb-2 mt-2">
                  {FOOTER_CONTACT.TITLE.NAME}
                </h6>
                <p className="ms-section">
                  {FOOTER_CONTACT.ADDRESS.NAME} : {FOOTER_CONTACT.ADDRESS.TEXT}
                  <a href={FOOTER_CONTACT.ADDRESS.LINK} className="text-reset ms-2">
                    view on map
                  </a>
                </p>
                <p className="ms-section">
                  {FOOTER_CONTACT.EMAIL.NAME} : {FOOTER_CONTACT.EMAIL.TEXT}
                </p>
                <p className="ms-section">
                  {FOOTER_CONTACT.SOCIAL_MEDIA.NAME}:
                </p>
                  <p className="mt-2">
                    <a
                      href={FOOTER_CONTACT.SOCIAL_MEDIA.FACEBOOK.LINK}
                      target="_blank"
                      className="text-reset me-4"
                      rel="noreferrer"
                    >
                      {FOOTER_CONTACT.SOCIAL_MEDIA.FACEBOOK.ICON}
                    </a>
                    <a
                      href={FOOTER_CONTACT.SOCIAL_MEDIA.INSTAGRAM.LINK}
                      target="_blank"
                      className="text-reset me-4"
                      rel="noreferrer"
                    >
                      {FOOTER_CONTACT.SOCIAL_MEDIA.INSTAGRAM.ICON}
                    </a>
                    <a
                      href={FOOTER_CONTACT.SOCIAL_MEDIA.TWITTER.LINK}
                      target="_blank"
                      className="text-reset me-4"
                      rel="noreferrer"
                    >
                      {FOOTER_CONTACT.SOCIAL_MEDIA.TWITTER.ICON}
                    </a>
                    <a
                      href={FOOTER_CONTACT.SOCIAL_MEDIA.PINTEREST.LINK}
                      target="_blank"
                      className="text-reset me-4"
                      rel="noreferrer"
                    >
                      {FOOTER_CONTACT.SOCIAL_MEDIA.PINTEREST.ICON}
                    </a>
                  </p>
              </div> */}
          </div>
        </section>

        <div className="text-center p-2 copyright">
          © 2021 All rights reserved. Designed by
          <a className="text-reset fw-bold ms-2" href="/">
            myShop.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
