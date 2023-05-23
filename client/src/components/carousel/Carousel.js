import React from "react";
import test from "../../components/assets/landing-page/category-image/shoes-category-img.png";
function Carousel() {
  return (
    <div className="col-12 col-lg-12 col-md-12 mt-4">
      <div className="d-flex justify-content-center">
        <div className="carousel">
          <div className="d-flex justify-content-center">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <div className="d-flex justify-content-center">
                    <img src={test} className="carousel-img" alt="..." />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center">
                    <img src={test} className="carousel-img" alt="..." />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center">
                    <img src={test} className="carousel-img" alt="..." />
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Carousel;
