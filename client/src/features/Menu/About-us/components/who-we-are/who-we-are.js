import React from "react";
import WhoWeAre1 from "../../../../../components/assets/aboutus-page/who-we-are/who-we-are-1.jpg";
import WhoWeAre2 from "../../../../../components/assets/aboutus-page/who-we-are/who-we-are-2.png";
import WhoWeAre3 from "../../../../../components/assets/aboutus-page/who-we-are/who-we-are-3.png";
import WhoWeAre4 from "../../../../../components/assets/aboutus-page/who-we-are/who-we-are-4.png";


function WhoWeAre() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* First Section */}
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="header">
                <h1 className="text-center title">WHO WE ARE</h1>
              </div>
              <div className="content-text">
                <p className="text-center">
                  We believe that the best way to bring change is to be the
                  change. We are a group of young people who are passionate
                  about technology and want to make a difference in the world.
                  We are a team of 5 people who have been working together for
                  the past 2 years. We want to make sure that everyone has
                  access to the best products and services and has an equal
                  chance to discover the amazingness of what they're capable of
                  - no matter who they are, where they are from or what looks
                  like. Our existence is to give you the confidence to be who
                  you want to be. We are here to help you find your own style
                  and be confident in it.
                </p>
              </div>
              <div className="content-image">
                <img src={WhoWeAre1} alt="who-we-are-1" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="d-flex justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="header">
                <h1 className="text-center title">Fashion Democracy</h1>
              </div>
              <div className="content-text">
                <h3 className="text-start mb-4">Choice for all</h3>
                <p className="text-justify">
                Our audience (AKA you) is wonderfully unique, and we do everything we can to help you find your fit. We offer our ASOS Brands in more than 30 sizes – and we're committed to providing all sizes at the same price – so you can be confident we’ve got the perfect thing for you.
                </p>  
              </div>
              <div className="content-image">
                <img src={WhoWeAre2} alt="who-we-are-2" className="image-vertical" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="content-text">
                <h3 className="text-start mb-4">Body positivity</h3>
                <p className="text-justify">
                It’s important for us to promote a healthy body image – we’re not about conforming to any stereotypes – so we work with more than 200 models to represent our audience. And we’re not in the business of digitally altering their appearance either… there’s no reshaping or removing stretch marks here. Our models are part of the ASOS family and we support them by following a Model Welfare Policy
                </p>  
              </div>
              <div className="content-image">
                <img src={WhoWeAre3} alt="who-we-are-3" className="image-vertical" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-6 mt-4">
              <div className="content-text">
                <h3 className="text-start mb-4">MyShop Marketing</h3>
                <p className="text-justify">
                You know that satisfying feeling when you stumble across an incredible vintage boutique, or uncover an amazing independent brand, before everyone else? Yeah, we love that too. That’s why we created MyShop Marketplace in 2010. The team seeks out the best fashion start-ups, so you can shop one-of-a-kind finds all the time. 
                </p>  
              </div>
              <div className="discover-shop mb-4">
                <a href="/our-shop" className="btn btn-discover-shop">
                  Visit MyShop
                </a>
              </div>
              <div className="content-image">
                <img src={WhoWeAre4} alt="who-we-are-4" className="image-vertical" />
              </div>
            </div>
          </div>

          {/* Button More */}
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <a href="/about" className="btn btn-more-about-us mt-4 mb-4">
                More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
