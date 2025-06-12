import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardSwap, { Card } from "./CardSwap";

export const HowSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    // Pin the section while cards animate
    gsap
      .timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
        },
      })
      .from(cards, {
        scale: 0.3,
        rotation: 45,
        opacity: 0,
        ease: "power2.out",
      })
      .to(
        section,
        {
          backgroundColor: "#1e293b",
        },
        0
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen flex flex-col items-center justify-center px-4 bg-slate-800"
    >
      <div ref={cardsRef} style={{ height: "600px", position: "relative" }}>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card>
            <h3 className="text-white text-2xl font-bold">Алхам 1</h3>
            <p className="text-gray-300">Үйлчилгээ сонгох</p>
          </Card>
          <Card>
            <h3 className="text-white text-2xl font-bold">Алхам 2</h3>
            <p className="text-gray-300">Цаг захиалах</p>
          </Card>
          <Card>
            <h3 className="text-white text-2xl font-bold">Алхам 3</h3>
            <p className="text-gray-300">Үйлчилгээ авах</p>
          </Card>
        </CardSwap>
      </div>
    </section>
  );
};
