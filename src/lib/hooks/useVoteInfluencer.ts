import { useState } from 'react';

interface VoteData {
  influencerId: string;
  reviewerWalletAddress: string;
  comment: string;
}

interface VoteResponse {
  success: boolean;
  message?: string;
}

export function useVoteInfluencer() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitVote = async (voteData: VoteData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('Submitting vote data:', voteData);
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(voteData),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.log('Error response:', errorData);
        const errorMessage = errorData?.message || errorData?.error || `HTTP ${response.status}: ${response.statusText}`;
        setError(errorMessage);
        return false;
      }

      const result: VoteResponse = await response.json();
      return result.success;
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