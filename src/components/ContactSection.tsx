import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const phone = import.meta.env.VITE_WHATSAPP_NUMBER;
const email = import.meta.env.VITE_EMAIL;

const contactInfo = [
  { icon: MapPin, label: "Alamat", value: "Jl. Optik Raya No. 123, Jakarta Selatan" },
  { icon: Phone, label: "WhatsApp", value: "+62 812-3456-789", href: `https://wa.me/${phone}` },
  { icon: Mail, label: "Email", value: "info@optikavision.com", href: `mailto:${email}` },
  { icon: Instagram, label: "Instagram", value: "@optikavision", href: "https://instagram.com/optikavision" },
];

const ContactSection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Judul */}
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="h-px w-16 bg-foreground/40" />
            <h2
              className="text-xl font-black uppercase tracking-[0.2em] text-foreground sm:text-2xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Hubungi Kami
            </h2>
            <span className="h-px w-16 bg-foreground/40" />
          </div>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Kunjungi toko kami atau hubungi melalui berbagai channel
          </p>
        </div>

        {/* Contact list */}
        <div className="mx-auto max-w-lg divide-y divide-border">
          {contactInfo.map((item) => (
            <div key={item.label} className="flex items-center gap-5 py-5">
              {/* Icon */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8B5E3C]/10">
                <item.icon className="h-5 w-5 text-[#8B5E3C]" />
              </div>
              {/* Text */}
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-0.5">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-foreground hover:text-[#8B5E3C] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-foreground">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactSection;