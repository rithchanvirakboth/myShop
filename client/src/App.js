import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Content from "./components/content/content";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <div className="sticky-top">
          <Navbar />
        </div>

        {/* Content */}
        <Content />

        {/* Jumbotron */}
        <Jumbotron />
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
