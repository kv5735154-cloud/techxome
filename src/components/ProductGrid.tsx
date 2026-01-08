import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max - 256GB - Natural Titanium",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    price: 1099,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 12453,
    isPrime: true,
    discount: 15,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra - 512GB - Titanium Black",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
    price: 1199,
    originalPrice: 1399,
    rating: 4.7,
    reviews: 8934,
    isPrime: true,
    discount: 14,
  },
  {
    id: 3,
    name: "MacBook Pro 16\" M3 Max - 48GB RAM - 1TB SSD",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    price: 2999,
    originalPrice: 3499,
    rating: 4.9,
    reviews: 5621,
    isPrime: true,
    discount: 14,
  },
  {
    id: 4,
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
    price: 298,
    originalPrice: 399,
    rating: 4.8,
    reviews: 23456,
    isPrime: true,
    discount: 25,
  },
  {
    id: 5,
    name: "Apple Watch Ultra 2 - GPS + Cellular - 49mm Titanium",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
    price: 749,
    originalPrice: 849,
    rating: 4.6,
    reviews: 4532,
    isPrime: true,
    discount: 12,
  },
  {
    id: 6,
    name: "iPad Pro 12.9\" M2 - 256GB WiFi - Space Gray",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    price: 999,
    originalPrice: 1199,
    rating: 4.7,
    reviews: 7823,
    isPrime: true,
    discount: 17,
  },
  {
    id: 7,
    name: "DJI Mini 4 Pro Drone - 4K HDR Video - 34min Flight",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=400&fit=crop",
    price: 759,
    originalPrice: 899,
    rating: 4.5,
    reviews: 3421,
    isPrime: true,
    discount: 16,
  },
  {
    id: 8,
    name: "PlayStation 5 Console - Digital Edition Bundle",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
    price: 449,
    originalPrice: 499,
    rating: 4.8,
    reviews: 45678,
    isPrime: true,
    discount: 10,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Today's Best Deals</h2>
          <a href="#" className="text-primary hover:underline font-medium">
            See all deals →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
