import React from "react";

function JoinUs() {
  return (
    <div className="join-us">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-9 col-lg-6 col-md-9">
            <div className="join-us-content d-flex justify-content-center align-items-center ">
              <div className="join-us-text">
                <h2 className="join-us__title me-4">Join us now</h2>
                <p className="join-us__desc">
                  Join us now to get all news and special offers such as bonus
                  points or discounts. <br />
                  For new members we have special offers by free delivery for
                  first 3 orders!
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 col-lg-6 col-md-3">
            <div className="join-us-content d-flex justify-content-center align-items-center ">
              <div className="join-us-btn">
                <a href="/register" className="join-us-link">
                  Join us now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
