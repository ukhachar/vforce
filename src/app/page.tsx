"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import TrustedSection from "@/components/sections/TrustedSection";
import StaticShowcase from "@/components/sections/StaticShowcase";
import HowItWorks from "@/components/sections/HowItWorks";
import RealCreators from "@/components/sections/RealCreators";
import SmallVideoModel from "@/components/sections/SmallVideoModel";
import Footer from "@/components/sections/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative bg-[#020617] min-h-screen">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Trusted by brands */}
      <TrustedSection />

      {/* Static showcase - center large video, sides small */}
      <StaticShowcase />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Real Creators Performance Section */}
      <RealCreators />

      {/* Small Video Model Section */}
      <SmallVideoModel />

      {/* Footer */}
      <Footer />
    </main>
  );
}
