import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FeaturedArticles from "./components/FeaturedArticles";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./styles/main.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedArticles />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
