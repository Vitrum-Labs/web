import { useState, useEffect } from 'react';

export interface InfluencerReview {
  id: string;
  influencerId: string;
  reviewerWalletAddress: string;
  sentiment: 'bullish' | 'bearish';
  comment: string;
  createdAt: number;
}

interface InfluencerReviewsResponse {
  success: boolean;
  data: InfluencerReview[];
  count: number;
}

export function useInfluencerReviews(influencerId: string) {
  const [reviews, setReviews] = useState<InfluencerReview[]>([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/review/influencer/${influencerId}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          setReviews([]);
          setCount(0);
          return;
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result: InfluencerReviewsResponse = await response.json();
      
      if (result.success) {
        setReviews(result.data);
        setCount(result.count);
      } else {
        setReviews([]);
        setCount(0);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch influencer reviews';
      setError(errorMessage);
      console.error('Fetch influencer reviews error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (influencerId) {
      fetchReviews();
    }
  }, [influencerId]);

  return {
    reviews,
    count,
    isLoading,
    error,
    refetch: fetchReviews,
  };
}