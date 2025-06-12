import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedContent from "./AnimatedContent";
import Particles from "./Particles";
import ShinyText from "./ShinyText";
import SplitText from "./SplitText";

export const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;

    // Title and Subtitle and button fade out
    gsap.to([title, subtitle, button], {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "center top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-screen overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 -z-10" />
        <div className="absolute top-96 left-1/2 -translate-x-1/2 w-[1000px] z-30">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-blue-400/20 via-cyan-400/10 to-transparent blur-3xl scale-150 animate-pulse"></div>

          {/* Middle glow ring */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-radial from-blue-500/30 via-cyan-500/15 to-transparent blur-2xl scale-125 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>

          {/* Inner glow ring */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-radial from-white/20 via-blue-300/20 to-transparent blur-xl scale-110 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Earth image with enhanced glow */}
          <img
            src="./images/earth.png"
            alt="Earth"
            className="relative w-full opacity-40 pointer-events-none rotating-earth"
            style={{
              filter:
                "drop-shadow(0 0 50px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 100px rgba(34, 197, 94, 0.4)) drop-shadow(0 0 150px rgba(147, 51, 234, 0.2))",
            }}
          />
        </div>
        <Particles
          className="absolute inset-0 z-10"
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={10}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Hero content */}
      <div className="relative text-center space-y-8 max-w-4xl mx-auto px-6 z-10">
        <div
          ref={titleRef}
          className="text-7xl font-bold tracking-tight leading-tight"
        >
          <h1 className="text-white text-7xl font-bold tracking-tight leading-tight">
            Цаг захиалгын
          </h1>
          <h1
            className="text-white text-7xl font-bold tracking-tight leading-tight"
            style={{
              background:
                "linear-gradient(to top, #FFFFFF 0%, #E6F3FF 52%, #B3D9FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "20px",
            }}
          >
            Нэгдсэн платформ
          </h1>
        </div>

        <div ref={subtitleRef}>
          <ShinyText
            text="Монгол дахь шилдэг үйлчилгээ үзүүлэгчидтэй холбогдоод цаг захиалаарай."
            disabled={false}
            speed={3}
            className="text-xl leading-relaxed max-w-2xl mx-auto"
          />
        </div>

        <div ref={buttonRef} className="flex justify-center items-center mt-12">
          <button
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            style={{
              background:
                "linear-gradient(to right, #FFFFFF 0%, #E6F3FF 52%, #B3D9FF 100%)",
              color: "#000A17",
              fontSize: "14px",
              fontWeight: "600",
              padding: "10px 24px",
              borderRadius: "25px",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            <span className="flex items-center gap-2">
              Бүртгүүлэх
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
