"use client";

import Image from "next/image";
import type { FC } from "react";
import type { IdentityHeroProps } from "./types";

const IdentityHero: FC<IdentityHeroProps> = ({
  percentage = 74,
  sentiment = "Bullish",
}) => {
  const isPositive = sentiment === "Bullish";

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
            <div
              className={`text-6xl font-bold mb-4 ${isPositive ? "text-green-400" : "text-red-400"}`}
            >
              {percentage}%
              <span
                className={`text-2xl font-medium ml-4 ${isPositive ? "text-green-400" : "text-red-400"}`}
              >
                {sentiment}
              </span>
            </div>

            <div className="w-full bg-gray-800 rounded-full h-3 mb-4">
              <div className="flex h-3 rounded-full overflow-hidden">
                <div
                  className="bg-green-500 transition-all duration-300"
                  style={{
                    width: `${isPositive ? percentage : 100 - percentage}%`,
                  }}
                ></div>
                <div
                  className="bg-red-500 transition-all duration-300"
                  style={{
                    width: `${isPositive ? 100 - percentage : percentage}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityHero;
