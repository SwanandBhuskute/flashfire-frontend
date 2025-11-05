import Navbar from "@/src/components/navbar/Navbar";
import HeroSection from "@/src/components/heroSection/HeroSection";
import Countdown from "@/src/components/countdown/Countdown";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Countdown />
      <HeroSection />
    </main>
  );
}
