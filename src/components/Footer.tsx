import { Link } from "react-router-dom";
import { Glasses, Instagram, Mail, Phone } from "lucide-react";
const phone = import.meta.env.VITE_WHATSAPP_NUMBER;
const email = import.meta.env.VITE_EMAIL;


const Footer = () => {
  return (
    <footer className="relative border-t border-border px-4 py-12 text-white sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/public/footer.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay gelap agar teks terbaca */}
      <div className="absolute inset-0 z-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Glasses className="h-7 w-7 text-accent" />
              <span className="font-['Playfair_Display'] text-xl font-bold">OptikaVision</span>
            </div>
            <p className="text-sm text-white/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Solusi penglihatan terpercaya dengan kacamata berkualitas dan layanan optik profesional.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="mb-4 font-semibold">Navigasi</h4>
            <ul className="space-y-2 text-sm text-white/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {[
                { to: "/", label: "Home" },
                { to: "/koleksi", label: "Koleksi" },
                { to: "/tentang", label: "Tentang Kami" },
                { to: "/kontak", label: "Kontak" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Warna */}
          <div>
            <h4 className="mb-4 font-semibold">Warna Kacamata</h4>
            <ul className="space-y-2 text-sm text-white/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {["hitam", "coklat", "transparan", "biru", "abu-abu"].map((warna) => (
                <li key={warna}>
                  <Link to={`/warna/${warna}`} className="capitalize transition-colors hover:text-accent">
                    {warna}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          

          {/* Kontak */}
          <div>
            <h4 className="mb-4 font-semibold">Kontak</h4>
            <div className="space-y-3 text-sm text-white/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <a href={`https://wa.me/${phone}`}className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" /> +62 812-3456-789
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" /> info@optikavision.com
              </a>
              <a href="https://instagram.com/optikavision" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Instagram className="h-4 w-4" /> @optikavision
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          © {new Date().getFullYear()} OptikaVision. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;