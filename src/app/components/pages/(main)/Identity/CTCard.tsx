"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { CTCardProps } from "./types";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const CTCard: FC<CTCardProps> = ({
  id,
  name,
  image,
  bullishPercentage,
  bearishPercentage,
  sentiment,
}) => {
  const [userVote, setUserVote] = useState<"Bullish" | "Bearish" | null>(null);

  const handleVote = (vote: "Bullish" | "Bearish") => {
    setUserVote(vote);
  };

  return (
    <div
      className="border rounded-xl p-6 relative overflow-hidden group hover:border-gray-600 transition-colors"
      style={{
        background:
          "linear-gradient(135deg, #1F1F1F 0%, #171717 50%, #0F0F0F 100%)",
        borderColor: "#323232",
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-600">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
        </div>

        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-white">{name}</h3>
        </div>

        <div className="mb-4">
          <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
            <div className="flex h-2 rounded-full overflow-hidden">
              <div
                className="bg-green-500 transition-all duration-300"
                style={{ width: `${bullishPercentage}%` }}
              ></div>
              <div
                className="bg-red-500 transition-all duration-300"
                style={{ width: `${bearishPercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="flex justify-between text-xs text-gray-400">
            <span>{bullishPercentage}% Bullish</span>
            <span>{bearishPercentage}% Bearish</span>
          </div>
        </div>

        <button
          onClick={() => (window.location.href = `/app/identity/${id}`)}
          className="w-full py-2 px-3 rounded-lg text-sm font-medium bg-white text-black hover:bg-gray-200 transition-colors cursor-pointer"
        >
          View Details
        </button>
      </div>

      <div className="absolute top-4 right-4">
        <div
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            sentiment === "Bullish"
              ? "bg-green-900/50 text-green-400 border border-green-700"
              : "bg-red-900/50 text-red-400 border border-red-700"
          }`}
        >
          {sentiment}
        </div>
      </div>
    </div>
  );
};

export default CTCard;
