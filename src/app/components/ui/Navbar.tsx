"use client";

import { FC } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavbarProps {
  walletAddress?: string;
}

const Navbar: FC<NavbarProps> = ({ walletAddress = "0X123....890" }) => {
  const pathname = usePathname();
  
  const navItems = [
    { label: "Dashboard", href: "/app/dashboard" },
    { label: "Identity", href: "/app/identity" },
    { label: "Ecosystem", href: "/app/ecosystem" },
    { label: "Docs", href: "/app/docs" },
  ];

  return (
    <nav className="w-full border-b px-6 py-4" style={{ backgroundColor: '#171717', borderColor: '#323232' }}>
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
          <div className="px-4 py-2 rounded-lg text-sm text-gray-300 font-mono border" style={{ backgroundColor: '#171717', borderColor: '#323232' }}>
            {walletAddress}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;