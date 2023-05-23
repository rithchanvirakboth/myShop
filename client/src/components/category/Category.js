import React from "react";
import shoesImg from "../../components/assets/landing-page/category-image/shoes-category-img.png";
import clothingImg from "../../components/assets/landing-page/category-image/Clothing-category-image.png";
import newArrivalImg from "../../components/assets/landing-page/category-image/New-arrival-category-img.png";
import topSaleImg from "../../components/assets/landing-page/category-image/top-sell-category-img.png";

function Category() {
  return (
    <div className="col-12 col-lg-12 col-md-12">
      <div className="category">
        <div className="d-flex justify-content-center">
          <div className="col-9 col-lg-9 col-md-12">
            <div className="row gap-2 d-flex justify-content-center">
              <div className="col-12 col-lg-2 col-md-4 mx-2">
                <div className="category-item-card">
                  <div className="category-item-img d-flex justify-content-center">
                    <img src={shoesImg} alt="shoes-img" className="shoes-img" />
                  </div>
                  <div className="category-item-name text-center">
                    <p>Shoes</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-2 col-md-4 mx-2">
                <div className="category-item-card">
                  <div className="category-item-img d-flex justify-content-center">
                    <img
                      src={clothingImg}
                      alt="shoes-img"
                      className="shoes-img"
                    />
                  </div>
                  <div className="category-item-name text-center">
                    <p>Clothing</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-2 col-md-4 mx-2">
                <div className="category-item-card">
                  <div className="category-item-img d-flex justify-content-center">
                    <img
                      src={topSaleImg}
                      alt="shoes-img"
                      className="shoes-img"
                    />
                  </div>
                  <div className="category-item-name text-center">
                    <p>Top Sale</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-2 col-md-4 mx-2">
                <div className="category-item-card">
                  <div className="category-item-img d-flex justify-content-center">
                    <img
                      src={newArrivalImg}
                      alt="shoes-img"
                      className="shoes-img"
                    />
                  </div>
                  <div className="category-item-name text-center">
                    <p>New Arrival</p>
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

export default Category;
