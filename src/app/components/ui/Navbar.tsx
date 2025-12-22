"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { FC } from "react";

const Navbar: FC = () => {
  const pathname = usePathname();

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
          <ConnectButton.Custom>
            {({
              account,
              openAccountModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              const ready = mounted && authenticationStatus !== 'loading';
              const connected = ready && account;

              return (
                <div {...(!ready && { 'aria-hidden': true, style: { opacity: 0 } })}>
                  {!connected ? (
                    <button
                      onClick={openConnectModal}
                      className="bg-black text-white px-4 py-2 rounded-full text-sm"
                    >
                      Connect Wallet
                    </button>
                  ) : (
                    <button
                      onClick={openAccountModal}
                      className="bg-black text-white px-4 py-2 rounded-full text-sm font-mono"
                    >
                      {account.displayName}
                    </button>
                  )}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
