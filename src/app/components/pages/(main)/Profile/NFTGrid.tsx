"use client";

import { FC } from "react";
import { NFTGridProps } from "./types";

const NFTGrid: FC<NFTGridProps> = ({ nftCount = 6 }) => {
  return (
    <div
      className="border rounded-xl p-6"
      style={{
        backgroundColor: "#171717",
        borderColor: "#323232",
      }}
    >
      <h2 className="text-xl font-bold text-white mb-6">Review user</h2>

      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: nftCount }, (_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg border border-gray-600 flex items-center justify-center"
            style={{ backgroundColor: "#2A2A2A" }}
          >
            <span className="text-gray-400 text-lg font-medium">NFT</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTGrid;
