"use client";

import { FC } from "react";
import Navbar from "../../../ui/Navbar";
import IdentityHero from "./IdentityHero";
import CTGrid from "./CTGrid";
import { IdentityProps } from "./types";

const Identity: FC<IdentityProps> = ({
  walletAddress = "0X123....890",
}) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#151515' }}>
      <Navbar walletAddress={walletAddress} />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <IdentityHero />
        <CTGrid />
      </main>
    </div>
  );
};

export default Identity;