import { useState, useEffect } from 'react';

export interface Influencer {
  id: string;
  walletAddress: string;
  name: string;
  bio: string;
  socialLinks: Record<string, string>;
  profileImage: string;
  createdAt: number;
  totalReviews: number;
}

interface AllInfluencersResponse {
  success: boolean;
  data: Influencer[];
  count: number;
}

export function useAllInfluencers() {
  const [data, setData] = useState<Influencer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInfluencers = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/influencer`);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result: AllInfluencersResponse = await response.json();
      
      if (result.success) {
        setData(result.data);
      } else {
        throw new Error('Failed to fetch influencers');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch influencers';
      setError(errorMessage);
      console.error('Fetch influencers error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInfluencers();
  }, []);

  return {
    influencers: data,
    count: data.length,
    isLoading,
    error,
    refetch: fetchInfluencers,
  };
}