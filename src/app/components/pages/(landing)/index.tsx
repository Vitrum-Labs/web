"use client";
import Hero from "./Hero";
import CT from "./CT";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";

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
