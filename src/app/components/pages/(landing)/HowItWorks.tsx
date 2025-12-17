"use client";
import { JetBrains_Mono } from "next/font/google";
import {
  FaShieldAlt,
  FaVoteYea,
  FaThumbsUp,
  FaRobot,
  FaUsers,
  FaFilter,
} from "react-icons/fa";
import { IconType } from "react-icons";

const mono = JetBrains_Mono({ subsets: ["latin"] });

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
      className={`min-h-screen relative py-32 bg-[#f6f6f6] ${mono.className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            How Trust Earns a Voice
          </h2>
          <p className="text-gray-600">
            Onchain activity builds reputation. Only trusted wallets can vote.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[900px] h-[900px] rounded-[80px] border border-dashed border-gray-300" />
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] gap-24 relative z-10">
            <div className="flex flex-col gap-10 items-end">
              {leftSteps.map((step, i) => (
                <Card key={i} step={step} align="right" />
              ))}
            </div>

            <CenterCard />

            <div className="flex flex-col gap-10 items-start">
              {rightSteps.map((step, i) => (
                <Card key={i} step={step} align="left" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ step, align }: { step: Step; align: "left" | "right" }) {
  return (
    <div className="relative flex items-center gap-4">
      {align === "right" && <Connector />}
      <div className="bg-white rounded-2xl px-5 py-4 duration-300 flex items-center gap-3 min-w-[280px]">
        <div
          className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center`}
        >
          <step.icon className={`w-6 h-6 ${step.color}`} />
        </div>
        <span className="text-gray-800 font-medium text-sm">{step.title}</span>
      </div>
      {align === "left" && <Connector />}
    </div>
  );
}

function Connector() {
  return <div className="w-14 h-px border-t border-dashed border-gray-300" />;
}

function CenterCard() {
  return (
    <div className="relative">
      <div className="bg-white rounded-[32px] p-8 w-[320px]">
        <div className="rounded-2xl h-48 mb-6 relative overflow-hidden">
          <img
            src="/assets/landing/ct-images/jessepolak.jpg"
            alt="Jesse Polak"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-2 mb-6">
          <div className="h-2 w-24 bg-gray-200 rounded" />
          <div className="h-2 w-40 bg-gray-200 rounded" />
        </div>
        <div className="flex gap-3">
          <button
            className="flex-1 py-3 rounded-xl bg-gradient-to-b from-[#6F8FFF] via-[#5A7BFF] to-[#4A66F0] text-white font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(79,102,240,0.35)] hover:brightness-105 transition"
          >
            Bullish
          </button>
          <button
            className="flex-1 py-3 rounded-xl bg-linear-to-b from-[#FF6F6F] via-[#FF5A5A] to-[#F04A4A] text-white font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(240,74,74,0.35)] hover:brightness-105 transition"
          >
            Bearish
          </button>
        </div>
      </div>
    </div>
  );
}
