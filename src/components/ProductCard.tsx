import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  isPrime?: boolean;
  discount?: number;
}

const ProductCard = ({
  name,
  image,
  price,
  originalPrice,
  rating,
  reviews,
  isPrime,
  discount,
}: ProductCardProps) => {
  return (
    <div className="product-card group relative">
      {/* Discount Badge */}
      {discount && (
        <span className="deal-badge absolute top-3 left-3 z-10">
          {discount}% OFF
        </span>
      )}
      
      {/* Wishlist Button */}
      <button className="absolute top-3 right-3 z-10 p-2 rounded-full bg-card/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card">
        <Heart className="w-5 h-5 text-muted-foreground hover:text-destructive transition-colors" />
      </button>

      {/* Image */}
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-card-foreground line-clamp-2 mb-2 min-h-[48px]">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-rating text-rating"
                    : "text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviews.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-bold text-card-foreground">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        {/* Prime Badge */}
        {isPrime && (
          <div className="flex items-center gap-1 mb-3">
            <span className="prime-badge">✓ FREE Delivery</span>
          </div>
        )}

        {/* Add to Cart */}
        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
