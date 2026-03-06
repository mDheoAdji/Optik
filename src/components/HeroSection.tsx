import { useState, useEffect } from "react";

const slides = [
  {
    urlDesktop: "/promo.webp",
    urlMobile: "/promo-mobile.webp",
    alt: "Kacamata Fashion",
  },
  {
    urlDesktop: "/Optik.webp",
    urlMobile: "/Optik-mobile.webp",
    alt: "Kacamata Premium",
  },
  {
    urlDesktop: "/Gratis.webp",
    urlMobile: "/Gratis-mobile.webp",
    alt: "Kacamata Modern",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden h-screen min-h-[600px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0"
          style={{
            opacity: index === current ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        >
          <img
            src={isMobile ? slide.urlMobile : slide.urlDesktop}
            alt={slide.alt}
            className="h-full w-full object-cover object-center"
            style={{
              transform: index === current ? "scale(1.05)" : "scale(1)",
              transition: "transform 6s ease",
            }}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center" />
      </div>
    </section>
  );
};

export default HeroSection;