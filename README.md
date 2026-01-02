# Vitrum Web Frontend

Vitrum Web is the official frontend application for the **Vitrum decentralized identity & reputation system**, built with **Next.js (App Router)** and designed to interact seamlessly with Vitrum smart contracts deployed on **Arbitrum Testnet**.

This frontend enables users to:

* Mint a **Soulbound Identity NFT**
* View and update on-chain **reputation scores**
* Interact with **influencer voting mechanisms**
* Connect Web3 wallets securely

---

## 🌐 Live Architecture Overview

```
User Browser
   ↓
Next.js Frontend (Vitrum Web)
   ↓
Wallet (MetaMask / WalletConnect)
   ↓
Vitrum Smart Contracts (Arbitrum Testnet)
   ↓
Alchemy Backend (off-chain reputation analysis)
```

---

## 🧱 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Web3 Integration:** ethers.js / wagmi (assumed integration layer)
* **Wallets:** MetaMask, WalletConnect-compatible wallets
* **Network:** Arbitrum Testnet
* **Smart Contracts:** VitrumIdentity & VitrumVote

---

## 📦 Project Structure (High-Level)

```
web/
├─ app/                # Next.js App Router
│  ├─ page.tsx         # Main landing page
│  ├─ layout.tsx       # Root layout
│  └─ providers.tsx    # Web3 / context providers
├─ components/         # Reusable UI components
├─ lib/                # Utilities (contracts, helpers)
├─ hooks/              # Custom React hooks (Web3 logic)
├─ public/             # Static assets
└─ styles/             # Global styles
```

---

## 🔗 Smart Contract Integration

The frontend is configured to interact with the following deployed contracts on **Arbitrum Testnet**:

```ts
VitrumIdentity: 0xB25c93f98e05a3db58fae281c9226281D2C1078D
VitrumVote:     0x310869f0312a0A0c607e2D5BdF57F4a1aaBed1A2
```

**Responsibilities:**

* `VitrumIdentity`: Mint identity NFT, read & claim reputation score
* `VitrumVote`: Vote for influencers based on reputation threshold

---

## 🚀 Getting Started (Local Development)

### Prerequisites

* Node.js ≥ 18
* npm / yarn / pnpm / bun
* Web3 wallet (MetaMask recommended)
* Arbitrum Testnet RPC access

---

### Installation

```bash
# Clone repository
git clone https://github.com/Vitrum-Labs/web.git
cd web

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

---

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open your browser at:

```
http://localhost:3000
```

The application supports **hot reload** and will automatically update as you modify files.

---

## 🔧 Environment Configuration

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_CHAIN_ID=421614
NEXT_PUBLIC_RPC_URL=<ARBITRUM_TESTNET_RPC>
NEXT_PUBLIC_IDENTITY_CONTRACT=0xB25c93f98e05a3db58fae281c9226281D2C1078D
NEXT_PUBLIC_VOTE_CONTRACT=0x310869f0312a0A0c607e2D5BdF57F4a1aaBed1A2
```

> ⚠️ All `NEXT_PUBLIC_*` variables are exposed to the client — **never store private keys here**.

---

## 🧠 Core Frontend Flows

### 1. Wallet Connection

* User connects wallet via browser extension
* Network validation (Arbitrum Testnet)

### 2. Identity Minting

* Calls `VitrumIdentity.mintIdentity(uri)`
* One-time action per wallet

### 3. Reputation Claim

* Frontend requests score from backend API
* User submits signed transaction to `claimScore()`

### 4. Influencer Voting

* Frontend checks on-chain score
* Enables voting if score ≥ 100
* Calls `VitrumVote.vote(influencer)`

---

## 🎨 Fonts & UI

This project uses **Geist**, optimized via `next/font`, ensuring:

* Automatic font optimization
* No layout shifts
* Consistent typography across devices

---

## 🧪 Testing & Quality (Recommended)

Although frontend tests are optional, recommended tools include:

* **Jest / Vitest** for unit tests
* **Playwright** for E2E wallet flows
* **ESLint + Prettier** for consistency

---

## 🚢 Deployment

### Deploying on Vercel (Recommended)

Vitrum Web is optimized for Vercel deployment:

1. Import repository into Vercel
2. Configure environment variables
3. Select **Next.js** framework
4. Deploy

📘 Official Docs:
[https://nextjs.org/docs/app/building-your-application/deploying](https://nextjs.org/docs/app/building-your-application/deploying)

---

## 🔐 Security Notes

* Never expose private keys in frontend code
* Always validate connected chain ID
* Smart contract logic remains trust-minimized on-chain
* Reputation integrity enforced via backend signatures

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Submit a Pull Request with clear context

---

## 📄 License

MIT License
