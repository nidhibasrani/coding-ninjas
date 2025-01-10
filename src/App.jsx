import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import OurOfferings from "./components/OurOfferings";
import IITCertifications from "./components/IITCertifications";
import Certification from "./components/certification";
import Profilecards from "./components/Profilecards";
import MockInterview from "./components/MockInterview";
import Profile from "./components/Profile";
export default function App() {
  return (
    <div>
      <Header />

      <Hero />
      <div className="w-2/3 mb-20  mx-auto">
        <OurOfferings />
      </div>

      <IITCertifications />
      <MockInterview />
      <Profile />
      <Certification />
      <Footer />
    </div>
  );
}
