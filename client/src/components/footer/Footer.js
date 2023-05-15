import React from "react";
import {
  FOOTER_CONTACT, FOOTER_CONTENT,
} from "../../shared/constant";

function Footer() {
  return (
    <>
      <footer className="footer text-center text-lg-start text-muted">
        <section className="">
          <div className="container-fluid text-center text-md-start">
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
                        <a href={FOOTER_CONTENT.HELP_CENTER.LINK} className="text-reset">
                          <span className="title-content-footer">{FOOTER_CONTENT.HELP_CENTER.TITLE}</span>
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
