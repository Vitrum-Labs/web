"use client";

import { FC } from "react";
import Navbar from "../../../ui/Navbar";
import UserProfileCard from "./UserProfileCard";
import NFTGrid from "./NFTGrid";

const Profile: FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#151515" }}>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <UserProfileCard />
        <NFTGrid />
      </main>
    </div>
  );
};

export default Profile;
