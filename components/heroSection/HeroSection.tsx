import HeroClient from "./HeroClient";
import { heroData } from "@/data/heroData";
import { countdownData } from "@/data/countdownData";

export default async function HeroSection() {
  return <HeroClient data={heroData} countdownData={countdownData} />;
}
