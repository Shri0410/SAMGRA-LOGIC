import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import FocusAreas from "./components/FocusAreas";
import Audience from "./components/Audience";
import Partners from "./components/Partners";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="App">
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
