import { useState, useEffect } from 'react';

export interface InfluencerStats {
  influencerId: string;
  bullishVotes: number;
  bearishVotes: number;
  totalVotes: number;
  netSentiment: number;
  sentimentPercentage: number;
}

interface InfluencerStatsResponse {
  success: boolean;
  data: InfluencerStats;
}

export function useInfluencerStats(influencerId: string) {
  const [stats, setStats] = useState<InfluencerStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/vote/influencer/${influencerId}/stats`);
      if (!response.ok) {
        if (response.status === 404) {
          setStats({
            influencerId,
            bullishVotes: 0,
            bearishVotes: 0,
            totalVotes: 0,
            netSentiment: 0,
            sentimentPercentage: 50,
          });
          return;
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result: InfluencerStatsResponse = await response.json();
      
      if (result.success) {
        setStats(result.data);
      } else {
        setStats({
          influencerId,
          bullishVotes: 0,
          bearishVotes: 0,
          totalVotes: 0,
          netSentiment: 0,
          sentimentPercentage: 50,
        });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch influencer stats';
      setError(errorMessage);
      console.error('Fetch influencer stats error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (influencerId) {
      fetchStats();
    }
  }, [influencerId]);

  return {
    stats,
    isLoading,
    error,
    refetch: fetchStats,
  };
}