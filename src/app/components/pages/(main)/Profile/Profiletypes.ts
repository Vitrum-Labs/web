export interface ProfileProps {
  walletAddress?: string;
}

export interface UserProfileCardProps {
  name?: string;
  reputationScore?: number;
  maxScore?: number;
  reputationLevel?: string;
  walletAge?: string;
  transactionCount?: number;
  isLoading?: boolean;
}

export interface NFTGridProps {
  nftCount?: number;
  hasNFT?: boolean;
}
