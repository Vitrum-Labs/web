"use client";

import Image from "next/image";
import type { FC } from "react";
import {
  FaArrowUp,
  FaCheck,
  FaClock,
  FaTimes,
} from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";

import type { UserProfileCardProps } from "./Profiletypes";

const UserProfileCard: FC<UserProfileCardProps> = ({
  name = "No wallet connected",
  reputationScore = 0,
  maxScore = 1000,
  reputationLevel = "NO DATA",
  walletAge = "No data",
  transactionCount = 0,
  isLoading = false,
}) => {
  const formatAddress = (address: string): string => {
    if (address === "No wallet connected") return address;
    if (address.length <= 20) return address;
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };
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
          <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-[#323232]">
            <Image
              src="/assets/logo/vitrum-logo-transparant.png"
              alt="Vitrum Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white mb-2 font-mono">
              {formatAddress(name)}
            </h1>
            <div
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                reputationLevel === "ELIGIBLE TO VOTE"
                  ? "bg-blue-900/30 border-blue-500/50 text-blue-300"
                  : "bg-red-900/30 border-red-500/50 text-red-300"
              }`}
              style={{
                border: "0.5px solid",
              }}
            >
              {reputationLevel === "ELIGIBLE TO VOTE" ? (
                <FaCheck className="w-2 h-2 text-blue-400 mr-2" />
              ) : (
                <FaTimes className="w-2 h-2 text-red-400 mr-2" />
              )}
              <span>{reputationLevel}</span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="flex items-center space-x-2 mb-2">
            <FaHeartPulse className="text-gray-400 w-4 h-4" />
            <span className="text-gray-400 text-sm">
              Onchain Reputation Score
            </span>
          </div>
          <div className="text-5xl font-bold text-white">
            {isLoading ? (
              <div className="animate-pulse">
                <div className="h-12 bg-gray-600 rounded w-32"></div>
              </div>
            ) : (
              <>
                {reputationScore}
                <span className="text-gray-400 text-2xl">/{maxScore}</span>
              </>
            )}
          </div>
        </div>

        <div className="text-right">
          <div className="flex items-center space-x-2 mb-2">
            <FaClock className="text-gray-400 w-4 h-4" />
            <span className="text-gray-400 text-sm">Wallet Age</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {isLoading ? (
              <div className="animate-pulse">
                <div className="h-6 bg-gray-600 rounded w-20"></div>
              </div>
            ) : (
              walletAge
            )}
          </div>
        </div>

        <div className="text-right">
          <div className="flex items-center space-x-2 mb-2">
            <FaArrowUp className="text-gray-400 w-4 h-4" />
            <span className="text-gray-400 text-sm">Transaction Count</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {isLoading ? (
              <div className="animate-pulse">
                <div className="h-6 bg-gray-600 rounded w-16"></div>
              </div>
            ) : (
              transactionCount.toLocaleString()
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
