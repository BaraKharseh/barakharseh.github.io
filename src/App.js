import React, { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import useDarkMode from "./hook/useDarkMode";

const App = () => {
  useDarkMode();
  return (
    <div className="bg-white dark:bg-black w-full transition duration-300 z-[-2]">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
