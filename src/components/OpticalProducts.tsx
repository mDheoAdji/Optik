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
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            Produk Optik Lainnya
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Lengkapi kebutuhan optik Anda dengan lensa kontak, lensa kacamata, dan aksesoris berkualitas.
          </p>
        </div>
        {sections.map((section) => (
          <div key={section.title} className="mb-14 last:mb-0">
            <h3 className="mb-6 text-2xl font-semibold text-foreground">
              {section.title}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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