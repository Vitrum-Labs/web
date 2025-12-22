import { useCallback, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { apiClient } from "./api";
import type { ReputationQuickData, UseReputationQuickReturn } from "./types";

export const useReputationQuick = (): UseReputationQuickReturn => {
  const { address } = useAccount();
  const [data, setData] = useState<ReputationQuickData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchReputation = useCallback(async () => {
    if (!address) {
      setData(null);
      setError("Please Connect Your Wallet");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await apiClient.getReputationQuick(address);
      setData(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, [address]);

  const refetch = useCallback(() => {
    fetchReputation();
  }, [fetchReputation]);

  useEffect(() => {
    fetchReputation();
  }, [fetchReputation]);

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
