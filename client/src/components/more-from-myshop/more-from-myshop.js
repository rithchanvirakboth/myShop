import React from "react";
import test from "../assets/aboutus-page/who-we-are/who-we-are-3.png";

function MoreFromMyshop() {
  return (
    <div className="col-12 col-lg-9 col-md-12 mb-4">
      <h3 className="text-start mb-4">More from myShop</h3>
      <div className="row">
        <div className="col-12 col-lg-3 col-md-12">
          <div className="news-card me-2">
            <img src={test} alt="test" className="news-img" />

            <div className="news-content">
              <h4 className="text-center">hi</h4>
              <p className="news-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
              <div className="d-flex justify-content-end me-4 mb-3">
                <a href="#" className="news-link">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-12">
          <div className="news-card me-2">
            <img src={test} alt="test" className="news-img" />

            <div className="news-content">
              <h4 className="text-center">hi</h4>
              <p className="news-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
              <div className="d-flex justify-content-end me-4 mb-3">
                <a href="#" className="news-link">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-12">
          <div className="news-card me-2">
            <img src={test} alt="test" className="news-img" />

            <div className="news-content">
              <h4 className="text-center">hi</h4>
              <p className="news-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
              <div className="d-flex justify-content-end me-4 mb-3">
                <a href="#" className="news-link">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-12">
          <div className="see-more">
            <a href="#" className="see-more-link">
            See More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreFromMyshop;
