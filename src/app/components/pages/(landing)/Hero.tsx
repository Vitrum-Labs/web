"use client";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title = "The Onchain Identity & Reputation on Arbitrum",
  subtitle = "We help you grow your onchain reputation through transparent blockchain-based activities on the Arbitrum network.",
  buttonText = "Get Started",
  onButtonClick,
}) => {
  return (
    <section
      className={`min-h-screen bg-cover bg-center bg-no-repeat flex items-end justify-center pb-24 ${inter.className}`}
      style={{ backgroundImage: "url(/assets/landing/hero/bg-hero.png)" }}
    >
      <div className="text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-white text-sm mb-4 tracking-wide uppercase opacity-80">
            Don't trust Crypto Twitter, Verify.
          </p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
            {title.split(" ").map((word, index) =>
              index === title.split(" ").length - 1 ? (
                <span key={index} className="italic">
                  {word}
                </span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h1>
          <p className="text-white text-lg max-w-2xl mx-auto mb-8 opacity-90">
            {subtitle}
          </p>
        </div>
        <button
          onClick={onButtonClick}
          className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default Hero;
