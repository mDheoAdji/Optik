export interface Product {
  id: string;
  name: string;
  category: string;
  color?: string;
  description: string;
  image: string;
  price?: string;
}

export const glasses: Product[] = [
  {
    id: "g1",
    name: "Aurora Classic",
    category: "Fashion",
    color: "Hitam",
    description: "Frame elegan untuk tampilan profesional sehari-hari",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
    price: "Rp 450.000",
  },
  {
    id: "g2",
    name: "Vision Pro",
    category: "Minus",
    color: "Coklat",
    description: "Kacamata minus ringan dengan lensa premium",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop",
    price: "Rp 550.000",
  },
  {
    id: "g3",
    name: "Shield Guard",
    category: "Anti Radiasi",
    color: "Transparan",
    description: "Proteksi mata dari radiasi layar digital",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
    price: "Rp 380.000",
  },
  {
    id: "g4",
    name: "Digi Comfort",
    category: "Komputer",
    color: "Biru",
    description: "Nyaman dipakai berlama-lama di depan komputer",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop",
    price: "Rp 420.000",
  },
  {
    id: "g5",
    name: "Junior Flex",
    category: "Anak",
    color: "Biru",
    description: "Frame fleksibel dan aman untuk anak-anak",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
    price: "Rp 300.000",
  },
  {
    id: "g6",
    name: "Metro Round",
    category: "Fashion",
    color: "Abu-abu",
    description: "Desain bulat retro yang trendi dan stylish",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop",
    price: "Rp 480.000",
  },
  {
    id: "g7",
    name: "Clear View",
    category: "Minus",
    color: "Hitam",
    description: "Frame tipis dengan lensa minus ultra-clear",
    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=300&fit=crop",
    price: "Rp 520.000",
  },
  {
    id: "g8",
    name: "Elegant Cat Eye",
    category: "Fashion",
    color: "Coklat",
    description: "Desain cat-eye modern untuk wanita stylish",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=300&fit=crop",
    price: "Rp 500.000",
  },
  {
    id: "g9",
    name: "Tech Shield",
    category: "Anti Radiasi",
    color: "Hitam",
    description: "Anti radiasi blue-light untuk pekerja digital",
    image: "https://images.unsplash.com/photo-1614715838608-dd527c46231d?w=400&h=300&fit=crop",
    price: "Rp 400.000",
  },
  {
    id: "g10",
    name: "Kiddo Sport",
    category: "Anak",
    color: "Abu-abu",
    description: "Kacamata sporty dan tahan banting untuk anak aktif",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400&h=300&fit=crop",
    price: "Rp 280.000",
  },
];

export const contactLenses: Product[] = [
  {
    id: "cl1",
    name: "DailyFresh Clear",
    category: "Softlens Harian",
    description: "Softlens harian sekali pakai, nyaman sepanjang hari",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
    price: "Rp 150.000",
  },
  {
    id: "cl2",
    name: "MonthlyWear Plus",
    category: "Softlens Bulanan",
    description: "Softlens bulanan dengan kadar air tinggi",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
    price: "Rp 200.000",
  },
  {
    id: "cl3",
    name: "ColorPop Hazel",
    category: "Softlens Warna",
    description: "Softlens warna hazel untuk tampilan natural",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop",
    price: "Rp 180.000",
  },
];

export const accessories: Product[] = [
  {
    id: "a1",
    name: "Premium Case",
    category: "Kotak Kacamata",
    description: "Kotak kacamata kulit sintetis premium",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
    price: "Rp 75.000",
  },
  {
    id: "a2",
    name: "Sporty Strap",
    category: "Tali Kacamata",
    description: "Tali kacamata sporty anti slip",
    image: "https://images.unsplash.com/photo-1483120335023-22790ab58598?w=400&h=300&fit=crop",
    price: "Rp 35.000",
  },
  {
    id: "a3",
    name: "MicroClean Cloth",
    category: "Lap Microfiber",
    description: "Lap microfiber ultra halus anti gores",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop",
    price: "Rp 25.000",
  },
  {
    id: "a4",
    name: "LensClear Spray",
    category: "Cairan Pembersih",
    description: "Cairan pembersih lensa anti-fog 100ml",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
    price: "Rp 45.000",
  },
];

export const lensProducts: Product[] = [
  {
    id: "l1",
    name: "AntiRad Lens",
    category: "Lensa Anti Radiasi",
    description: "Lensa anti radiasi untuk perlindungan mata",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
    price: "Rp 250.000",
  },
  {
    id: "l2",
    name: "BlueCut Pro",
    category: "Lensa Blue Light",
    description: "Lensa blue-light filter untuk pengguna gadget",
    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=300&fit=crop",
    price: "Rp 300.000",
  },
  {
    id: "l3",
    name: "PhotoAdapt",
    category: "Lensa Photochromic",
    description: "Lensa otomatis berubah gelap di bawah sinar matahari",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=300&fit=crop",
    price: "Rp 450.000",
  },
  {
    id: "l4",
    name: "ProView Multi",
    category: "Lensa Progressive",
    description: "Lensa progressive untuk penglihatan jauh dan dekat",
    image: "https://images.unsplash.com/photo-1614715838608-dd527c46231d?w=400&h=300&fit=crop",
    price: "Rp 600.000",
  },
];

export const colorCategories = [
  { slug: "hitam", name: "Hitam", hex: "#1a1a1a" },
  { slug: "coklat", name: "Coklat", hex: "#8B4513" },
  { slug: "transparan", name: "Transparan", hex: "#e0e0e0" },
  { slug: "biru", name: "Biru", hex: "#2563eb" },
  { slug: "abu-abu", name: "Abu-abu", hex: "#6b7280" },
];

export const services = [
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
