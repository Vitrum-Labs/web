"use client";

import Navbar from "@/app/components/ui/Navbar";
import { CTGrid, IdentityHero } from "@/app/components/pages/(main)/Identity";

export default function IdentityPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#151515' }}>
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <IdentityHero />
        <CTGrid />
      </main>
    </div>
  );
}