export type ChainId = "polygon" | "tron" | "base" | "bnb" | "solana";

export interface Chain {
  id: ChainId;
  name: string;
  shortName: string;
  standard: string;
  dot: string;
  eta: string;
  finality: string;
  networkFee: string;
  address: string;
}

export const CHAINS = [
  {
    id: "polygon",
    name: "Polygon",
    shortName: "Polygon",
    standard: "ERC-20",
    dot: "#8247e5",
    eta: "~5s",
    finality: "64 blocks",
    networkFee: "≈ $0.01",
    address: "0xA9F4…2C7D",
  },
  {
    id: "tron",
    name: "TRON",
    shortName: "TRON",
    standard: "TRC-20",
    dot: "#eb0029",
    eta: "~3s",
    finality: "19 blocks",
    networkFee: "≈ $0.35",
    address: "TQ7m…9Xc2",
  },
  {
    id: "base",
    name: "Base",
    shortName: "Base",
    standard: "ERC-20",
    dot: "#0052ff",
    eta: "~2s",
    finality: "12 blocks",
    networkFee: "≈ $0.01",
    address: "0x3C81…B7A0",
  },
  {
    id: "bnb",
    name: "BNB Chain",
    shortName: "BNB",
    standard: "BEP-20",
    dot: "#f0b90b",
    eta: "~3s",
    finality: "15 blocks",
    networkFee: "≈ $0.03",
    address: "0xE2b6…81F4",
  },
  {
    id: "solana",
    name: "Solana",
    shortName: "Solana",
    standard: "SPL",
    dot: "#14f195",
    eta: "~1s",
    finality: "finalized",
    networkFee: "≈ $0.001",
    address: "7xKq…3eR9",
  },
] as const satisfies readonly Chain[];
