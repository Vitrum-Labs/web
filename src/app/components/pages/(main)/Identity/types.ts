import { CTInfluencer, Sentiment } from '../../../../types/domain';

export interface CTCardProps extends Omit<CTInfluencer, 'id'> {}

export interface IdentityProps {
  walletAddress?: string;
}

export interface IdentityHeroProps {
  percentage?: number;
  sentiment?: Sentiment;
}