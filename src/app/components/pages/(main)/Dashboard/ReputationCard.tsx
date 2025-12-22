"use client";

import { FC } from "react";
import { FaChartLine, FaClock, FaArrowTrendUp } from "react-icons/fa6";
import { ReputationCardProps } from "./types";

const ReputationCard: FC<ReputationCardProps> = ({
  score = 1000,
  maxScore = 1000,
  rank = "EXCELLENT",
  userPercentile = 12,
  walletAge = "2.4 Years",
  txCount = 1248,
  nextTierProgress = 82,
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
            <FaChartLine className="text-[#898989] w-4 h-4" />
            <span className="text-[#898989] text-sm font-medium">
              REPUTATION SCORE
            </span>
          </div>

          <div className="mb-6">
            <div className="text-5xl font-bold mb-4 text-white">
              {score}
              <span className="text-[#898989] text-xl font-normal">
                /{maxScore}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div
                className="flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "#434343",
                  borderColor: "#757575",
                  border: "0.5px solid #757575",
                }}
              >
                <div className="w-2 h-2 bg-[#FFFFFF] rounded-full"></div>
                <span className="text-[#FFFFFF]">{rank}</span>
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
            <div className="text-md font-bold text-white">{walletAge}</div>
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
              <FaArrowTrendUp
                className="w-3 h-3"
                style={{ color: "#898989" }}
              />
              <span className="text-gray-400 text-xs">Tx Count</span>
            </div>
            <div className="text-md font-bold text-white">
              {txCount.toLocaleString()}
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
