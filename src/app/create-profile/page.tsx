"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { FaUpload, FaTwitter, FaGlobe, FaDiscord } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { useCreateProfile } from "@/lib/hooks/useCreateProfile";
import { useUploadProfileImage } from "@/lib/hooks/useUploadProfileImage";

interface ProfileData {
  name: string;
  bio: string;
  socialLinks: {
    twitter: string;
    telegram: string;
    discord: string;
    website: string;
  };
}

export default function CreateProfile() {
  const router = useRouter();
  const { address } = useAccount();
  const { createProfile, isLoading: isCreating } = useCreateProfile();
  const { uploadImage, isUploading, imageUrl } = useUploadProfileImage();

  const [profileData, setProfileData] = useState<ProfileData>({
    name: "",
    bio: "",
    socialLinks: {
      twitter: "",
      telegram: "",
      discord: "",
      website: "",
    },
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await uploadImage(file);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    if (field.startsWith("socialLinks.")) {
      const socialField = field.split(".")[1];
      setProfileData(prev => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [socialField]: value,
        },
      }));
    } else {
      setProfileData(prev => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address || !imageUrl) return;

    const payload = {
      walletAddress: address,
      name: profileData.name,
      bio: profileData.bio,
      socialLinks: profileData.socialLinks,
      profileImage: imageUrl,
    };

    const success = await createProfile(payload);
    if (success) {
      router.push("/dashboard");
    }
  };

  const isFormValid = profileData.name && profileData.bio && imageUrl;
  const isLoading = isCreating || isUploading;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#151515" }}>
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Create Your Crypto Influencer Profile
          </h1>
          <p className="text-[#898989]">
            Build your onchain reputation and connect with the community
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-[#1a1a1a] border border-[#323232] rounded-xl p-6">
            <label className="block text-white font-medium mb-4">
              Profile Image
            </label>
            <div className="flex items-center space-x-4">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
              ) : (
                <div className="w-20 h-20 bg-[#323232] rounded-full flex items-center justify-center">
                  <FaUpload className="text-gray-400" />
                </div>
              )}
              <label className="cursor-pointer bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2">
                <FaUpload className="w-4 h-4" />
                <span>{isUploading ? "Uploading..." : "Upload Image"}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  disabled={isUploading}
                />
              </label>
            </div>
          </div>

          <div className="bg-[#1a1a1a] border border-[#323232] rounded-xl p-6">
            <label className="block text-white font-medium mb-2">Name</label>
            <input
              type="text"
              value={profileData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full bg-[#2a2a2a] border border-[#404040] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
              placeholder="Your full name"
              maxLength={50}
            />
          </div>

          <div className="bg-[#1a1a1a] border border-[#323232] rounded-xl p-6">
            <label className="block text-white font-medium mb-2">Bio</label>
            <textarea
              value={profileData.bio}
              onChange={(e) => handleInputChange("bio", e.target.value)}
              className="w-full bg-[#2a2a2a] border border-[#404040] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors resize-none"
              placeholder="Tell us about yourself and your crypto journey..."
              rows={4}
              maxLength={200}
            />
            <div className="text-sm text-gray-400 mt-2">
              {profileData.bio.length}/200
            </div>
          </div>

          <div className="bg-[#1a1a1a] border border-[#323232] rounded-xl p-6">
            <h3 className="text-white font-medium mb-4">Social Links</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaTwitter className="text-blue-400 w-5 h-5" />
                <input
                  type="url"
                  value={profileData.socialLinks.twitter}
                  onChange={(e) => handleInputChange("socialLinks.twitter", e.target.value)}
                  className="flex-1 bg-[#2a2a2a] border border-[#404040] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                  placeholder="https://twitter.com/username"
                />
              </div>
              
              <div className="flex items-center space-x-3">
                <SiTelegram className="text-blue-500 w-5 h-5" />
                <input
                  type="url"
                  value={profileData.socialLinks.telegram}
                  onChange={(e) => handleInputChange("socialLinks.telegram", e.target.value)}
                  className="flex-1 bg-[#2a2a2a] border border-[#404040] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                  placeholder="https://t.me/username"
                />
              </div>

              <div className="flex items-center space-x-3">
                <FaDiscord className="text-indigo-400 w-5 h-5" />
                <input
                  type="text"
                  value={profileData.socialLinks.discord}
                  onChange={(e) => handleInputChange("socialLinks.discord", e.target.value)}
                  className="flex-1 bg-[#2a2a2a] border border-[#404040] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                  placeholder="username#1234"
                />
              </div>

              <div className="flex items-center space-x-3">
                <FaGlobe className="text-green-400 w-5 h-5" />
                <input
                  type="url"
                  value={profileData.socialLinks.website}
                  onChange={(e) => handleInputChange("socialLinks.website", e.target.value)}
                  className="flex-1 bg-[#2a2a2a] border border-[#404040] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="cursor-pointer flex-1 bg-[#2a2a2a] border border-[#404040] text-white py-3 rounded-lg hover:bg-[#333333] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isFormValid || isLoading}
              className="cursor-pointer flex-1 bg-white text-black py-3 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating Profile..." : "Create Profile"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}