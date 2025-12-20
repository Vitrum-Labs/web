"use client";

import { FC } from "react";
import { FaFingerprint } from "react-icons/fa";
import { VitrumIdentityProps } from "./types";

const VitrumIdentity: FC<VitrumIdentityProps> = ({
  title = "Vitrum Identity",
  description = "Mint your Soulbound Token (SBT) to establish your onchain identity. This token is non-transferable and serves as the anchor for your reputation.",
}) => {
  return (
    <div 
      className="border rounded-xl p-8 flex flex-col" 
      style={{ 
        backgroundColor: '#161616',
        borderColor: '#323232',
        borderWidth: '1px',
        height: '570px'
      }}
    >
      <div className="flex items-center space-x-4 mb-8">
        <div className="flex-shrink-0">
          <div 
            className="w-14 h-14 border rounded-lg flex items-center justify-center"
            style={{ 
              backgroundColor: '#2A2A2A',
              borderColor: '#323232'
            }}
          >
            <FaFingerprint className="w-7 h-7" style={{ color: '#898989' }} />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex-1"></div>

      <button 
        className="w-full font-medium py-4 px-4 rounded-lg transition-colors mt-auto"
        style={{
          backgroundColor: '#434343',
          color: '#FFFFFF'
        }}
      >
        Join Campaign
      </button>
    </div>
  );
};

export default VitrumIdentity;