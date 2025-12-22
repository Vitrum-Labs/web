"use client";

import Image from "next/image";
import type { FC } from "react";
import type { IdentityHeroProps } from "./types";

const IdentityHero: FC<IdentityHeroProps> = () => {

  return (
    <div className="mb-8">
      <div
        className="border rounded-xl p-8 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1F1F1F 0%, #171717 50%, #0F0F0F 100%)",
          borderColor: "#323232",
        }}
      >
        <div className="absolute -top-8 left-16 opacity-15">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 opacity-20 blur-xl rounded-full"></div>
            <Image
              src="/assets/logo/bull-logo.png"
              alt="Bull Logo"
              width={350}
              height={350}
              className="object-contain relative z-10 filter drop-shadow-lg"
              style={{
                filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.4))",
              }}
            />
          </div>
        </div>

        <div className="absolute -top-8 right-16 opacity-15">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 opacity-20 blur-xl rounded-full"></div>
            <Image
              src="/assets/logo/bear-logo.png"
              alt="Bear Logo"
              width={350}
              height={350}
              className="object-contain relative z-10 filter drop-shadow-lg scale-x-[-1]"
              style={{
                filter: "drop-shadow(0 0 20px rgba(239, 68, 68, 0.4))",
              }}
            />
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/assets/logo/vitrum-logo-transparant.png"
                alt="Vitrum Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-white text-2xl font-bold">Vitrum</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-4xl font-bold mb-4">
              <span className="text-green-400">Bullish</span>
              <span className="text-white"> or </span>
              <span className="text-red-400">Bearish?</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-3xl">
              Track and analyze the reputation of crypto influencers through community voting and reviews. 
              Make informed decisions by understanding market sentiment from verified community feedback.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-green-600/20 border border-green-600/30 px-4 py-2 rounded-full">
                <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src="/assets/logo/bull-logo.png"
                    alt="Bull"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-green-400 font-medium">Bullish</span>
              </div>
              <div className="flex items-center space-x-3 bg-red-600/20 border border-red-600/30 px-4 py-2 rounded-full">
                <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src="/assets/logo/bear-logo.png"
                    alt="Bear"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-red-400 font-medium">Bearish</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityHero;
