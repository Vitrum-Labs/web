"use client";

import { FC } from "react";
import Navbar from "../../../ui/Navbar";
import ReputationCard from "./ReputationCard";
import VitrumIdentity from "./VitrumIdentity";
import ReputationGatedActions from "./ReputationGatedActions";
import { DashboardProps } from "./types";

const Dashboard: FC<DashboardProps> = ({
  walletAddress = "0X123....890",
  userName = "User",
}) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#151515" }}>
      <Navbar walletAddress={walletAddress} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {userName}
          </h1>
          <p className="text-[#898989]">
            Manage your onchain identity and reputation
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
            <div className="lg:col-span-3 space-y-4">
              <ReputationCard
                score={1000}
                maxScore={1000}
                rank="EXCELLENT"
                userPercentile={12}
                walletAge="2.4 Years"
                txCount={1248}
                nextTierProgress={82}
              />
              <ReputationGatedActions />
            </div>

            <div className="lg:col-span-2">
              <VitrumIdentity />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
