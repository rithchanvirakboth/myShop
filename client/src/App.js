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

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
      <div className="sticky-top">
          <Navbar />
        </div>

        {/* content */}
        <div className="content">
          <Routes>
            {/* authentication */}
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<Registerpage />} />

            {/* Email verify */}
            <Route path="/user/activate/:activation_token" element={<EmailVerify />} />
            
            {/* Forget password */}
            <Route path="/forget-password" element={<Forgetpassword />} />

            {/* Reset Password */}
            <Route path="/user/reset/:access_token" element={<ResetPassword />} />
            {/* mainpage */}
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
            <Route path="*" element={<h1>Not Found</h1>} />

            {/* Service category */}
            <Route path="/terms-and-condition" element={<TermsAndCondition />} />
            <Route path="/privacy-and-policy" element={<PolicyAndPrivacy />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
