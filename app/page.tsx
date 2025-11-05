import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/heroSection/HeroSection";
import Countdown from "@/components/countdown/Countdown";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Countdown />
      <HeroSection />
    </main>
  );
}
