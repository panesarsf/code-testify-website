import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/global.css";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
