import React from "react";
import "./App.css";
import HomePage from "./Pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/about/AboutPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
