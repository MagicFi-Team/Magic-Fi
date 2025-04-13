import { Metadata } from "next";
import { generatePageTitle } from "@/utils";
import PortfolioView from "./view";

export const metadata: Metadata = {
  title: generatePageTitle("Portfolio"),
  description: "MAGIC FI",
};

export default function PortfolioPage() {
  return <PortfolioView />;
}
