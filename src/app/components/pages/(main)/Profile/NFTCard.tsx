"use client";

import type { FC } from "react";
import Dither from "../../../ui/Dither";

interface NFTCardProps {
  reputationScore?: number;
  maxScore?: number;
  onMintNFT?: () => void;
  isLoading?: boolean;
}

const NFTCard: FC<NFTCardProps> = ({
  reputationScore = 0,
  maxScore = 1000,
  onMintNFT,
  isLoading = false,
}) => {
  return (
    <div
      className="border rounded-3xl relative overflow-hidden w-full h-96"
      style={{
        borderColor: "#323232",
      }}
    >
      <div className="absolute inset-0">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <div className="text-center mb-8">
          <div className="text-lg font-bold text-white mb-2">
            Onchain Reputation Score
          </div>
          <div className="text-6xl font-bold">
            {isLoading ? (
              <div className="animate-pulse">
                <div className="h-16 bg-gray-600 rounded w-40 mx-auto"></div>
              </div>
            ) : (
              <>
                {reputationScore}
                <span className="text-white text-2xl">/{maxScore}</span>
              </>
            )}
          </div>
        </div>

        <button
          onClick={onMintNFT}
          disabled={isLoading}
          className="cursor-pointer bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Mint NFT
        </button>
      </div>
    </div>
  );
};

export default NFTCard;