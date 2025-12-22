"use client";

import type { FC } from "react";
import { useAccount } from "wagmi";
import { useReputationQuick, useHasIdentity } from "../../../../../lib/hooks";
import Navbar from "../../../ui/Navbar";
import NFTGrid from "./NFTGrid";
import UserProfileCard from "./UserProfileCard";

const Profile: FC = () => {
  const { address } = useAccount();
  const { data: reputationData, isLoading, error } = useReputationQuick();
  const { data: hasNFT } = useHasIdentity();

  const getRankFromScore = (score: number): string => {
    return score >= 100 ? "ELIGIBLE TO VOTE" : "NOT ELIGIBLE TO VOTE";
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#151515" }}>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-300">
            {error}
          </div>
        )}

        <UserProfileCard
          name={address || "No wallet connected"}
          reputationScore={reputationData?.score || 0}
          maxScore={1000}
          reputationLevel={
            reputationData ? getRankFromScore(reputationData.score) : "NO DATA"
          }
          walletAge={
            reputationData ? `${reputationData.walletAge} days` : "No data"
          }
          transactionCount={reputationData?.totalTransactions || 0}
          isLoading={isLoading}
        />
        <NFTGrid hasNFT={hasNFT as boolean} />
      </main>
    </div>
  );
};

export default Profile;
