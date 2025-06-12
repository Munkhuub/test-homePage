"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "./_components/Particles";
import { Hero } from "./_components/Hero";
import { HowSection } from "./_components/HowSection";
import { ParallaxSection } from "./_components/ParralloxSection";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EnhancedHomePage() {
  useEffect(() => {
    // Initialize ScrollTrigger animations after component mounts
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="relative w-screen overflow-hidden">
      <Hero />
      <HowSection />
      <ParallaxSection
        className="section-2"
        title="Үйлчилгээний төрлүүд"
        bgColor="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      />
      <ParallaxSection
        className="section-3"
        title="Хэрхэн ажилладаг"
        bgColor="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      />
      <ParallaxSection
        className="section-4"
        title="Холбогдох"
        bgColor="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
      />
    </div>
  );
}
