"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { WalletConnectorProvider } from "@orderly.network/wallet-connector";
import { OrderlyAppProvider } from "@orderly.network/react-app";
import config from "@/config";
import Loading from "../Loading";
import { Arbitrum, BNB } from "@orderly.network/types";
// import { OrderlyAppProvider } from "../../../packages/app/src";

const OrderlyProvider: FC<{ children: ReactNode }> = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data or initializing)
    const timer = setTimeout(() => setIsLoading(false), 4000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  // if (isLoading) {
  //   return <Loading />; // Show the loading page while loading
  // }

  return (
    <>
      <div style={{ display: isLoading ? "block" : "none" }}>
        <Loading /> {/* Show the loading page */}
      </div>
      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        <WalletConnectorProvider>
          <OrderlyAppProvider
            brokerId="orderly"
            brokerName="MAGIC-FI - All-in-one Defi reward protocol"
            networkId="mainnet"
            appIcons={config.orderlyAppProvider.appIcons}
            chainFilter={{
              testnet: [],
            }}
          >
            {props.children}
          </OrderlyAppProvider>
        </WalletConnectorProvider>
      </div>
    </>
  );
};

export default OrderlyProvider;
