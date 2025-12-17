"use client";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

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
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-white text-sm mb-4 tracking-wide uppercase opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Don't trust Crypto Twitter, Verify.
          </motion.p>
          <motion.h1 
            className="text-5xl md:text-6xl font-light text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {title.split(" ").map((word, index) =>
              index === title.split(" ").length - 1 ? (
                <motion.span 
                  key={index} 
                  className="italic"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                >
                  {word}
                </motion.span>
              ) : (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                >
                  {word}{" "}
                </motion.span>
              )
            )}
          </motion.h1>
          <motion.p 
            className="text-white text-lg max-w-2xl mx-auto mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
        <motion.button
          onClick={onButtonClick}
          className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
