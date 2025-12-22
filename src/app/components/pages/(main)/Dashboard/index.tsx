"use client";

import { FC } from "react";
import { FaSync } from "react-icons/fa";
import Navbar from "../../../ui/Navbar";
import ReputationCard from "./ReputationCard";
import VitrumIdentity from "./VitrumIdentity";
import ReputationGatedActions from "./ReputationGatedActions";
import { useReputationQuick } from "../../../../../lib/hooks";

const Dashboard: FC = () => {
  const { data: reputationData, isLoading, error, refetch } = useReputationQuick();

  const getRankFromScore = (score: number): string => {
    return score >= 100 ? "Eligible to Vote" : "Not Eligible to Vote";
  };

  const getUserPercentile = (score: number): number => {
    return Math.max(5, Math.min(95, 100 - Math.floor((score / 1000) * 100)));
  };

  const getNextTierProgress = (score: number): number => {
    const tiers = [0, 100, 200, 400, 600, 800, 1000];
    const currentTierIndex = tiers.findIndex(tier => score < tier) - 1;
    const currentTier = tiers[currentTierIndex] || 0;
    const nextTier = tiers[currentTierIndex + 1] || 1000;
    return Math.round(((score - currentTier) / (nextTier - currentTier)) * 100);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#151515" }}>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome back, User
            </h1>
            <p className="text-[#898989]">
              Manage your onchain identity and reputation
            </p>
          </div>
          
          <button
            onClick={refetch}
            disabled={isLoading}
            className="flex items-center space-x-2 px-4 py-2 bg-[#171717] border border-[#323232] rounded-lg text-white hover:bg-[#1a1a1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaSync className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Get Reputation</span>
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-300">
            {error}
          </div>
        )}

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
            <div className="lg:col-span-3 space-y-4">
              <ReputationCard
                score={reputationData?.score || 0}
                maxScore={1000}
                rank={reputationData ? getRankFromScore(reputationData.score) : "NO DATA"}
                userPercentile={reputationData ? getUserPercentile(reputationData.score) : 0}
                walletAge={reputationData ? `${reputationData.walletAge} days` : "No data"}
                txCount={reputationData?.totalTransactions || 0}
                nextTierProgress={reputationData ? getNextTierProgress(reputationData.score) : 0}
                isLoading={isLoading}
              />
              <ReputationGatedActions />
            </div>

            <div className="lg:col-span-2">
              <VitrumIdentity />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
