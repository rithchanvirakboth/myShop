import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Loginpage from "./features/authentication/login-page/login-page";

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

            {/* mainpage */}
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
