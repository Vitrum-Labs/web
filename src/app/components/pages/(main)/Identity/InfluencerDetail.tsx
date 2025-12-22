"use client";

import Image from "next/image";
import { type FC, useMemo, useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { toast } from "sonner";
import {
  FaArrowLeft,
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaUsers,
  FaRegCommentDots,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa6";
import type { CTInfluencer } from "../../../../types/domain";
import { useInfluencerDetail } from "../../../../../lib/hooks/useInfluencerDetail";
import { useVoteInfluencer } from "../../../../../lib/hooks/useVoteInfluencer";
import { useVoteOnInfluencer } from "../../../../../lib/hooks/useVoteOnInfluencer";
import { useInfluencerStats } from "../../../../../lib/hooks/useInfluencerStats";
import { useInfluencerReviews } from "../../../../../lib/hooks/useInfluencerReviews";
import Navbar from "../../../ui/Navbar";

interface InfluencerDetailProps {
  id: string;
}

const InfluencerDetail: FC<InfluencerDetailProps> = ({ id }) => {
  const { address } = useAccount();
  const [userVote, setUserVote] = useState<"Bullish" | "Bearish" | null>(null);
  const [comment, setComment] = useState("");
  const [showVoteForm, setShowVoteForm] = useState(false);
  const { influencer, isLoading, error } = useInfluencerDetail(id);
  const { submitVote: submitReview, isLoading: isReviewing, error: reviewError } = useVoteInfluencer();
  const { submitVote: submitVoteOnly, isLoading: isVoting, error: voteError, clearError: clearVoteError } = useVoteOnInfluencer();
  const { stats, isLoading: statsLoading, refetch: refetchStats } = useInfluencerStats(id);
  const { reviews, count: reviewCount, isLoading: reviewsLoading, refetch: refetchReviews } = useInfluencerReviews(id);

  useEffect(() => {
    if (voteError) {
      toast.error(voteError, {
        duration: 5000,
        style: {
          background: '#1f1f1f',
          border: '1px solid #ef4444',
          color: '#ffffff',
        },
      });
      clearVoteError();
    }
  }, [voteError, clearVoteError]);

  useEffect(() => {
    if (reviewError) {
      toast.error(reviewError, {
        duration: 5000,
        style: {
          background: '#1f1f1f',
          border: '1px solid #ef4444',
          color: '#ffffff',
        },
      });
    }
  }, [reviewError]);

  const ctInfluencer = useMemo(() => {
    if (!influencer) return null;
    
    const bullishPercentage = stats?.sentimentPercentage || 50;
    const bearishPercentage = 100 - bullishPercentage;
    
    return {
      id: influencer.id,
      name: influencer.name,
      image: influencer.profileImage,
      bullishPercentage,
      bearishPercentage,
      sentiment: bullishPercentage > 50 ? "Bullish" : "Bearish",
    } as CTInfluencer;
  }, [influencer, stats]);

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

  const handleVote = async (sentiment: "Bullish" | "Bearish") => {
    if (!address || !influencer) return;
    
    const success = await submitVoteOnly({
      influencerId: influencer.id,
      voterWalletAddress: address,
      voteType: sentiment.toLowerCase() as 'bullish' | 'bearish',
    });

    if (success) {
      toast.success(`Vote "${sentiment.toLowerCase()}" recorded successfully!`, {
        duration: 3000,
        style: {
          background: '#1f1f1f',
          border: '1px solid #22c55e',
          color: '#ffffff',
        },
      });
      refetchStats();
      refetchReviews();
    }
  };

  const handleAddReview = () => {
    setShowVoteForm(true);
  };

  const handleSubmitReview = async () => {
    if (!address || !influencer || !comment.trim()) return;

    const success = await submitReview({
      influencerId: influencer.id,
      reviewerWalletAddress: address,
      comment: comment.trim(),
    });

    if (success) {
      toast.success("Review submitted successfully!", {
        duration: 3000,
        style: {
          background: '#1f1f1f',
          border: '1px solid #22c55e',
          color: '#ffffff',
        },
      });
      setShowVoteForm(false);
      setComment("");
      refetchReviews();
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const bullishVotes = stats?.bullishVotes || 0;
  const bearishVotes = stats?.bearishVotes || 0;
  const totalVotes = stats?.totalVotes || 0;

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
                <FaUsers className="text-gray-400 w-5 h-5" />
                <span className="text-white font-medium">
                  {statsLoading ? "..." : `${totalVotes} Total Votes`}
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
                    onClick={() => handleVote("Bullish")}
                    disabled={isVoting || !address}
                    className="flex items-center space-x-2 px-4 py-2 bg-transparent border border-white rounded-lg text-white text-sm font-medium hover:bg-white hover:text-black transition-colors mb-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaArrowTrendUp className="w-4 h-4" />
                    <span>Vote Bullish</span>
                  </button>
                  <p className="text-white text-sm">
                    {statsLoading ? "..." : `${bullishVotes} votes`}
                  </p>
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
                    onClick={() => handleVote("Bearish")}
                    disabled={isVoting || !address}
                    className="flex items-center space-x-2 px-4 py-2 bg-transparent border border-white rounded-lg text-white text-sm font-medium hover:bg-white hover:text-black transition-colors mb-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaArrowTrendDown className="w-4 h-4" />
                    <span>Vote Bearish</span>
                  </button>
                  <p className="text-white text-sm">
                    {statsLoading ? "..." : `${bearishVotes} votes`}
                  </p>
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

        {showVoteForm && (
          <div
            className="mt-8 border rounded-xl p-6"
            style={{
              backgroundColor: "#171717",
              borderColor: "#323232",
            }}
          >
            <h2 className="text-xl font-bold text-white mb-6">
              Add Review for {influencer.name}
            </h2>


            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Your Review</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your thoughts about this influencer..."
                className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 resize-none"
                rows={3}
                maxLength={200}
              />
              <div className="text-sm text-gray-400 mt-1">
                {comment.length}/200
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowVoteForm(false)}
                className="cursor-pointer flex-1 bg-[#2a2a2a] border border-[#404040] text-white py-2 px-4 rounded-lg hover:bg-[#333333] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitReview}
                disabled={isReviewing || !comment.trim()}
                className="cursor-pointer flex-1 bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isReviewing ? "Submitting..." : "Submit Review"}
              </button>
            </div>
          </div>
        )}

        <div
          className="mt-8 border rounded-xl p-6"
          style={{
            backgroundColor: "#171717",
            borderColor: "#323232",
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Reviews</h2>
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm">
                {reviewsLoading ? "Loading..." : `${reviewCount} reviews`}
              </span>
              {address && !showVoteForm && (
                <button
                  onClick={handleAddReview}
                  className="cursor-pointer bg-white text-black px-3 py-1 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                >
                  Add Review
                </button>
              )}
            </div>
          </div>

          {reviewsLoading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse py-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-600 rounded mb-2 w-24"></div>
                      <div className="h-3 bg-gray-600 rounded w-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : reviews.length > 0 ? (
            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex items-start space-x-4 py-4 border-b border-gray-700 last:border-b-0"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm ${
                    review.sentiment === 'bullish' 
                      ? 'bg-gradient-to-br from-green-500 to-green-600' 
                      : 'bg-gradient-to-br from-red-500 to-red-600'
                  }`}>
                    {review.sentiment === 'bullish' ? '📈' : '📉'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-white font-medium">
                        {formatAddress(review.reviewerWalletAddress)}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                        review.sentiment === 'bullish'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {review.sentiment}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {formatDate(review.createdAt)}
                      </span>
                    </div>
                    <p className="text-gray-300">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400 py-8">
              No reviews yet. Be the first to vote!
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default InfluencerDetail;
