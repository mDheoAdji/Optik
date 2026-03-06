import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { glasses } from "@/data/products";
import { ChevronLeft, ChevronRight, ZoomIn, Share2, Heart, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

const SPECS = {
  material: "Ultem",
  size: "Medium",
  lensWidth: "53 mm",
  noseBridge: "18 mm",
  armLength: "152 mm",
};

const COLORS = ["Black", "Brown", "Grey", "Transparent"];

const HOW_TO_ORDER = [
  {
    step: "01",
    title: "Chat via WhatsApp",
    desc: "Kirim pesan ke nomor WhatsApp kami dengan menyebutkan nama produk dan warna yang diinginkan.",
  },
  {
    step: "02",
    title: "Konsultasi Produk",
    desc: "Tim kami akan membantu menjelaskan detail produk, pilihan lensa, dan kebutuhan kacamata Anda.",
  },
  {
    step: "03",
    title: "Konfirmasi Pesanan",
    desc: "Setelah sepakat, kami akan konfirmasi pesanan, ukuran, dan estimasi waktu pengerjaan.",
  },
  {
    step: "04",
    title: "Produk Siap",
    desc: "Kacamata Anda selesai dan siap diambil di toko atau dikirim ke alamat Anda.",
  },
];

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const [currentImg, setCurrentImg] = useState(0);
  const [color, setColor] = useState("");
  const [withLens, setWithLens] = useState<"yes" | "no" | null>(null);
  const [showDesc, setShowDesc] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const product = glasses.find((g) => g.id === id) ?? glasses[0];

  const images = [
    product.image,
    product.image.replace("w=400&h=300", "w=800&h=600"),
    glasses.find((g) => g.id !== product.id)?.image ?? product.image,
    glasses.find((g) => g.id !== product.id && g.category === product.category)?.image ?? product.image,
  ];

  const waMessage = encodeURIComponent(
    `Halo Mega Optik! Saya tertarik dengan produk *${product.name}* (${product.category})${color ? ` warna ${color}` : ""}. Boleh info lebih lanjut?`
  );

  const prev = () => setCurrentImg((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrentImg((i) => (i + 1) % images.length);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-24">

        {/* Breadcrumb */}
        <div className="px-4 py-3 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              {" / "}
              <Link to="/koleksi" className="hover:text-foreground transition-colors">Koleksi</Link>
              {" / "}
              <span className="text-foreground font-medium">{product.name}</span>
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-14">

            {/* ── LEFT: Image Section ── */}
            <div className="mb-6 lg:mb-0 lg:sticky lg:top-20 lg:self-start">
              {zoomed && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setZoomed(false)}>
                  <img src={images[currentImg]} alt="zoom" className="max-h-screen max-w-full object-contain p-4" />
                </div>
              )}

              <div className="relative overflow-hidden rounded-2xl bg-muted aspect-square">
                <img src={images[currentImg]} alt={product.name} className="w-full h-full object-cover transition-all duration-500" />
                <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition-all">
                  <ChevronLeft className="h-4 w-4 text-foreground" />
                </button>
                <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition-all">
                  <ChevronRight className="h-4 w-4 text-foreground" />
                </button>
                <button onClick={() => setZoomed(true)} className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full p-2 shadow transition-all">
                  <ZoomIn className="h-4 w-4 text-foreground" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                  {currentImg + 1} / {images.length}
                </div>
              </div>

              <div className="mt-3 grid grid-cols-4 gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`overflow-hidden rounded-xl aspect-square border-2 transition-all ${
                      currentImg === i ? "border-[#8B5E3C]" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Product Info ── */}
            <div className="space-y-6">

              {/* Nama & Harga */}
              <div>
                <span className="inline-block text-xs font-black uppercase tracking-widest text-[#8B5E3C] border border-[#8B5E3C]/30 bg-[#8B5E3C]/10 px-3 py-1 rounded-full mb-3">
                  {product.category}
                </span>
                <div className="flex items-start justify-between gap-4">
                  <h1 className="text-3xl font-black uppercase tracking-wider text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {product.name}
                  </h1>
                  <div className="flex gap-2 shrink-0">
                    <button onClick={() => setWishlist(!wishlist)} className="p-2 rounded-full border border-border hover:bg-muted transition-colors">
                      <Heart className={`h-4 w-4 ${wishlist ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
                    </button>
                    <button className="p-2 rounded-full border border-border hover:bg-muted transition-colors">
                      <Share2 className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-2xl font-bold text-[#8B5E3C]">{product.price}</p>
              </div>

              {/* Promo Banner */}
              <div className="rounded-xl overflow-hidden">
                <div className="bg-black px-4 py-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-white text-sm font-bold leading-snug">Harga sudah termasuk lensa yang dipertipis</p>
                    <p className="text-red-400 text-xs mt-0.5">*Syarat gratis lensa hanya berlaku hingga -4</p>
                  </div>
                  <div className="shrink-0 bg-white/10 rounded-lg px-3 py-2 text-center">
                    <p className="text-white text-[10px] font-black uppercase tracking-wider">Mega</p>
                    <p className="text-[#C8956A] text-[10px] font-black uppercase tracking-wider">Optik</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">Deskripsi</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {showDesc ? product.description : product.description.slice(0, 100) + (product.description.length > 100 ? "..." : "")}
                </p>
                {product.description.length > 100 && (
                  <button onClick={() => setShowDesc(!showDesc)} className="mt-1 text-xs font-bold text-[#8B5E3C] hover:underline">
                    {showDesc ? "Tampilkan Lebih Sedikit" : "Baca Selengkapnya"}
                  </button>
                )}
              </div>

              {/* Colour */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
                  Warna Frame {product.color && <span className="text-foreground">— {product.color}</span>}
                </h3>
                <select
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                >
                  <option value="">Pilih Warna</option>
                  {COLORS.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {/* Lens Option */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">Beli dengan Lensa?</h3>
                <div className="flex gap-3">
                  {(["yes", "no"] as const).map((val) => (
                    <button
                      key={val}
                      onClick={() => setWithLens(val)}
                      className={`flex-1 rounded-xl border-2 py-3 text-sm font-bold transition-all ${
                        withLens === val ? "border-[#8B5E3C] bg-[#8B5E3C]/10 text-[#8B5E3C]" : "border-border text-muted-foreground hover:border-foreground/30"
                      }`}
                    >
                      {val === "yes" ? "Ya, dengan Lensa" : "Tidak, Frame Saja"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tanya via WhatsApp */}
              <div className="rounded-xl border border-[#8B5E3C]/30 bg-[#8B5E3C]/5 p-4">
                <p className="text-xs font-black uppercase tracking-widest text-[#8B5E3C] mb-1">Tertarik dengan produk ini?</p>
                <p className="text-sm text-muted-foreground mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Hubungi kami via WhatsApp untuk tanya-tanya, konsultasi lensa, atau informasi ketersediaan produk.
                </p>
                <a
                  href={`https://wa.me/6281234567890?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#8B5E3C] text-white py-4 rounded-xl font-bold text-sm hover:bg-[#7a5234] transition-colors"
                >
                  💬 Tanya via WhatsApp
                </a>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: ShieldCheck, label: "Produk Original" },
                  { icon: Clock, label: "Respon Cepat" },
                  { icon: BadgeCheck, label: "Garansi Frame" },
                ].map((b) => (
                  <div key={b.label} className="flex flex-col items-center gap-1 rounded-xl bg-muted/50 py-3 px-2 text-center">
                    <b.icon className="h-5 w-5 text-[#8B5E3C]" />
                    <span className="text-[10px] font-medium text-muted-foreground">{b.label}</span>
                  </div>
                ))}
              </div>

              {/* Specs */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-3">Spesifikasi</h3>
                <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
                  {[
                    { label: "Material", value: SPECS.material },
                    { label: "Ukuran", value: SPECS.size },
                    { label: "Lens Width", value: SPECS.lensWidth },
                    { label: "Nose Bridge", value: SPECS.noseBridge },
                    { label: "Arm Length", value: SPECS.armLength },
                  ].map((s) => (
                    <div key={s.label} className="flex justify-between px-4 py-3">
                      <span className="text-sm text-muted-foreground">{s.label}</span>
                      <span className="text-sm font-semibold text-foreground">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frame Size Guide */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-3">Panduan Ukuran Frame</h3>
                <div className="rounded-xl border border-border bg-muted/30 p-5">
                  <svg viewBox="0 0 320 120" className="w-full mb-4" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="30" width="110" height="60" rx="20" fill="none" stroke="#8B5E3C" strokeWidth="3"/>
                    <rect x="190" y="30" width="110" height="60" rx="20" fill="none" stroke="#8B5E3C" strokeWidth="3"/>
                    <path d="M130 55 Q160 45 190 55" fill="none" stroke="#8B5E3C" strokeWidth="3"/>
                    <line x1="20" y1="55" x2="0" y2="50" stroke="#8B5E3C" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="300" y1="55" x2="320" y2="50" stroke="#8B5E3C" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="20" y1="100" x2="130" y2="100" stroke="#666" strokeWidth="1.5"/>
                    <text x="75" y="114" textAnchor="middle" fontSize="9" fill="#666">53mm</text>
                    <line x1="130" y1="20" x2="190" y2="20" stroke="#666" strokeWidth="1.5"/>
                    <text x="160" y="15" textAnchor="middle" fontSize="9" fill="#666">18mm</text>
                    <text x="160" y="70" textAnchor="middle" fontSize="9" fill="#666">152mm</text>
                  </svg>
                  <div className="space-y-2">
                    {[
                      { label: "Lens Width", desc: "Lebar satu lensa kacamata" },
                      { label: "Nose Bridge", desc: "Jarak antara dua lensa di bagian hidung" },
                      { label: "Arm Length", desc: "Panjang gagang hingga ke belakang telinga" },
                    ].map((g) => (
                      <div key={g.label} className="flex gap-2 text-sm">
                        <span className="font-bold text-foreground w-28 shrink-0">{g.label}</span>
                        <span className="text-muted-foreground">{g.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Order */}
          <div className="mt-20">
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="h-px w-16 bg-foreground/40" />
              <h2 className="text-xl font-black uppercase tracking-[0.2em] text-foreground sm:text-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                Cara Order
              </h2>
              <span className="h-px w-16 bg-foreground/40" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {HOW_TO_ORDER.map((item) => (
                <div key={item.step} className="relative rounded-2xl border border-border bg-card p-6">
                  <p className="text-4xl font-black text-[#8B5E3C]/20 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.step}
                  </p>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href={`https://wa.me/6281234567890?text=${encodeURIComponent("Halo Mega Optik! Saya ingin tanya-tanya tentang produk kacamata.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#8B5E3C] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#7a5234] transition-colors"
              >
                💬 Chat Sekarang
              </a>
            </div>
          </div>

          {/* Produk Serupa */}
          <div className="mt-20">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-8 bg-foreground/30" />
              <h2 className="text-sm font-black uppercase tracking-[0.18em] text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                Produk Serupa
              </h2>
              <span className="h-px flex-1 bg-foreground/30" />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
              {glasses
                .filter((g) => g.id !== product.id && g.category === product.category)
                .slice(0, 4)
                .concat(glasses.filter((g) => g.id !== product.id).slice(0, 4))
                .slice(0, 4)
                .map((g) => (
                  <Link key={g.id} to={`/produk/${g.id}`} className="group">
                    <div className="overflow-hidden rounded-xl aspect-square mb-3">
                      <img src={g.image} alt={g.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-0.5">{g.category}</p>
                    <p className="text-sm font-bold text-foreground">{g.name}</p>
                    <p className="text-sm text-[#8B5E3C] font-semibold">{g.price}</p>
                  </Link>
                ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetailPage;