import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GlassesSection from "@/components/GlassesSection";
import OpticalProducts from "@/components/OpticalProducts";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <GlassesSection />
        <OpticalProducts />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
