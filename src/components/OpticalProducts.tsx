import { contactLenses, accessories, lensProducts } from "@/data/products";
import ProductCard from "./ProductCard";

const OpticalProducts = () => {
  const sections = [
    { title: "Lensa Kontak", data: contactLenses },
    { title: "Lensa Kacamata", data: lensProducts },
    { title: "Aksesoris Kacamata", data: accessories },
  ];

  return (
    <section className="bg-muted/50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          {/* Judul dengan garis kiri-kanan */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="h-px w-16 bg-foreground/40" />
            <h2
              className="text-xl font-black uppercase tracking-[0.2em] text-foreground sm:text-2xl"
              style={{ fontFamily: "'Inter', 'DM Sans', sans-serif" }}
            >
              Produk Optik Lainnya
            </h2>
            <span className="h-px w-16 bg-foreground/40" />
          </div>
          <p
            className="mx-auto max-w-xl text-sm text-muted-foreground italic"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Lengkapi kebutuhan optik Anda dengan lensa kontak, lensa kacamata, dan aksesoris berkualitas.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.title} className="mb-14 last:mb-0">
            {/* Sub-judul section dengan garis */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-foreground/30" />
              <h3
                className="text-sm font-black uppercase tracking-[0.18em] text-foreground"
                style={{ fontFamily: "'Inter', 'DM Sans', sans-serif" }}
              >
                {section.title}
              </h3>
              <span className="h-px flex-1 bg-foreground/30" />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
              {section.data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpticalProducts;