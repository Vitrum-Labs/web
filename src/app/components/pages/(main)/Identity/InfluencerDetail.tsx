"use client";

import { FC, useState, useMemo } from "react";
import Image from "next/image";
import Navbar from "../../../ui/Navbar";
import { CTInfluencer } from "../../../../types/domain";
import { FaChartBar, FaArrowTrendUp, FaArrowTrendDown, FaThumbsUp, FaThumbsDown, FaRegCommentDots } from "react-icons/fa6";

interface InfluencerDetailProps {
  id: string;
}

const InfluencerDetail: FC<InfluencerDetailProps> = ({ id }) => {
  const [userVote, setUserVote] = useState<"Bullish" | "Bearish" | null>(null);
  
  const influencers: CTInfluencer[] = [
    {
      id: "1",
      name: "Daniel Ortega",
      image: "/assets/landing/ct-images/daniel-ortega.jpg",
      bullishPercentage: 65,
      bearishPercentage: 35,
      sentiment: "Bullish"
    },
    {
      id: "2", 
      name: "Jesse Polak",
      image: "/assets/landing/ct-images/jessepolak.jpg",
      bullishPercentage: 72,
      bearishPercentage: 28,
      sentiment: "Bullish"
    },
    {
      id: "3",
      name: "Max",
      image: "/assets/landing/ct-images/max.jpg",
      bullishPercentage: 58,
      bearishPercentage: 42,
      sentiment: "Bullish"
    },
    {
      id: "4",
      name: "Tony",
      image: "/assets/landing/ct-images/tony.jpg",
      bullishPercentage: 45,
      bearishPercentage: 55,
      sentiment: "Bearish"
    },
    {
      id: "5",
      name: "Nett0",
      image: "/assets/landing/ct-images/nett0.jpg",
      bullishPercentage: 68,
      bearishPercentage: 32,
      sentiment: "Bullish"
    },
    {
      id: "6",
      name: "Tory Dom",
      image: "/assets/landing/ct-images/tory-dom.jpg",
      bullishPercentage: 61,
      bearishPercentage: 39,
      sentiment: "Bullish"
    }
  ];

  const influencer = useMemo(() => {
    return influencers.find(inf => inf.id === id) || influencers[0];
  }, [id, influencers]);
  
  const bullishVotes = Math.round((influencer.bullishPercentage / 100) * 1980);
  const bearishVotes = Math.round((influencer.bearishPercentage / 100) * 1980);
  const totalVotes = bullishVotes + bearishVotes;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#151515' }}>
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            className="border rounded-xl p-8"
            style={{
              backgroundColor: '#171717',
              borderColor: '#323232'
            }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600">
                <Image
                  src={influencer.image}
                  alt={influencer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{influencer.name}</h1>
                <p className="text-gray-400">@{influencer.name.toLowerCase().replace(/\s+/g, '')}</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
              est laborum.
            </p>
          </div>

          <div className="space-y-4">
            <div 
              className="border rounded-xl p-6"
              style={{
                backgroundColor: 'transparent',
                borderColor: '#323232'
              }}
            >
              <div className="flex items-center space-x-2">
                <FaChartBar className="text-gray-400 w-5 h-5" />
                <span className="text-white font-medium">{totalVotes} Total Votes</span>
              </div>
            </div>

            <div 
              className="border rounded-xl p-8 relative overflow-hidden"
              style={{
                backgroundColor: '#0F3F2F',
                borderColor: '#2F5F3F'
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-6xl font-bold text-white mb-2">
                    {influencer.bullishPercentage}% <span className="text-2xl">Bullish</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <button
                    onClick={() => setUserVote("Bullish")}
                    className="flex items-center space-x-2 px-4 py-2 bg-transparent border border-white rounded-lg text-white text-sm font-medium hover:bg-white hover:text-black transition-colors mb-2"
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
                backgroundColor: '#3F1F1F',
                borderColor: '#5F2F2F'
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <button
                    onClick={() => setUserVote("Bearish")}
                    className="flex items-center space-x-2 px-4 py-2 bg-transparent border border-white rounded-lg text-white text-sm font-medium hover:bg-white hover:text-black transition-colors mb-2"
                  >
                    <FaArrowTrendDown className="w-4 h-4" />
                    <span>Vote Bearish</span>
                  </button>
                </div>
                
                <div className="text-right">
                  <div className="text-6xl font-bold text-white mb-2">
                    {influencer.bearishPercentage}% <span className="text-2xl">Bearish</span>
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
            backgroundColor: '#171717',
            borderColor: '#323232'
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
              <div key={i} className="flex items-start space-x-4 py-4 border-b border-gray-700 last:border-b-0">
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