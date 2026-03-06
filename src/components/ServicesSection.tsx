import { Eye, MessageCircle, RefreshCw, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, React.ReactNode> = {
  Eye: <Eye className="h-8 w-8" />,
  MessageCircle: <MessageCircle className="h-8 w-8" />,
  RefreshCw: <RefreshCw className="h-8 w-8" />,
  Wrench: <Wrench className="h-8 w-8" />,
};

const services = [
  {
    title: "Pemeriksaan Mata",
    description: "Pemeriksaan mata lengkap dengan alat modern oleh optometris berpengalaman",
    icon: "Eye",
  },
  {
    title: "Konsultasi Kacamata",
    description: "Bantuan memilih kacamata sesuai bentuk wajah dan kebutuhan Anda",
    icon: "MessageCircle",
  },
  {
    title: "Ganti Lensa",
    description: "Layanan penggantian lensa kacamata dengan berbagai pilihan lensa berkualitas",
    icon: "RefreshCw",
  },
  {
    title: "Service Frame",
    description: "Perbaikan dan penyesuaian frame kacamata agar nyaman dipakai",
    icon: "Wrench",
  },
];

const ServicesSection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            Layanan Optik Kami
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Layanan profesional untuk kebutuhan penglihatan Anda
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#8B5E3C]/10 text-[#8B5E3C]">
                  {iconMap[service.icon]}
                </div>
                <h3 className="mb-2 font-['Playfair_Display'] text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;