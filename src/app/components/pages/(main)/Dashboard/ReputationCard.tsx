"use client";

import type { FC } from "react";
import {
  FaArrowUp,
  FaCheck,
  FaClock,
  FaTimes,
} from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import type { ReputationCardProps } from "./types";

const ReputationCard: FC<ReputationCardProps> = ({
  score = 0,
  maxScore = 1000,
  rank = "NO DATA",
  userPercentile = 0,
  walletAge = "No data",
  txCount = 0,
  nextTierProgress = 0,
  isLoading = false,
}) => {
  return (
    <div
      className="border rounded-3xl p-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1F1F1F 0%, #171717 50%, #0F0F0F 100%)",
        borderColor: "#323232",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="flex items-center space-x-2 mb-6">
            <FaHeartPulse className="text-[#898989] w-4 h-4" />
            <span className="text-[#898989] text-md font-medium">
              Onchain Reputation Score
            </span>
          </div>

          <div className="mb-6">
            <div className="text-5xl font-bold mb-4 text-white">
              {isLoading ? (
                <div className="animate-pulse">
                  <div className="h-12 bg-gray-600 rounded w-32"></div>
                </div>
              ) : (
                <>
                  {score}
                  <span className="text-[#898989] text-xl font-normal">
                    /{maxScore}
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center space-x-3">
              <div
                className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
                  rank === "Eligible to Vote"
                    ? "bg-blue-900/30 border-blue-500/50 text-blue-300"
                    : "bg-red-900/30 border-red-500/50 text-red-300"
                }`}
                style={{
                  border: "0.5px solid",
                }}
              >
                {rank === "Eligible to Vote" ? (
                  <FaCheck className="w-3 h-3 text-blue-400" />
                ) : (
                  <FaTimes className="w-3 h-3 text-red-400" />
                )}
                <span>{rank}</span>
              </div>
              <span className="text-[#898989] text-sm">
                Top {userPercentile}% of users
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <div
            className="p-4 rounded-lg border"
            style={{
              backgroundColor: "#161616",
              borderColor: "#323232",
              borderWidth: "1px",
            }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <FaClock className="w-3 h-3" style={{ color: "#898989" }} />
              <span className="text-gray-400 text-xs">Wallet Age</span>
            </div>
            <div className="text-md font-bold text-white">
              {isLoading ? (
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-600 rounded w-16"></div>
                </div>
              ) : (
                walletAge
              )}
            </div>
          </div>

          <div
            className="p-4 rounded-lg border"
            style={{
              backgroundColor: "#161616",
              borderColor: "#323232",
              borderWidth: "1px",
            }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <FaArrowUp className="w-3 h-3" style={{ color: "#898989" }} />
              <span className="text-gray-400 text-xs">Tx Count</span>
            </div>
            <div className="text-md font-bold text-white">
              {isLoading ? (
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-600 rounded w-12"></div>
                </div>
              ) : (
                txCount.toLocaleString()
              )}
            </div>
          </div>

          <div
            className="p-4 rounded-lg border col-span-2"
            style={{
              backgroundColor: "#161616",
              borderColor: "#323232",
              borderWidth: "1px",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm">Next Tier Progress</span>
              <span className="text-white text-lg font-bold">
                {nextTierProgress}%
              </span>
            </div>
            <div
              className="w-full rounded-full h-2"
              style={{ backgroundColor: "#2A2A2A" }}
            >
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${nextTierProgress}%`,
                  backgroundColor: "#BABABA",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReputationCard;
