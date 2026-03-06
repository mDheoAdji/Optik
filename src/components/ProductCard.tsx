import type { Product } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          {product.color && (
            <span className="text-xs text-muted-foreground">{product.color}</span>
          )}
        </div>
        <h3 className="mb-1 font-['Playfair_Display'] text-lg font-semibold text-foreground">
          {product.name}
        </h3>
        <p className="mb-3 text-sm text-muted-foreground">{product.description}</p>
        {product.price && (
          <p className="text-base font-bold text-accent">{product.price}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
