"use client";

import { FC } from "react";
import Image from "next/image";
import { FaChartLine, FaClock } from "react-icons/fa6";
import { UserProfileCardProps } from "./types";

const UserProfileCard: FC<UserProfileCardProps> = ({
  name = "Vitrum",
  reputationScore = 1000,
  maxScore = 1000,
  reputationLevel = "EXCELLENT REPUTATION",
  walletAge = "2.4 Years",
}) => {
  return (
    <div
      className="border rounded-xl p-8 mb-8"
      style={{
        backgroundColor: "#171717",
        borderColor: "#323232",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center border-2 border-gray-600">
            <Image
              src="/assets/logo/vitrum-logo-transparant.png"
              alt="Vitrum Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{name}</h1>
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "#434343",
                borderColor: "#757575",
                border: "0.5px solid #757575",
              }}
            >
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              <span className="text-white">{reputationLevel}</span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="flex items-center space-x-2 mb-2">
            <FaChartLine className="text-gray-400 w-4 h-4" />
            <span className="text-gray-400 text-sm">REPUTATION SCORE</span>
          </div>
          <div className="text-5xl font-bold text-white">
            {reputationScore}
            <span className="text-gray-400 text-2xl">/{maxScore}</span>
          </div>
        </div>

        <div className="text-right">
          <div className="flex items-center space-x-2 mb-2">
            <FaClock className="text-gray-400 w-4 h-4" />
            <span className="text-gray-400 text-sm">Wallet Age</span>
          </div>
          <div className="text-2xl font-bold text-white">{walletAge}</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
