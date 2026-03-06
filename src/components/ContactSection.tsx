import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const phone = import.meta.env.VITE_WHATSAPP_NUMBER;
const email = import.meta.env.VITE_EMAIL;


const contactInfo = [
  { icon: MapPin, label: "Alamat", value: "Jl. Optik Raya No. 123, Jakarta Selatan" },
  { icon: Phone, label: "WhatsApp", value: "+62 812-3456-789", href: `https://wa.me/${phone}` },
  { icon: Mail, label: "Email", value: "info@optikavision.com", href: `mailto:${email}`},
  { icon: Instagram, label: "Instagram", value: "@optikavision", href: "https://instagram.com/optikavision" },
];

const ContactSection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            Hubungi Kami
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Kunjungi toko kami atau hubungi melalui berbagai channel
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => (
            <Card key={item.label} className="border-border text-center transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
               <item.icon className="mx-auto mb-3 h-8 w-8 text-[#8B5E3C]" />
                <h3 className="mb-1 text-sm font-medium text-muted-foreground">{item.label}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-foreground">{item.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
