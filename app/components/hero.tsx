"use client";

import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const images = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Animation for flip
  const { transform, opacity } = useSpring({
    opacity: 1,
    transform: `rotateY(0deg)`,
    from: { opacity: 0, transform: "rotateY(180deg)" },
    reset: true,
    key: current, // re-run animation on image change
  });

  return (
    <section className="relative h-[106vh] overflow-hidden -mt-10" id="home">
      {/* Background Images */}
      {images.map((img, index) => (
        <animated.div
          key={index}
          style={{
            opacity: index === current ? opacity : 0,
            transform: index === current ? transform : "rotateY(180deg)",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0"
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center mt-10">
        <div className="max-w-6xl mx-auto md:mx-0 md:pl-20 px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Steel Structure <br /> & Construction Solutions
          </h1>

          <p className="mt-4 max-w-xl text-lg text-gray-200">
            We deliver reliable steel structure design, fabrication, and
            construction services for industrial and commercial projects.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="/contact"
              className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:bg-orange-700 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0"
            >
              GET A QUOTE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
