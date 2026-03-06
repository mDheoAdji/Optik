import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";

const KontakPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default KontakPage;
