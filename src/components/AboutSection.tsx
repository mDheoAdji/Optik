import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Mobile */}
        <div className="block lg:hidden">
          {/* Judul sebelum gambar */}
          <div className="mb-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="h-px w-12 bg-foreground/40" />
              <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                Kepoin Yuk
              </p>
              <span className="h-px w-12 bg-foreground/40" />
            </div>
            <h2
              className="text-2xl font-black uppercase tracking-[0.15em] text-foreground"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Mega <span className="text-[#8B5E3C]">Optik</span>
            </h2>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl">
            <img
              src="/Kenapa.webp"
              alt="Kenapa Mega Optik"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="mt-6 space-y-3">
            {[
              "Gratis Konsultasi & Cek Mata",
              "Garansi Frame & Lensa",
              "Pengerjaan Cepat & Presisi",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-xl">✅</span>
                <span className="text-base font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              to="/kenapaP"
              className="block w-full border-2 border-foreground text-center py-4 text-sm font-black uppercase tracking-[0.2em] text-foreground hover:bg-foreground hover:text-background transition-colors rounded-sm"
            >
              Pelajari Selengkapnya
            </Link>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Kepoin Yuk
            </p>
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Mega <span className="text-[#8B5E3C]">Optik</span>
            </h2>
            <p className="mb-6 text-muted-foreground leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Dengan pengalaman lebih dari 15 tahun di industri optik, Mega Optik hadir sebagai solusi terpercaya untuk kebutuhan penglihatan Anda. Kami menggabungkan teknologi terkini dengan layanan profesional untuk memberikan pengalaman terbaik.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Gratis Konsultasi & Cek Mata",
                "Garansi Frame & Lensa",
                "Pengerjaan Cepat & Presisi",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-xl">✅</span>
                  <span className="text-base font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/kenapaP"
              className="inline-block border-2 border-foreground px-8 py-3 text-sm font-black uppercase tracking-[0.2em] text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Pelajari Selengkapnya
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/Kenapa.webp"
              alt="Kenapa Mega Optik"
              className="w-full object-cover max-h-[600px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;