import { useReadContract } from 'wagmi';
import { CONTRACTS } from '../contracts';
import { VitrumIdentityABI } from '../ABI/VitrumIdentityABI';

export function useCheckIdentity(address?: string) {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACTS.VitrumIdentity,
    abi: VitrumIdentityABI,
    functionName: 'hasIdentity',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    }
  });

  return {
    hasIdentity: data || false,
    isLoading,
    error,
  };
}