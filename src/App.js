import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Carousel /> {/* Carousel added */}
      </main>
      <Footer />
    </>
  );
}

export default App;
