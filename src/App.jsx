import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import OurOfferings from "./components/OurOfferings";
import IITCertifications from "./components/IITCertifications";
import Certification from "./components/certification";

export default function App() {
  return (
    <div>
      <Header />

      <Hero />
      <OurOfferings />
      <IITCertifications />
      <Certification/>
      <Footer />
    </div>
  );
}
