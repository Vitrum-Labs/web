import { useReadContract } from 'wagmi';
import { useAccount } from 'wagmi';
import { CONTRACTS } from '../contracts';
import { VitrumIdentityABI } from '../ABI/VitrumIdentityABI';

export const useHasIdentity = () => {
  const { address } = useAccount();
  
  return useReadContract({
    address: CONTRACTS.VitrumIdentity,
    abi: VitrumIdentityABI,
    functionName: 'hasIdentity',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });
};