import React from "react";
import { OUR_PARTNERSHIPS } from "../../../../../shared/constant";

function OurPartnership() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="title text-center">
            <h1>MEET OUR PARTNERSHIP</h1>
          </div>
          <div className="d-flex justify-content-center">
            <div
              className="text-center col-sm-12 col-md-12 col-lg-9"
              style={{
                fontWeight: "400",
                fontSize: "20px",
              }}
            >
              We provide a wide range of brands to help you choose the right
              fashion style for you. Here are some of our partnership brands
              that support us and been working with us for years include both
              local and international brands. We are very grateful to have them
              as our partnerships.
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-12 col-md-12 col-lg-9">
              <hr className="divider" />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row mt-3">
            <div className="col-12 col-lg-12 col-md-12">
              <div className="exclusive-partnership my-2">
                <div className="d-flex justify-content-center">
                  <h2>
                    <strong className="text-uppercase">
                      Exclusive Partnership
                    </strong>
                  </h2>
                </div>
              </div>
            </div>
            {OUR_PARTNERSHIPS.map((partner, key) =>
              partner.TYPE === "EXCLUSIVE" ? (
                <div className="col-sm-12 col-md-12 col-lg-2 mb-4" key={key}>
                  <div className="d-flex justify-content-center">
                    <div className="card-myShop-team">
                      <div className="icon-img">
                        <img
                          src={partner.LOGO}
                          alt="profile-img"
                          className={partner.CLASSNAME}
                        />
                      </div>
                      <div className="profile-name">
                        <h3 className="text-center mt-3">{partner.NAME}</h3>
                      </div>
                      <div className="information">
                        <p
                          className="text-center"
                          style={{
                            minHeight: "120px",
                            margin: "20px 20px 0px 20px",
                            textAlign: "justify",
                          }}
                        >
                          {partner.DESC || "No description"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-12 col-md-12 col-lg-9">
            <hr className="divider" />
          </div>
        </div>
         <div className="col-12">
          <div className="row mt-3">
            {OUR_PARTNERSHIPS.map((partner, key) =>
              partner.TYPE === "NON_EXCLUSIVE" ? (
                <div className="col-sm-12 col-md-12 col-lg-2 mb-4" key={key}>
                  <div className="d-flex justify-content-center">
                    <div className="card-myShop-team">
                      <div className="icon-img">
                        <img
                          src={partner.LOGO}
                          alt="profile-img"
                          className={partner.CLASSNAME}
                        />
                      </div>
                      <div className="profile-name">
                        <h3 className="text-center mt-3">{partner.NAME}</h3>
                      </div>
                      <div className="information">
                        <p
                          className="text-center"
                          style={{
                            minHeight: "120px",
                            margin: "20px 20px 0px 20px",
                            textAlign: "justify",
                          }}
                        >
                          {partner.DESC || "No description"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPartnership;