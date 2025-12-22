import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrumSepolia } from "wagmi/chains";
import { http } from "wagmi";

export const wagmiConfig = getDefaultConfig({
  appName: "Vitrum",
  projectId:
    process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ||
    "your-wallet-connect-project-id",
  chains: [arbitrumSepolia],
  transports: {
    [arbitrumSepolia.id]: http("https://arbitrum-sepolia-testnet.api.pocket.network"),
  },
  ssr: true,
});
