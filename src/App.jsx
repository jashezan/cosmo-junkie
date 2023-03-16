import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/css/App.min.css"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
