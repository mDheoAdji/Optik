import type { Product } from "@/data/products";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/produk/${product.id}`}>
      <Card className="group overflow-hidden border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <CardContent className="p-2 sm:p-4">
          <div className="mb-1 sm:mb-2 flex items-center justify-between gap-1">
            <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 py-0.5">
              {product.category}
            </Badge>
            {product.color && (
              <span className="text-[10px] sm:text-xs text-muted-foreground truncate">
                {product.color}
              </span>
            )}
          </div>
          <h3 className="mb-0.5 sm:mb-1 font-['Playfair_Display'] text-sm sm:text-lg font-semibold text-foreground leading-tight line-clamp-1">
            {product.name}
          </h3>
          <p className="mb-2 sm:mb-3 text-xs sm:text-sm text-muted-foreground line-clamp-2 hidden sm:block">
            {product.description}
          </p>
          {product.price && (
            <p className="text-sm sm:text-base font-bold text-accent">{product.price}</p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;