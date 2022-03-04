import Contributions from "../components/Contributions";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Stack from "../components/Stack";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Stack />
      <Contributions />
    </div>
  )
}
