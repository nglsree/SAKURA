import { MotionConfig } from "framer-motion";
import { InfoDialogProvider } from "./components/ui/InfoDialog";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { ThemeShowcase } from "./components/sections/ThemeShowcase";
import { Features } from "./components/sections/Features";
import { HowItWorks } from "./components/sections/HowItWorks";
import { WhySakura } from "./components/sections/WhySakura";
import { CreatorShowcase } from "./components/sections/CreatorShowcase";
import { OpenSource } from "./components/sections/OpenSource";
import { Pricing } from "./components/sections/Pricing";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <InfoDialogProvider>
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <ThemeShowcase />
          <Features />
          <HowItWorks />
          <WhySakura />
          <CreatorShowcase />
          <OpenSource />
          <Pricing />
          <FinalCTA />
        </main>
        <Footer />
      </InfoDialogProvider>
    </MotionConfig>
  );
}
