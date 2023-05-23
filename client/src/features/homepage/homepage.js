import React from "react";
import LandingPage from "../../components/landing-page/landing-page";
import Category from "../../components/category/Category";
import Carousel from "../../components/carousel/Carousel";
import MenuSeeMore from "../../components/menu-see-more/menu-see-more";
import MoreFromMyshop from "../../components/more-from-myshop/more-from-myshop";
import JoinUs from "../../components/join-us-now/Join-us";

function Homepage() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Landing page */}
        <LandingPage /> 

        {/* CATEGORY SECTION */}
        <Category />

        {/* CAROUSEL */}
        <Carousel />

        {/* menu-see-more */}
        <MenuSeeMore />

        {/* More from myShop */}
        <MoreFromMyshop />

        {/* About Us and Join us now */}
        <JoinUs />
        
      </div>
    </div>
  );
}

export default Homepage;


