import React from "react";
import {Route, Routes } from "react-router-dom";

function Features() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="/content" element={<h1>Content</h1>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default Features;
