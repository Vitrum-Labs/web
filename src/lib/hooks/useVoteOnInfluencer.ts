import { useState } from 'react';

interface VoteData {
  influencerId: string;
  voterWalletAddress: string;
  voteType: 'bullish' | 'bearish';
}

interface VoteResponse {
  success: boolean;
  data?: {
    id: string;
    influencerId: string;
    voterWalletAddress: string;
    voteType: string;
    createdAt: number;
  };
  message?: string;
  error?: string;
}

export function useVoteOnInfluencer() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitVote = async (voteData: VoteData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/vote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(voteData),
      });

      const result: VoteResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || result.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit vote';
      setError(errorMessage);
      console.error('Vote submission error:', err);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitVote,
    isLoading,
    error,
  };
}