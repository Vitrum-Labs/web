"use client";

import { useRef } from "react";
import type { FC } from "react";
import { toPng } from "html-to-image";
import { useAccount } from "wagmi";
import Dither from "../../../ui/Dither";
import { useMintIdentity } from "@/lib/hooks/useMintIdentity";
import { useCheckIdentity } from "@/lib/hooks/useCheckIdentity";

interface NFTCardProps {
  reputationScore?: number;
  maxScore?: number;
  hasNFT?: boolean;
}

const NFTCard: FC<NFTCardProps> = ({
  reputationScore = 0,
  maxScore = 1000,
  hasNFT = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { address } = useAccount();
  const { hasIdentity } = useCheckIdentity(address);
  const { mintIdentity, isLoading, uploadProgress, error, txConfirmed } = useMintIdentity();

  const userHasNFT = hasNFT || hasIdentity;
  
  console.log('Debug NFT Card:', { hasNFT, hasIdentity, userHasNFT, address });

  const handleMintNFT = async () => {
    if (!cardRef.current || isLoading) return;

    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 2,
        filter: (node) => {
          return !node.classList?.contains('mint-button');
        }
      });

      const blob = await fetch(dataUrl).then(res => res.blob());
      const file = new File([blob], 'reputation-score.png', { type: 'image/png' });

      await mintIdentity({
        imageFile: file,
        score: reputationScore
      });
    } catch (error) {
      console.error('Error minting NFT:', error);
    }
  };
  const getButtonText = () => {
    if (uploadProgress === 'uploading-image') return 'Uploading Image...';
    if (uploadProgress === 'uploading-metadata') return 'Creating Metadata...';
    if (isLoading) return 'Minting...';
    if (txConfirmed) return 'NFT Minted!';
    return 'Mint NFT';
  };

  return (
    <div
      ref={cardRef}
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
            {reputationScore}
            <span className="text-white text-2xl">/{maxScore}</span>
          </div>
        </div>

        {!userHasNFT && !txConfirmed && (
          <button
            onClick={handleMintNFT}
            disabled={isLoading}
            className="mint-button cursor-pointer bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {getButtonText()}
          </button>
        )}
        
        {error && (
          <div className="text-red-400 text-sm mt-2 max-w-xs text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTCard;