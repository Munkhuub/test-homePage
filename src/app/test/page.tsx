import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "../_components/Particles";
import SplitText from "../_components/SplitText";
import ShinyText from "../_components/ShinyText";

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

    // Title animation on scroll
    gsap.fromTo(
      title,
      {
        y: 0,
        scale: 1,
      },
      {
        y: -100,
        scale: 0.8,
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // Subtitle and button fade out
    gsap.to([subtitle, button], {
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
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #000A17 40%, #007FFF 100%)",
          }}
        />
        <img
          src="./images/earth.png"
          alt="Earth"
          className="absolute top-96 left-1/2 -translate-x-1/2 w-[1000px] opacity-40 pointer-events-none animate-pulse z-30 rotating-earth"
        />
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

      {/* Hero content */}
      <div className="relative text-center space-y-8 max-w-4xl mx-auto px-6 z-10">
        <div
          ref={titleRef}
          className="text-7xl font-bold tracking-tight leading-tight"
        >
          <SplitText />
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
          <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
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
