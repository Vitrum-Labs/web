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
    [arbitrumSepolia.id]: http("https://arb-sepolia.g.alchemy.com/v2/khrP0RS5TnTQxZPuH0i-E"),
  },
  ssr: true,
});

