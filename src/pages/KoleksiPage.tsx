import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { glasses } from "@/data/products";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const categories = ["Semua", "Fashion", "Minus", "Anti Radiasi", "Komputer", "Anak"];

const KoleksiPage = () => {
  const [active, setActive] = useState("Semua");

  const filtered = active === "Semua" ? glasses : glasses.filter((g) => g.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h1 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">Koleksi Kacamata</h1>
            <p className="text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Jelajahi semua koleksi kacamata kami
            </p>
          </div>

          {/* Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={active === cat ? "default" : "secondary"}
                className={cn(
                  "cursor-pointer px-4 py-2 text-sm transition-colors",
                  active === cat && "bg-accent text-accent-foreground"
                )}
                onClick={() => setActive(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default KoleksiPage;