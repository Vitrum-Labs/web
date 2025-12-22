"use client";
import CT from "./CT";
import Footer from "./Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <CT />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default LandingPage;
