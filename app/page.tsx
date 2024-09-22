"use client";
import Nav from "./components/nav/Nav";
import InfoSection from "./components/InfoSection";
import StoreSection from "./components/StoreSection";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FooterSection from "./components/FooterSection";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./wagmiConfig";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {
            <div>
              <Nav />
              <InfoSection />
              <StoreSection />
              <FooterSection />
            </div>
          }
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
