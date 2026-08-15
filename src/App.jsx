import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import FocusAreas from "./components/FocusAreas";
import Audience from "./components/Audience";
import Partners from "./components/Partners";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import SEO from "./components/SEO";

function App() {

  return (
    <div className="App">
      <SEO />
      <Header />
      <Hero />
      <Mission />
      <FocusAreas />
      <Audience />
      <Partners />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
