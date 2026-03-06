import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";

const KontakPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <div className="mb-10 text-center px-4">
          <h1 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">Kontak Kami</h1>
          <p className="text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Hubungi kami untuk informasi lebih lanjut
          </p>
        </div>
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default KontakPage;
