import HeroClient from "./HeroClient";
import { heroData } from "@/src/data/heroData";
import { countdownData } from "@/src/data/countdownData";

export default async function HeroSection() {
  return <HeroClient data={heroData} countdownData={countdownData} />;
}
