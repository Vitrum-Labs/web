"use client";

import ConnectWalletDynamic from "./ConnectWalletDynamic";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
import { useEffect } from "react";
import { arbitrumSepolia } from "wagmi/chains";
import type { FC } from "react";

const Navbar: FC = () => {
  const pathname = usePathname();
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();

  useEffect(() => {
    const handleNetworkSwitch = async () => {
      if (isConnected && chainId !== arbitrumSepolia.id) {
        console.log('Auto-switching to Arbitrum Sepolia...');
        try {
          await switchChain({ chainId: arbitrumSepolia.id });
        } catch (error) {
          console.error('Failed to switch to Arbitrum Sepolia:', error);
        }
      }
    };

    handleNetworkSwitch();
  }, [isConnected, chainId, switchChain]);

  const navItems = [
    { label: "Dashboard", href: "/app/dashboard" },
    { label: "Vote", href: "/app/identity" },
    { label: "Profile", href: "/app/profile" },
  ];

  return (
    <nav
      className="w-full border-b px-6 py-4"
      style={{ backgroundColor: "#171717", borderColor: "#323232" }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            src="/assets/logo/vitrum-logo-transparant.png"
            alt="Vitrum Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>

        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <ConnectWalletDynamic />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
