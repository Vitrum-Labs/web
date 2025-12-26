"use client";

import type { FC } from "react";
import type { NFTGridProps } from "./Profiletypes";
import NFTCard from "./NFTCard";
import { useReputationQuick } from "../../../../../lib/hooks/useReputationQuick";

const NFTGrid: FC<NFTGridProps> = ({ nftCount = 1, hasNFT }) => {
  const { data: reputationData, isLoading, error } = useReputationQuick();

  return (
    <div
      className="border rounded-xl p-6"
      style={{
        backgroundColor: "#171717",
        borderColor: "#323232",
      }}
    >
      <h2 className="text-2xl font-medium font-mono text-white mb-6 flex items-center justify-center">
        Onchain Reputation Score NFT
      </h2>

      <div className="flex justify-center">
        <div className="max-w-md w-full">
          <NFTCard
            reputationScore={reputationData?.score || 0}
            maxScore={1000}
            hasNFT={hasNFT}
          />
        </div>
      </div>
    </div>
  );
};

export default NFTGrid;
