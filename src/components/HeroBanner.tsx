import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-header to-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="container relative py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-header-foreground animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" />
              Flash Sale - Limited Time
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Up to <span className="text-accent">50% Off</span> on Electronics
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-md">
              Discover incredible deals on the latest smartphones, laptops, and accessories. Free shipping on orders over $50.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Shop Now
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-header-foreground/30 text-header-foreground hover:bg-header-foreground/10">
                View All Deals
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
                alt="Featured Phone"
                className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
