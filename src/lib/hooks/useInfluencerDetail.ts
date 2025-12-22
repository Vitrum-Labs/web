import { useState, useEffect } from 'react';

export interface InfluencerDetail {
  id: string;
  walletAddress: string;
  name: string;
  bio: string;
  socialLinks: Record<string, string>;
  profileImage: string;
  totalReviews: number;
}

interface InfluencerDetailResponse {
  success: boolean;
  data: InfluencerDetail;
}

export function useInfluencerDetail(id: string) {
  const [data, setData] = useState<InfluencerDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInfluencerDetail = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/influencer/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result: InfluencerDetailResponse = await response.json();
      
      if (result.success) {
        setData(result.data);
      } else {
        throw new Error('Failed to fetch influencer detail');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch influencer detail';
      setError(errorMessage);
      console.error('Fetch influencer detail error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchInfluencerDetail();
    }
  }, [id]);

  return {
    influencer: data,
    isLoading,
    error,
    refetch: fetchInfluencerDetail,
  };
}