"use client";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from "viem/chains";

export const config = getDefaultConfig({
  appName: "LocalLinkAfrica",
  projectId: "04b2c7e7b034503b6591f4fbbf49216d",
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
