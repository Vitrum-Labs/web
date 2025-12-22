import type { ReactElement } from "react";

export type Sentiment = "Bullish" | "Bearish";

export interface UserWallet {
  address: string;
  age: string;
  txCount: number;
}

export interface ReputationData {
  score: number;
  maxScore: number;
  rank: string;
  userPercentile: number;
  nextTierProgress: number;
}

export interface CTInfluencer {
  id: string;
  name: string;
  image: string;
  bullishPercentage: number;
  bearishPercentage: number;
  sentiment: Sentiment;
}

export interface ActionCard {
  icon: ReactElement;
  title: string;
  description: string;
  buttonText: string;
  unlocked: boolean;
}
