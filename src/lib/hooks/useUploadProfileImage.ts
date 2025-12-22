import { useState } from 'react';
import { uploadImageToPinata } from '../pinata';

export function useUploadProfileImage() {
  const [isUploading, setIsUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File) => {
    setIsUploading(true);
    setError(null);

    try {
      const ipfsUrl = await uploadImageToPinata(file);
      const httpUrl = ipfsUrl.replace('ipfs://', 'https://gateway.pinata.cloud/ipfs/');
      setImageUrl(httpUrl);
      return httpUrl;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to upload image';
      setError(errorMessage);
      throw err;
    } finally {
      setIsUploading(false);
    }
  };

  const resetImage = () => {
    setImageUrl(null);
    setError(null);
  };

  return {
    uploadImage,
    resetImage,
    isUploading,
    imageUrl,
    error,
  };
}