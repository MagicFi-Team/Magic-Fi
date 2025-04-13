import React from "react";
import { Metadata } from "next";
import MarketsView from "./view";
import { generatePageTitle } from "@/utils";

export const metadata: Metadata = {
  title: generatePageTitle("Markets"),
  description: "MAGIC FI",
};

export default function MarketsPage() {
  return <MarketsView />;
}
