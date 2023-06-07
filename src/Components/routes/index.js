import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/index";

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Index;
