import { glasses } from "@/data/products";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const GlassesSection = () => {
  const featured = glasses.slice(0, 6);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          {/* Judul dengan garis kiri-kanan */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="h-px w-16 bg-foreground/40" />
            <h2
              className="text-2xl font-black uppercase tracking-[0.2em] text-foreground sm:text-3xl"
              style={{ fontFamily: "'Inter', 'DM Sans', sans-serif" }}
            >
              Pilihan Kacamata
            </h2>
            <span className="h-px w-16 bg-foreground/40" />
          </div>
          <p
            className="mx-auto max-w-xl text-sm text-muted-foreground italic"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Temukan kacamata yang sempurna dari berbagai kategori: Fashion, Minus, Anti Radiasi, Komputer, dan Anak.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/koleksi">
              Lihat Semua Koleksi <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GlassesSection;