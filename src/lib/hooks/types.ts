export interface ReputationQuickData {
  walletAddress: string;
  score: number;
  eligible: boolean;
  walletAge: number;
  totalTransactions: number;
  activeNetworks: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface UseReputationQuickReturn {
  data: ReputationQuickData | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}