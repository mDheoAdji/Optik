import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";



const TEAM = [
  { name: "Dr. Budi Santoso", role: "Optometris Senior", img: "https://i.pravatar.cc/150?img=11" },
  { name: "Siti Rahayu, S.Opt", role: "Optometris", img: "https://i.pravatar.cc/150?img=47" },
  { name: "Andi Pratama", role: "Konsultan Frame", img: "https://i.pravatar.cc/150?img=12" },
];

const KEUNGGULAN = [
  {
    emoji: "🔬",
    title: "Gratis Konsultasi & Cek Mata",
    desc: "Dapatkan pemeriksaan mata gratis oleh optometris bersertifikat kami. Tidak perlu biaya tambahan untuk konsultasi awal.",
  },
  {
    emoji: "🛡️",
    title: "Garansi Frame & Lensa",
    desc: "Setiap produk dilindungi garansi resmi. Frame patah atau lensa cacat? Kami tangani tanpa ribet.",
  },
  {
    emoji: "⚡",
    title: "Pengerjaan Cepat & Presisi",
    desc: "Kacamata minus selesai dalam 1 jam. Lensa khusus maksimal 3 hari kerja dengan presisi tinggi.",
  },
];

const SectionTitle = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center gap-4 mb-10">
    <span className="h-px w-16 bg-foreground/40" />
    <h2
      className="text-xl font-black uppercase tracking-[0.2em] text-foreground sm:text-2xl"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {text}
    </h2>
    <span className="h-px w-16 bg-foreground/40" />
  </div>
);

const KenapaP = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>

        {/* Hero — fullscreen gambar tanpa terpotong */}
        <section className="relative w-full" style={{ height: "calc(100svh - 64px)" }}>
          <img
            src="/Kenapa.webp"
            alt="Kenapa Mega Optik"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-10 left-0 right-0 px-6 text-center">
            {/* Checklist di dalam hero untuk mobile */}
            {/* <div className="mt-6 flex flex-col items-center gap-2 sm:hidden">
              {["Gratis Konsultasi & Cek Mata", "Garansi Frame & Lensa", "Pengerjaan Cepat & Presisi"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span>✅</span>
                  <span className="text-white text-sm font-medium">{item}</span>
                </div>
              ))}
            </div> */}
          </div>
        </section>

       

        {/* Cerita Brand */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle text="Cerita Kami" />
            <p className="text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Mega Optik berdiri sejak 2009 dengan satu misi sederhana — membantu setiap orang melihat dunia dengan lebih jelas dan tampil lebih percaya diri. Berawal dari satu gerai kecil, kini kami telah melayani lebih dari 10.000 pelanggan setia.
            </p>
            <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Kami percaya bahwa kacamata bukan sekadar alat bantu penglihatan — ia adalah bagian dari identitas Anda. Itulah mengapa kami menghadirkan koleksi terkurasi dari brand terpercaya, didukung layanan profesional optometris bersertifikat.
            </p>
          </div>
        </section>

        {/* Keunggulan */}
        <section className="bg-muted/50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle text="Keunggulan Kami" />
            <div className="grid gap-6 sm:grid-cols-3">
              {KEUNGGULAN.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                  <span className="text-4xl">{item.emoji}</span>
                  <h3 className="mt-4 mb-2 font-bold text-foreground text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tim */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle text="Tim Profesional Kami" />
            <div className="grid gap-6 sm:grid-cols-3">
              {TEAM.map((t) => (
                <div key={t.name} className="rounded-2xl border border-border bg-card p-6 text-center">
                  <img src={t.img} alt={t.name} className="mx-auto mb-4 h-20 w-20 rounded-full object-cover" />
                  <h3 className="font-bold text-foreground">{t.name}</h3>
                  <p className="text-sm text-[#8B5E3C] mt-1">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lokasi */}
        <section className="bg-muted/50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle text="Lokasi & Jam Buka" />
            <div className="grid gap-8 lg:grid-cols-2 items-start">
              <div className="overflow-hidden rounded-2xl border border-border h-72">
                <iframe
                  title="Lokasi Mega Optik"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.194741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTEnNDAuMSJTIDEwNsKwNDknMTAuNCJF!5e0!3m2!1sid!2sid!4v1620000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-[#8B5E3C] mb-1">Alamat</p>
                  <p className="text-foreground">Jl. Contoh No. 123, Jakarta Pusat, DKI Jakarta 10110</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-[#8B5E3C] mb-1">Jam Operasional</p>
                  <div className="space-y-1 text-sm text-foreground">
                    <div className="flex justify-between"><span>Senin – Jumat</span><span>09.00 – 20.00</span></div>
                    <div className="flex justify-between"><span>Sabtu</span><span>09.00 – 18.00</span></div>
                    <div className="flex justify-between"><span>Minggu</span><span>10.00 – 16.00</span></div>
                  </div>
                </div>
            
              </div>
            </div>
          </div>
        </section>



      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default KenapaP;