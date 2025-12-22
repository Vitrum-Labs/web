"use client";

import type { FC } from "react";
import type { CTInfluencer } from "../../../../types/domain";
import { useAllInfluencers, type Influencer } from "../../../../../lib/hooks/useAllInfluencers";
import CTCard from "./CTCard";

const CTGrid: FC = () => {
  const { influencers: apiInfluencers, isLoading, error } = useAllInfluencers();

  const mapToCtInfluencer = (influencer: Influencer): CTInfluencer => {
    const bullishPercentage = Math.floor(Math.random() * 40) + 50;
    const bearishPercentage = 100 - bullishPercentage;
    
    return {
      id: influencer.id,
      name: influencer.name,
      image: influencer.profileImage,
      bullishPercentage,
      bearishPercentage,
      sentiment: bullishPercentage > 50 ? "Bullish" : "Bearish",
    };
  };

  const influencers = apiInfluencers.map(mapToCtInfluencer);

  if (isLoading) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">
          Crypto Twitter Sentiment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-[#1a1a1a] rounded-xl p-6 animate-pulse">
              <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4"></div>
              <div className="h-4 bg-gray-600 rounded mb-2"></div>
              <div className="h-2 bg-gray-600 rounded mb-4"></div>
              <div className="h-8 bg-gray-600 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">
          Crypto Twitter Sentiment
        </h2>
        <div className="text-red-400 text-center py-8">
          Failed to load influencers: {error}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">
        Crypto Twitter Sentiment
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {influencers.map((influencer) => (
          <CTCard
            key={influencer.id}
            id={influencer.id}
            name={influencer.name}
            image={influencer.image}
            bullishPercentage={influencer.bullishPercentage}
            bearishPercentage={influencer.bearishPercentage}
            sentiment={influencer.sentiment}
          />
        ))}
      </div>

      <div className="flex items-center justify-center space-x-6 mt-8">
        <button className="text-white hover:text-gray-300 transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-1 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
        </div>

        <button className="text-white hover:text-gray-300 transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CTGrid;
