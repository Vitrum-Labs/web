import { ActionCard, ReputationData, UserWallet } from '../../../../types/domain';

export interface ReputationCardProps {
  score: number;
  maxScore: number;
  rank: string;
  userPercentile: number;
  walletAge?: string;
  txCount?: number;
  nextTierProgress?: number;
}

export interface ReputationGatedActionsProps {
  actions?: ActionCard[];
}

export interface StatsCardProps {
  walletAge: string;
  txCount: number;
  nextTierProgress: number;
}

export interface VitrumIdentityProps {
  title?: string;
  description?: string;
}

export interface DashboardProps {
  walletAddress?: string;
  userName?: string;
}