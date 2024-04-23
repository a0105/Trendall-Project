import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import BasicSearch from "./pages/BasicSearch";
import AdvancedSearch from "./pages/AdvancedSearch";
import Search from "./pages/Search"; 
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/basic" element={<BasicSearch />} />
          <Route path="/advanced" element={<AdvancedSearch />} />
          <Route path="/search" element={<Search />} />{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
