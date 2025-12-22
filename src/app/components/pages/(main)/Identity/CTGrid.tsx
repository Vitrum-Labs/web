"use client";

import { FC } from "react";
import CTCard from "./CTCard";
import { CTInfluencer } from "../../../../types/domain";

const CTGrid: FC = () => {
  const influencers: CTInfluencer[] = [
    {
      id: "1",
      name: "Daniel Ortega",
      image: "/assets/landing/ct-images/daniel-ortega.jpg",
      bullishPercentage: 65,
      bearishPercentage: 35,
      sentiment: "Bullish",
    },
    {
      id: "2",
      name: "Jesse Polak",
      image: "/assets/landing/ct-images/jessepolak.jpg",
      bullishPercentage: 72,
      bearishPercentage: 28,
      sentiment: "Bullish",
    },
    {
      id: "3",
      name: "Max",
      image: "/assets/landing/ct-images/max.jpg",
      bullishPercentage: 58,
      bearishPercentage: 42,
      sentiment: "Bullish",
    },
    {
      id: "4",
      name: "Tony",
      image: "/assets/landing/ct-images/tony.jpg",
      bullishPercentage: 45,
      bearishPercentage: 55,
      sentiment: "Bearish",
    },
    {
      id: "5",
      name: "Nett0",
      image: "/assets/landing/ct-images/nett0.jpg",
      bullishPercentage: 68,
      bearishPercentage: 32,
      sentiment: "Bullish",
    },
    {
      id: "6",
      name: "Tory Dom",
      image: "/assets/landing/ct-images/tory-dom.jpg",
      bullishPercentage: 61,
      bearishPercentage: 39,
      sentiment: "Bullish",
    },
  ];

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
