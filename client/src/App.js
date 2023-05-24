import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Loginpage from "./features/authentication/login-page/login-page";
import Registerpage from "./features/authentication/register-page/register-page";
import EmailVerify from "./features/authentication/email-verify/EmailVerify";
import Forgetpassword from "./features/authentication/forget-password/Forget-password";
import ResetPassword from "./features/authentication/reset-password/Reset-Password";
import TermsAndCondition from "./features/our-service/Terms-and-Condition/Terms-and-Condition";
import PolicyAndPrivacy from "./features/our-service/Policy-and-privacy/Policy-and-privacy";
import ContactUs from "./features/Menu/Contact-us/Contact-us";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Career from "./features/our-service/Career-with-us/Career-with-us";
import AboutUs from "./features/Menu/About-us/About-us";
import WhoWeAre from "./features/Menu/About-us/components/who-we-are/who-we-are";
import OurExperience from "./features/Menu/About-us/components/our-experience/our-experience";
import OurPartnership from "./features/Menu/About-us/components/our-partnership/our-partnership";
import HelpCenter from "./features/our-service/Help-Center/Help-center";
import Profile from "./features/profile/profile";
import ReturnRefund from "./features/Dropdown-menu/Return-and-refund/Return-and-refund";
import PaymentAndPricing from "./features/Dropdown-menu/Payment-and-pricing/Payment-and-pricing";
import Homepage from "./features/homepage/homepage";
import NotFound from "./components/Not-found/Not-Found";
import OurStore from "./features/our-store/our-store";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <div className="sticky-top">
          <Navbar />
        </div>

        {/* content */}
        <div className="content m-0">
          <Routes>
            {/* authentication */}
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<Registerpage />} />

            {/* Email verify */}
            <Route
              path="/user/activate/:activation_token"
              element={<EmailVerify />}
            />

            {/* Forget password */}
            <Route path="/forget-password" element={<Forgetpassword />} />

            {/* Reset Password */}
            <Route
              path="/user/reset/:access_token"
              element={<ResetPassword />}
            />
            {/* mainpage */}
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/our-store" element={<OurStore />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />

            {/* Service category */}
            <Route
              path="/terms-and-conditions"
              element={<TermsAndCondition />}
            />
            <Route path="/policy-and-privacy" element={<PolicyAndPrivacy />} />
            <Route path="/career" element={<Career />} />
            <Route path="/help-center" element={<HelpCenter />} />

            {/* Profile Dropdown */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/return-and-refund" element={<ReturnRefund />} />
            <Route
              path="/payment-and-pricing"
              element={<PaymentAndPricing />}
            />

            {/* Sub page */}
            <Route path="/about/who-we-are" element={<WhoWeAre />} />
            <Route path="/about/our-experience" element={<OurExperience />} />
            <Route path="/about/our-team" element={<OurPartnership />} />
          </Routes>
        </div>

        {/* Jumbotron */}
        <Jumbotron />
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
