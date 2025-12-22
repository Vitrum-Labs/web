import { CTInfluencer, Sentiment } from '../../../../types/domain';

export interface CTCardProps {
  id: string;
  name: string;
  image: string;
  bullishPercentage: number;
  bearishPercentage: number;
  sentiment: "Bullish" | "Bearish";
}

export interface IdentityProps {
  walletAddress?: string;
}

export interface IdentityHeroProps {
  percentage?: number;
  sentiment?: Sentiment;
}