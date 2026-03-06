import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { glasses, colorCategories } from "@/data/products";
import { Badge } from "@/components/ui/badge";

const WarnaPage = () => {
  const { warna } = useParams<{ warna: string }>();
  const colorInfo = colorCategories.find((c) => c.slug === warna);
  const filtered = glasses.filter(
    (g) => g.color?.toLowerCase() === colorInfo?.name.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h1 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
              Kacamata Warna{" "}
              <span className="text-accent">{colorInfo?.name || warna}</span>
            </h1>
            <p className="text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Pilih warna frame favorit Anda
            </p>
          </div>

          {/* Color chips */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {colorCategories.map((c) => (
              <Link key={c.slug} to={`/warna/${c.slug}`}>
                <Badge
                  variant={c.slug === warna ? "default" : "secondary"}
                  className={`cursor-pointer px-4 py-2 text-sm transition-colors ${
                    c.slug === warna ? "bg-accent text-accent-foreground" : ""
                  }`}
                >
                  <span
                    className="mr-2 inline-block h-3 w-3 rounded-full border border-border"
                    style={{ backgroundColor: c.hex }}
                  />
                  {c.name}
                </Badge>
              </Link>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-20" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Belum ada produk untuk warna ini.
            </p>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WarnaPage;