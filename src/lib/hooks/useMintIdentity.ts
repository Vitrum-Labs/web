import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { uploadImageToPinata, uploadMetadataToPinata, createNFTMetadata } from '../pinata';
import { CONTRACTS } from '../contracts';
import { VitrumIdentityABI } from '../ABI/VitrumIdentityABI';

export interface MintIdentityParams {
  imageFile: File;
  score: number;
}

export interface MintIdentityState {
  isUploading: boolean;
  isMinting: boolean;
  isConfirming: boolean;
  uploadProgress: 'idle' | 'uploading-image' | 'uploading-metadata' | 'completed';
  error: string | null;
  txHash: string | null;
  imageUri: string | null;
  metadataUri: string | null;
}

export function useMintIdentity() {
  const { address } = useAccount();
  const { writeContract, data: txHash, error: writeError } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: txConfirmed } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  const [state, setState] = useState<MintIdentityState>({
    isUploading: false,
    isMinting: false,
    isConfirming: false,
    uploadProgress: 'idle',
    error: null,
    txHash: null,
    imageUri: null,
    metadataUri: null,
  });

  const mintIdentity = async ({ imageFile, score }: MintIdentityParams) => {
    if (!address) {
      setState(prev => ({ ...prev, error: 'Please connect your wallet' }));
      return;
    }

    try {
      setState(prev => ({
        ...prev,
        error: null,
        isUploading: true,
        uploadProgress: 'uploading-image',
        imageUri: null,
        metadataUri: null,
        txHash: null,
      }));

      const imageUri = await uploadImageToPinata(imageFile);
      setState(prev => ({
        ...prev,
        imageUri,
        uploadProgress: 'uploading-metadata',
      }));

      const metadata = createNFTMetadata(imageUri, score, address);
      const metadataUri = await uploadMetadataToPinata(metadata);
      
      setState(prev => ({
        ...prev,
        metadataUri,
        uploadProgress: 'completed',
        isUploading: false,
        isMinting: true,
      }));

      console.log('About to call mintIdentity with:', {
        contractAddress: CONTRACTS.VitrumIdentity,
        metadataUri,
        score: BigInt(score),
      });

      // Debug ABI and function
      const mintFunction = VitrumIdentityABI.find((item: any) => 
        item.type === 'function' && item.name === 'mintIdentity'
      );
      
      console.log('Contract call params:', {
        address: CONTRACTS.VitrumIdentity,
        abiLength: VitrumIdentityABI.length,
        mintFunctionExists: !!mintFunction,
        mintFunction,
        functionName: 'mintIdentity',
        args: [metadataUri, BigInt(score)],
      });

      writeContract({
        address: CONTRACTS.VitrumIdentity,
        abi: VitrumIdentityABI,
        functionName: 'mintIdentity',
        args: [metadataUri, BigInt(score)],
      });

    } catch (error) {
      console.error('Error in mintIdentity:', error);
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
        isUploading: false,
        isMinting: false,
        uploadProgress: 'idle',
      }));
    }
  };

  const isLoading = state.isUploading || state.isMinting || isConfirming;
  const error = state.error || writeError?.message || null;

  return {
    mintIdentity,
    isLoading,
    isUploading: state.isUploading,
    isMinting: state.isMinting,
    isConfirming,
    uploadProgress: state.uploadProgress,
    error,
    txHash: txHash || state.txHash,
    txConfirmed,
    imageUri: state.imageUri,
    metadataUri: state.metadataUri,
  };
}