"use client";

import type { FC } from "react";
import Navbar from "../../../ui/Navbar";
import CTGrid from "./CTGrid";
import IdentityHero from "./IdentityHero";

const Identity: FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#151515" }}>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <IdentityHero />
        <CTGrid />
      </main>
    </div>
  );
};

export default Identity;
