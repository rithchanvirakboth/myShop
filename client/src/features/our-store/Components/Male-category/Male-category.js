import React from "react";
import nikeShoes from "../../../../components/assets/landing-page/category-image/shoes-category-img.png";
function MaleCategory() {
  return (
    <div className="container">
      <div className="header-section">
        <div className="col-12 col-lg-9 col-md-12">
          <h3>
            MEN's SUMMER SHORTS SALE: UP TO 50% OFF SELECT STYLES + FREE
            SHIPPING WHEN LOGGED IN.
          </h3>
          <span className="desc">
            For a new account, you will receive a 30% discount on your first
            order. Applying code: <strong>IAMNEW</strong> to get discount.
          </span>
        </div>
      </div>
      {/* show result and filter */}
      <div className="header-shop">
        <div className="row">
          {/* description */}
          <div className="col-md-10">
            <div className="d-none d-lg-block d-md-block">
              <span className="show-result">Showing 1-9 of 48 results</span>
            </div>
          </div>

          {/* filter */}
          <div className="col-12 col-lg-2 col-md-12">
            <div className="filter">filter</div>
          </div>

          <div className="col-12 mt-4">
            <div className="d-block d-lg-none d-md-none">
              <span className="show-result">Showing 1-9 of 48 results</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-12 col-md-12">
        <div className="row p-0">
          <div className="col-12 col-lg-3 col-md-6">
            <div className="product-card">
              <div className="d-flex justify-content-center">
                <div className="product-image">
                  <img src={nikeShoes} alt="product" className="product-img" />
                </div>
              </div>
              <div className="product-info">
                <div className="product-name">
                  <span className="name">Nike Air Max 270 React</span>
                </div>
                <div className="product-price">
                  <p className="price">$150.000</p>
                </div>
              </div>
              <div className="button mx-2">
                <div className="d-flex justify-content-between">
                  <a href="/product-detail" className="add-to-cart-btn">
                    Add to cart
                  </a>

                  <a href="/product-detail" className="view-detail-btn">
                    View detail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="product-card">
              <div className="d-flex justify-content-center">
                <div className="product-image">
                  <img src={nikeShoes} alt="product" className="product-img" />
                </div>
              </div>
              <div className="product-info">
                <div className="product-name">
                  <span className="name">Nike Air Max 270 React</span>
                </div>
                <div className="product-price">
                  <p className="price">$150.000</p>
                </div>
              </div>
              <div className="button mx-2">
                <div className="d-flex justify-content-between">
                  <a href="/product-detail" className="add-to-cart-btn">
                    Add to cart
                  </a>

                  <a href="/product-detail" className="view-detail-btn">
                    View detail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="product-card">
              <div className="d-flex justify-content-center">
                <div className="product-image">
                  <img src={nikeShoes} alt="product" className="product-img" />
                </div>
              </div>
              <div className="product-info">
                <div className="product-name">
                  <span className="name">Nike Air Max 270 React</span>
                </div>
                <div className="product-price">
                  <p className="price">$150.000</p>
                </div>
              </div>
              <div className="button mx-2">
                <div className="d-flex justify-content-between">
                  <a href="/product-detail" className="add-to-cart-btn">
                    Add to cart
                  </a>

                  <a href="/product-detail" className="view-detail-btn">
                    View detail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="product-card">
              <div className="d-flex justify-content-center">
                <div className="product-image">
                  <img src={nikeShoes} alt="product" className="product-img" />
                </div>
              </div>
              <div className="product-info">
                <div className="product-name">
                  <span className="name">Nike Air Max 270 React</span>
                </div>
                <div className="product-price">
                  <p className="price">$150.000</p>
                </div>
              </div>
              <div className="button mx-2">
                <div className="d-flex justify-content-between">
                  <a href="/product-detail" className="add-to-cart-btn">
                    Add to cart
                  </a>

                  <a href="/product-detail" className="view-detail-btn">
                    View detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaleCategory;
