import React from "react";
import { MENU_SECTION } from "../../shared/constant";
function MenuSeeMore() {
  return (
    <div className="menu-see-more">
      <div className="d-flex justify-content-center">
        {/* First section */}
        <div className="topSale col-12 col-lg-12 col-md-12">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 d-flex justify-content-between align-items-center">
              <div className="topSale-title">
                <h2 className="p-0 m-0">Top Sale</h2>
              </div>
              <div className="topSale-see-more">
                <a href="#" className="see-more-link">
                  See More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-chevron-double-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="menu col-12 col-lg-12 col-md-12 d-flex justify-content-between align-items-center">
              {MENU_SECTION.map((item, index) => {
                return (
                  item.TYPE !== "SEE_ALL" ? (
                  <div className="topSale-item mx-2" key={index}>

                    {/* Image */}
                    <div className="topSale-item-img d-flex justify-content-center">
                      <img src={item.IMAGE} alt="" className="menu-img" />
                    </div>

                    {/* Name & desc */}
                    <div className="topSale-item-name mx-4 mt-2">
                      <h4 className="p-0 mb-2">{item.TITLE}</h4>
                      <p className="p-0 mb-1">
                        {item.DESC || "no description"}
                      </p>

                      {/* Price */}
                      <div className="topSale-item-pricing mt-2">
                        <div className="d-flex justify-content-between">
                          <span className="p-0 m-0">{item.PRICE}</span>
                          {item.DISCOUNT === true ? (
                            <div className="topSale-item-discount">
                              {item.DISCOUNT_PRICE}
                            </div>
                          ) : (
                            <span className="p-0 m-0"></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  ) : (
                    <div className="topSale-item-see-all d-flex justify-content-center align-items-center">
                        {
                          item.TITLE  
                        }
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          className="bi bi-chevron-double-right see-more-icon"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>

        {/* Second section */}
      </div>
    </div>
  );
}

export default MenuSeeMore;

 {/* {
                      item.TYPE === "SEE_ALL" ? (
                        <div className="topSale-item-see-all">
                          <a href="#" className="see-all-link">
                            {
                              item.L
                            }
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="currentColor"
                              className="bi bi-chevron-double-right"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                              />
                              <path
                                fillRule="evenodd"
                                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                        </div>
                      ) : (
                        null 
                      )
                    } */}