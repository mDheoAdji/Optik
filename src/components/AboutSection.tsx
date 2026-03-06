import { Award, Shield, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-muted/50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Tentang Mega Optik
            </h2>
            <p className="mb-6 text-muted-foreground leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Dengan pengalaman lebih dari 15 tahun di industri optik, OptikaVision hadir sebagai solusi terpercaya untuk kebutuhan penglihatan Anda. Kami menggabungkan teknologi terkini dengan layanan profesional untuk memberikan pengalaman terbaik bagi pelanggan kami.
            </p>
            <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Setiap produk yang kami tawarkan telah melalui seleksi ketat untuk memastikan kualitas, kenyamanan, dan gaya yang optimal. Tim optometris berpengalaman kami siap membantu Anda menemukan solusi penglihatan yang sempurna.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: Award, title: "15+ Tahun", desc: "Pengalaman di industri optik" },
              { icon: Shield, title: "Produk Original", desc: "Garansi keaslian 100%" },
              { icon: Heart, title: "10.000+", desc: "Pelanggan puas" },
              { icon: Award, title: "Profesional", desc: "Optometris bersertifikat" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6 text-center">
                <item.icon className="mx-auto mb-3 h-8 w-8 text-[#8B5E3C]" />
                <h3 className="mb-1 font-['Playfair_Display'] text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;