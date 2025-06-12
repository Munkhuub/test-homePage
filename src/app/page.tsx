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
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #000A17 40%, #007FFF 100%)",
          }}
        />
        {/* <img
          src="./images/earth.png"
          alt="Earth"
          className="absolute top-96 left-1/2 -translate-x-1/2 w-[1000px] opacity-40 pointer-events-none animate-pulse z-30 rotating-earth"
        /> */}
        <Particles
          className="absolute inset-0 z-10"
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={10}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Hero />
      <HowSection />
      <ParallaxSection className="section-2" title="Үйлчилгээний төрлүүд" />
      <ParallaxSection className="section-3" title="Хэрхэн ажилладаг" />
      <ParallaxSection className="section-4" title="Холбогдох" />
    </div>
  );
}
