import React from "react";
import maleCategory from "../../components/assets/our-store/Male-category.jpg";
import femaleCategory from "../../components/assets/our-store/Female-category.jpg";
import kidsCategory from "../../components/assets/our-store/Kid-category.jpg";
import accessoriesCategory from "../../components/assets/our-store/Acessories-category.jpg";

function OurStore() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="main-category col-12 col-lg-6 col-md-12 col-sm-12 p-0">
          <div className="male-category">
            <a href="/our-store/men-shop">
              <div className="category-image">
                <img src={maleCategory} alt="" className="category-img" />
                <div className="overlay"></div>
                <div className="category-text-male">MEN</div>
              </div>
            </a>
          </div>
        </div>
        <div className="main-category col-12 col-lg-6 col-md-12 col-sm-12 p-0">
          <div className="female-category">
            <a href="/our-store/women-shop">
              <div className="category-image">
                <img src={femaleCategory} alt="" className="category-img" />
                <div className="overlay"></div>
                <div className="category-text-female">WOMEN</div>
              </div>
            </a>
          </div>
        </div>
        <div className="main-category col-12 col-lg-6 col-md-12 col-sm-12 p-0">
          <div className="kid-category">
            <a href="/our-store/kids-shop">
              <div className="category-image">
                <img src={kidsCategory} alt="" className="category-img" />
                <div className="overlay"></div>
                <div className="category-text-kid">KIDS</div>
              </div>
            </a>
          </div>
        </div>
        <div className="main-category scol-12 col-lg-6 col-md-12 col-sm-12 p-0">
          <div className="accessories-category">
            <a href="/our-store/accessories-shop">
              <div className="category-image">
                <img src={accessoriesCategory} alt="" className="category-img" />
                <div className="overlay"></div>
                <div className="category-text-accessories">ACCESSORIES</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStore;
