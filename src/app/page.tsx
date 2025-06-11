"use client";

import Particles from "./_components/Particles";

import SplitText from "./_components/SplitText";
import AnimatedContent from "./_components/AnimatedContent";
import ShinyText from "./_components/ShinyText";

export default function EnhancedHomePage() {
  return (
    <div className="relative h-screen min-w-screen overflow-hidden">
      {/* Background & animations */}
      <div className="absolute inset-0 -z-10">
        {/* Canvas for animations */}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #000A17 40%, #007FFF 100%)",
          }}
        />

        {/* Earth image */}
        <img
          src="./images/earth.png"
          alt="Earth"
          className="absolute top-96 left-1/2 -translate-x-1/2 w-[1000px] opacity-40 pointer-events-none animate-pulse z-30 rotating-earth"
        />

        {/* Particles component */}
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

      {/* Main content */}
      <div className="relative flex h-full w-full items-center justify-center z-10">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <div className="w-full text-center space-y-8 max-w-4xl mx-auto px-6">
            <div className="text-7xl font-bold tracking-tight leading-tight z-10 ">
              <SplitText />
            </div>
            <p className="text-blue-100/80 text-xl leading-relaxed max-w-2xl mx-auto">
              Монгол дахь шилдэг үйлчилгээ үзүүлэгчидтэй холбогдоод цаг
              захиалаарай.
            </p>

            <ShinyText
              text="Монгол дахь шилдэг үйлчилгээ үзүүлэгчидтэй холбогдоод цаг
              захиалаарай."
              disabled={false}
              speed={3}
              className="custom-class"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <span className="flex items-center gap-2">
                  Get Started
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

              <button className="px-8 py-4 border-2 border-blue-400/50 text-blue-200 hover:bg-blue-600/20 hover:border-blue-300 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>
            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Lightning Fast
                </h3>
                <p className="text-blue-200/70 text-sm">
                  Smooth 60fps animations with optimized performance
                </p>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h6a2 2 0 012 2v12a4 4 0 01-4 4H9"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Responsive</h3>
                <p className="text-blue-200/70 text-sm">
                  Adapts beautifully to any screen size or device
                </p>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Customizable</h3>
                <p className="text-blue-200/70 text-sm">
                  Easily adjust colors, timing, and grid density
                </p>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>

      {/* Subtle overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none z-5" />
    </div>
  );
}
