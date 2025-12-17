"use client";
import { JetBrains_Mono, Inter } from "next/font/google";
import {
  FaShieldAlt,
  FaVoteYea,
  FaThumbsUp,
  FaRobot,
  FaUsers,
  FaFilter,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

const mono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

interface Step {
  title: string;
  color: string;
  bg: string;
  icon: IconType;
}

const leftSteps: Step[] = [
  {
    title: "Generate Onchain Reputation",
    color: "text-blue-500",
    bg: "bg-gradient-to-br from-[#EAF2FF] via-[#F4F8FF] to-[#DEE9FF]",
    icon: FaShieldAlt,
  },
  {
    title: "Reputation Unlocks Voting Access",
    color: "text-blue-500",
    bg: "bg-gradient-to-br from-[#EAF2FF] via-[#F4F8FF] to-[#DEE9FF]",
    icon: FaVoteYea,
  },
  {
    title: "Vote Bullish or Bearish on CT",
    color: "text-blue-500",
    bg: "bg-gradient-to-br from-[#EAF2FF] via-[#F4F8FF] to-[#DEE9FF]",
    icon: FaThumbsUp,
  },
];

const rightSteps: Step[] = [
  {
    title: "Bot Wallets Are Filtered",
    color: "text-blue-500",
    bg: "bg-gradient-to-br from-[#EAF2FF] via-[#F4F8FF] to-[#DEE9FF]",
    icon: FaRobot,
  },
  {
    title: "Real Onchain Participant",
    color: "text-blue-500",
    bg: "bg-gradient-to-br from-[#EAF2FF] via-[#F4F8FF] to-[#DEE9FF]",
    icon: FaUsers,
  },
  {
    title: "Filtering Wallet bot to vote",
    color: "text-blue-500",
    bg: "bg-gradient-to-br from-[#EAF2FF] via-[#F4F8FF] to-[#DEE9FF]",
    icon: FaFilter,
  },
];

export default function HowItWorks() {
  return (
    <section
      className={`min-h-screen relative py-32 bg-gray-50 ${mono.className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl font-light text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            How Trust Earns a Voice
          </motion.h2>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Onchain activity builds reputation. Only trusted wallets can vote.
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.6 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="relative w-200 h-180 mb-15 rounded-[80px]"
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <div className="absolute inset-0 border border-dashed border-gray-300 rounded-[80px]" />
              <div
                className="absolute inset-0 border-2 border-blue-500 rounded-[80px] opacity-0 animate-border-highlight"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] gap-24 relative z-10">
            <div className="flex flex-col gap-10 items-end">
              {leftSteps.map((step, i) => (
                <Card key={i} step={step} align="right" index={i} side="left" />
              ))}
            </div>

            <CenterCard />

            <div className="flex flex-col gap-10 items-start">
              {rightSteps.map((step, i) => (
                <Card key={i} step={step} align="left" index={i} side="right" />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={`text-center mt-16 text-black text-2xl font-light ${inter.className}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          Vote{' '}
          <motion.span 
            className="inline-flex items-center text-lg py-1 px-3 rounded-lg border border-blue-500 text-blue-500 font-medium hover:bg-blue-600 hover:text-white transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Bullish
          </motion.span>{' '}
          or{' '}
          <motion.span 
            className="inline-flex items-center text-lg py-1 px-3 rounded-lg border border-red-500 text-red-500 font-medium hover:bg-red-600 hover:text-white transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Bearish
          </motion.span>{' '}
          for your Crypto Twitter.
        </motion.div>
      </div>
    </section>
  );
}

function Card({ step, align, index, side }: { step: Step; align: "left" | "right"; index: number; side: "left" | "right" }) {
  return (
    <motion.div 
      className="relative flex items-center gap-4"
      initial={{ opacity: 0, x: side === "left" ? -50 : 50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: 1.0 + (index * 0.15),
        ease: "easeOut"
      }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      {align === "right" && <Connector />}
      <motion.div 
        className="bg-white rounded-2xl px-5 py-4 duration-300 flex items-center gap-3 min-w-[280px]"
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center`}
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: 1.2 + (index * 0.15),
            type: "spring",
            stiffness: 200
          }}
        >
          <step.icon className={`w-6 h-6 ${step.color}`} />
        </motion.div>
        <span className="text-gray-800 font-medium text-sm">{step.title}</span>
      </motion.div>
      {align === "left" && <Connector />}
    </motion.div>
  );
}

function Connector() {
  return (
    <div className="relative w-14 h-px overflow-hidden">
      <div className="absolute inset-0 border-t border-dashed border-gray-300" />
      <div
        className="absolute inset-0 border-t-2 border-blue-500 opacity-0 animate-dash-highlight"
      />
    </div>
  );
}

function CenterCard() {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
    >
      <motion.div 
        className="bg-white rounded-[32px] p-8 w-[320px]"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="rounded-2xl h-48 mb-6 relative overflow-hidden"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <img
            src="/assets/landing/ct-images/jessepolak.jpg"
            alt="Jesse Polak"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div 
          className="space-y-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.8 }}
        >
          <div className="h-2 w-24 bg-gray-200 rounded" />
          <div className="h-2 w-40 bg-gray-200 rounded" />
        </motion.div>
        <motion.div 
          className="flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 2.0 }}
        >
          <motion.button 
            className="flex-1 py-3 rounded-xl bg-linear-to-b from-[#6F8FFF] via-[#5A7BFF] to-[#4A66F0] text-white font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(79,102,240,0.35)] hover:brightness-105 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Bullish
          </motion.button>
          <motion.button 
            className="flex-1 py-3 rounded-xl bg-linear-to-b from-[#FF6F6F] via-[#FF5A5A] to-[#F04A4A] text-white font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(240,74,74,0.35)] hover:brightness-105 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Bearish
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
