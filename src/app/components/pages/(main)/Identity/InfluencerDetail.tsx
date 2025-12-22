"use client";

import Image from "next/image";
import { type FC, useMemo, useState } from "react";
import {
  FaArrowLeft,
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaChartBar,
  FaRegCommentDots,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa6";
import type { CTInfluencer } from "../../../../types/domain";
import { useInfluencerDetail } from "../../../../../lib/hooks/useInfluencerDetail";
import Navbar from "../../../ui/Navbar";

interface InfluencerDetailProps {
  id: string;
}

const InfluencerDetail: FC<InfluencerDetailProps> = ({ id }) => {
  const [userVote, setUserVote] = useState<"Bullish" | "Bearish" | null>(null);
  const { influencer, isLoading, error } = useInfluencerDetail(id);

  const ctInfluencer = useMemo(() => {
    if (!influencer) return null;
    const bullishPercentage = Math.floor(Math.random() * 40) + 50;
    const bearishPercentage = 100 - bullishPercentage;
    
    return {
      id: influencer.id,
      name: influencer.name,
      image: influencer.profileImage,
      bullishPercentage,
      bearishPercentage,
      sentiment: bullishPercentage > 50 ? "Bullish" : "Bearish",
    } as CTInfluencer;
  }, [influencer]);

  if (isLoading || !influencer || !ctInfluencer) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#151515" }}>
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-600 rounded mb-4 w-32"></div>
            <div className="h-64 bg-gray-600 rounded mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-600 rounded"></div>
              <div className="h-4 bg-gray-600 rounded"></div>
              <div className="h-4 bg-gray-600 rounded w-3/4"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const bullishVotes = Math.round((ctInfluencer.bullishPercentage / 100) * 1980);
  const bearishVotes = Math.round((ctInfluencer.bearishPercentage / 100) * 1980);
  const totalVotes = bullishVotes + bearishVotes;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#151515" }}>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <button
          onClick={() => window.history.back()}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-6 cursor-pointer"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className="border rounded-xl p-8"
            style={{
              backgroundColor: "#171717",
              borderColor: "#323232",
            }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600">
                <Image
                  src={influencer.profileImage}
                  alt={influencer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  {influencer.name}
                </h1>
                <p className="text-gray-400">
                  {influencer.walletAddress.slice(0, 6)}...{influencer.walletAddress.slice(-4)}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed">
                {influencer.bio}
              </p>
            </div>

            {Object.keys(influencer.socialLinks).length > 0 && (
              <div className="mb-6">
                <h3 className="text-white font-medium mb-3">Social Links</h3>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(influencer.socialLinks).map(([platform, link]) => (
                    <a
                      key={platform}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer bg-[#2a2a2a] text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-[#333333] transition-colors capitalize"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>Total Reviews</span>
                <span>{influencer.totalReviews}</span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="space-y-4">
            <div
              className="border rounded-xl p-6"
              style={{
                backgroundColor: "transparent",
                borderColor: "#323232",
              }}
            >
              <div className="flex items-center space-x-2">
                <FaChartBar className="text-gray-400 w-5 h-5" />
                <span className="text-white font-medium">
                  {totalVotes} Total Votes
                </span>
              </div>
            </div>

            <div
              className="border rounded-xl p-8 relative overflow-hidden"
              style={{
                backgroundColor: "#0F3F2F",
                borderColor: "#2F5F3F",
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-6xl font-bold text-white mb-2">
                    {ctInfluencer.bullishPercentage}%{" "}
                    <span className="text-2xl">Bullish</span>
                  </div>
                </div>

                <div className="text-right">
                  <button
                    onClick={() => setUserVote("Bullish")}
                    className="flex items-center space-x-2 px-4 py-2 bg-transparent border border-white rounded-lg text-white text-sm font-medium hover:bg-white hover:text-black transition-colors mb-2 cursor-pointer"
                  >
                    <FaArrowTrendUp className="w-4 h-4" />
                    <span>Vote Bullish</span>
                  </button>
                  <p className="text-white text-sm">{bullishVotes} votes</p>
                </div>
              </div>

              <div className="absolute -top-8 -left-8 opacity-10">
                <Image
                  src="/assets/logo/bull-logo.png"
                  alt="Bull"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>

            <div
              className="border rounded-xl p-8 relative overflow-hidden"
              style={{
                backgroundColor: "#3F1F1F",
                borderColor: "#5F2F2F",
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <button
                    onClick={() => setUserVote("Bearish")}
                    className="flex items-center space-x-2 px-4 py-2 bg-transparent border border-white rounded-lg text-white text-sm font-medium hover:bg-white hover:text-black transition-colors mb-2 cursor-pointer"
                  >
                    <FaArrowTrendDown className="w-4 h-4" />
                    <span>Vote Bearish</span>
                  </button>
                </div>

                <div className="text-right">
                  <div className="text-6xl font-bold text-white mb-2">
                    {ctInfluencer.bearishPercentage}%{" "}
                    <span className="text-2xl">Bearish</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 opacity-10">
                <Image
                  src="/assets/logo/bear-logo.png"
                  alt="Bear"
                  width={200}
                  height={200}
                  className="object-contain transform scale-x-[-1]"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-8 border rounded-xl p-6"
          style={{
            backgroundColor: "#171717",
            borderColor: "#323232",
          }}
        >
          <h2 className="text-xl font-bold text-white mb-6">Review user</h2>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
            />
          </div>

          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex items-start space-x-4 py-4 border-b border-gray-700 last:border-b-0"
              >
                <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                <div className="flex-1">
                  <span className="text-white font-medium">user {i}</span>
                  <p className="text-gray-400 my-2">i like thiss</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-white">
                      <FaThumbsUp className="w-3 h-3" />
                      <span>3</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-white">
                      <FaThumbsDown className="w-3 h-3" />
                      <span>0</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-white">
                      <FaRegCommentDots className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default InfluencerDetail;
