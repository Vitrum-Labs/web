"use client";

import { FC } from "react";
import { FaClock, FaHashtag } from "react-icons/fa";
import { StatsCardProps } from "./types";

const StatsCard: FC<StatsCardProps> = ({
  walletAge = "2.4 Years",
  txCount = 1248,
  nextTierProgress = 82,
}) => {
  return (
    <div className="border border-gray-700 rounded-xl p-6" style={{ backgroundColor: '#1F1F1F' }}>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <FaClock className="text-blue-400 w-4 h-4" />
            <span className="text-gray-400 text-sm">Wallet Age</span>
          </div>
          <div className="text-2xl font-bold text-white">{walletAge}</div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-2">
            <FaHashtag className="text-purple-400 w-4 h-4" />
            <span className="text-gray-400 text-sm">Tx Count</span>
          </div>
          <div className="text-2xl font-bold text-white">{txCount.toLocaleString()}</div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-sm">Next Tier Progress</span>
          <span className="text-gray-400 text-sm">{nextTierProgress}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${nextTierProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;