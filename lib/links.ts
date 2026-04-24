export type HubLink = {
  title: string;
  url: string;
  description: string;
  category: string;
};

export const links: HubLink[] = [
  {
    title: "DeFi Vaults Dashboard",
    url: "https://defi-vault-dashboard.vercel.app",
    description:
      "Curator coverage, TVL, and vault displacement across Morpho, Euler, and Aave.",
    category: "DeFi",
  },
  {
    title: "Lido Earn Dashboard",
    url: "https://lido-earn-dashboard.vercel.app",
    description:
      "Lido staking yield and earn-program distribution across partner venues.",
    category: "Staking",
  },
  {
    title: "Yield Loop Dashboard",
    url: "https://yield-loop-dashboard.vercel.app",
    description:
      "On-chain looping strategies for yield-bearing assets.",
    category: "Yield",
  },
  {
    title: "Fernando's Hype Delegation Tracker",
    url: "https://fernandos-hype-delegation-tracker.vercel.app",
    description:
      "Hyperliquid delegation flows and validator exposure over time.",
    category: "Hyperliquid",
  },
  {
    title: "Strategy (MSTR) Capital Structure",
    url: "https://strategy-hhgm.vercel.app",
    description:
      "MicroStrategy's capital structure and balance-sheet snapshot.",
    category: "Equity",
  },
];
