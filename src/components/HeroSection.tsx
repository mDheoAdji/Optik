import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
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
      {/* Slides */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Dots indicator */}
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

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center">
          {/* <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Lihat Dunia Lebih Jelas
            <br />
            <span className="text-accent">dengan Kacamata Berkualitas</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 sm:text-xl">
            Menampilkan koleksi kacamata modern dan layanan optik profesional
            untuk penglihatan sempurna Anda.
          </p> */}
          {/* <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/koleksi">
                Lihat Koleksi <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" /> Konsultasi Optik
              </a>
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;