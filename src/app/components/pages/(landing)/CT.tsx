"use client";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
interface CTUser {
  name: string;
  image: string;
  verified: boolean;
}

interface CTProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const users: CTUser[] = [
  {
    name: "ArbitrumPlay",
    image: "/assets/landing/ct-images/arbitrum-play.jpg",
    verified: true,
  },
  {
    name: "BlazeAster",
    image: "/assets/landing/ct-images/blazeaster-meow.jpg",
    verified: false,
  },
  {
    name: "Daniel Ortega",
    image: "/assets/landing/ct-images/daniel-ortega.jpg",
    verified: true,
  },
  {
    name: "Jesse Polak",
    image: "/assets/landing/ct-images/jessepolak.jpg",
    verified: true,
  },
  { name: "Max", image: "/assets/landing/ct-images/max.jpg", verified: false },
  {
    name: "Nett0",
    image: "/assets/landing/ct-images/nett0.jpg",
    verified: true,
  },
  {
    name: "Tony",
    image: "/assets/landing/ct-images/tony.jpg",
    verified: false,
  },
  {
    name: "Tory Dom",
    image: "/assets/landing/ct-images/tory-dom.jpg",
    verified: true,
  },
  {
    name: "Vinyl",
    image: "/assets/landing/ct-images/vinyl.jpg",
    verified: false,
  },
  { name: "1", image: "/assets/landing/ct-images/1.jpg", verified: true },
  { name: "2", image: "/assets/landing/ct-images/2.jpg", verified: true },
  { name: "3", image: "/assets/landing/ct-images/3.jpg", verified: false },
  { name: "4", image: "/assets/landing/ct-images/4.jpg", verified: true },
  { name: "5", image: "/assets/landing/ct-images/5.jpg", verified: false },
  { name: "6", image: "/assets/landing/ct-images/6.jpg", verified: true },
  { name: "7", image: "/assets/landing/ct-images/7.jpg", verified: false },
];

const loopUsers = [...users, ...users];

const CT: React.FC<CTProps> = ({
  title = "A verification solution that works for your crypto ecosystem",
  subtitle = "Vitrum's onchain verification allows you to identify trusted crypto Twitter accounts quickly and transparently, making it easy to verify reputation and credibility in the Arbitrum ecosystem.",
  buttonText = "Verify All CT",
  onButtonClick,
}) => {
  return (
    <section
      className={`min-h-screen flex items-center justify-center bg-gray-50 ${inter.className}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-light text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="relative py-20 overflow-hidden flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url(/assets/landing/ct-images/circle-bg.png)",
            }}
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.8 }}
          />

          <motion.div
            className="flex items-center gap-6 w-max"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: "-50%", opacity: 1 }}
            viewport={{ once: true }}
            animate={{ x: "-50%" }}
            transition={{
              x: { duration: 20, ease: "linear", repeat: Infinity },
              opacity: { duration: 0.8, delay: 1.0 },
            }}
          >
            {loopUsers.map((user, index) => (
              <motion.div
                key={`${user.name}-${index}`}
                className="shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 1.2 + index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="relative">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover shadow-lg transition-shadow duration-300 hover:shadow-xl"
                  />
                  <motion.div
                    className={`absolute -top-1 -right-1 w-10 h-4 rounded-full flex items-center justify-center ${
                      user.verified ? "bg-green-500" : "bg-red-500"
                    }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 1.4 + index * 0.05,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    {user.verified ? (
                      // <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      //   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      // </svg>
                      <p className={`text-xs ${mono.className}`}>Bull</p>
                    ) : (
                      // <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      //   <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      // </svg>
                      <p className={`text-xs ${mono.className}`}>Bear</p>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <motion.button
            onClick={onButtonClick}
            className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CT;
