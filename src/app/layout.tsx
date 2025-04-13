import type { Metadata } from "next";
import OrderlyProvider from "@/components/orderlyProvider";
import "./globals.css";
import { ChainMenuWidget } from "@orderly.network/ui-scaffold";

export const metadata: Metadata = {
  title: "MAGIC FI",
  description: "MAGIC FI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="description" content="MAGIC FI"/>
        <meta property="og:title" content="MAGIC FI"/>
        <meta property="og:description" content="MAGIC FI"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://defi.marbleland.io"/>
      </head>
      <body>
        {/* <ChainMenuWidget/> */}
        <OrderlyProvider>{children}</OrderlyProvider>
      </body>
    </html>
  );
}
