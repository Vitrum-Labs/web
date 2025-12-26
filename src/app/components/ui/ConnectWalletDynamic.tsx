"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useDisconnect } from "wagmi";

export default function ConnectWalletDynamic() {
  const { disconnect } = useDisconnect();

  return (
    <ConnectButton.Custom>
      {({
        account,
        openAccountModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }: any) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected = ready && account;

        return (
          <div {...(!ready && { 'aria-hidden': true, style: { opacity: 0 } })}>
            {!connected ? (
              <button
                onClick={openConnectModal}
                className="bg-black text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-gray-800 transition-colors"
              >
                Connect Wallet
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={openAccountModal}
                  className="bg-black text-white px-4 py-2 rounded-full text-sm font-mono cursor-pointer hover:bg-gray-800 transition-colors"
                >
                  {account.displayName}
                </button>
                <button
                  onClick={() => disconnect()}
                  className="bg-red-600 text-white px-3 py-2 rounded-full text-sm cursor-pointer hover:bg-red-700 transition-colors"
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}