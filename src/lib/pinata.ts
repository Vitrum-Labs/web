const PINATA_API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY!;
const PINATA_SECRET_API_KEY = process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY!;
const PINATA_JWT_TOKEN = process.env.NEXT_PUBLIC_PINATA_JWT_TOKEN!;

export interface PinataUploadResponse {
  IpfsHash: string;
  PinSize: number;
  Timestamp: string;
}

export interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string | number;
  }>;
}

export async function uploadImageToPinata(imageFile: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', imageFile);

  const metadata = JSON.stringify({
    name: imageFile.name,
  });
  formData.append('pinataMetadata', metadata);

  const options = JSON.stringify({
    cidVersion: 0,
  });
  formData.append('pinataOptions', options);

  try {
    const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PINATA_JWT_TOKEN}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Pinata upload failed: ${response.statusText}`);
    }

    const result: PinataUploadResponse = await response.json();
    return `ipfs://${result.IpfsHash}`;
  } catch (error) {
    console.error('Error uploading to Pinata:', error);
    throw new Error('Failed to upload image to IPFS');
  }
}

export async function uploadMetadataToPinata(metadata: NFTMetadata): Promise<string> {
  try {
    const response = await fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PINATA_JWT_TOKEN}`,
      },
      body: JSON.stringify({
        pinataContent: metadata,
        pinataMetadata: {
          name: `${metadata.name}_metadata`,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Pinata metadata upload failed: ${response.statusText}`);
    }

    const result: PinataUploadResponse = await response.json();
    return `ipfs://${result.IpfsHash}`;
  } catch (error) {
    console.error('Error uploading metadata to Pinata:', error);
    throw new Error('Failed to upload metadata to IPFS');
  }
}

export function createNFTMetadata(
  imageUri: string, 
  score: number, 
  userAddress: string
): NFTMetadata {
  return {
    name: "Onchain Reputation Score NFT",
    description: `Vitrum onchain reputation score NFT for ${userAddress}`,
    image: imageUri,
    attributes: [
      {
        trait_type: "Reputation Score",
        value: score,
      },
      {
        trait_type: "Max Score",
        value: 1000,
      },
      {
        trait_type: "Owner",
        value: userAddress,
      },
      {
        trait_type: "Type",
        value: "Identity NFT",
      },
    ],
  };
}