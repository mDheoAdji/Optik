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
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            Pilihan Kacamata
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Temukan kacamata yang sempurna dari berbagai kategori: Fashion, Minus, Anti Radiasi, Komputer, dan Anak.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
