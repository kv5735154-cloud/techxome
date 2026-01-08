import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const deals = [
  {
    title: "Smartphones",
    subtitle: "Up to 40% off",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=200&fit=crop",
    bg: "from-primary/20 to-primary/5",
  },
  {
    title: "Laptops",
    subtitle: "Starting $599",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
    bg: "from-accent/20 to-accent/5",
  },
  {
    title: "Audio",
    subtitle: "Deals under $99",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
    bg: "from-success/20 to-success/5",
  },
  {
    title: "Gaming",
    subtitle: "Save big today",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=300&h=200&fit=crop",
    bg: "from-destructive/20 to-destructive/5",
  },
];

const DealsSection = () => {
  return (
    <section className="py-8 bg-secondary/50">
      <div className="container">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-destructive" />
          <h2 className="text-2xl font-bold text-foreground">Limited Time Deals</h2>
          <span className="ml-auto text-sm text-muted-foreground">
            Ends in: <span className="font-mono font-bold text-destructive">12:34:56</span>
          </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deals.map((deal, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${deal.bg} p-6 group cursor-pointer`}
            >
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-foreground mb-1">{deal.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{deal.subtitle}</p>
                <Button variant="link" className="p-0 h-auto text-primary font-semibold">
                  Shop now <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <img
                src={deal.image}
                alt={deal.title}
                className="absolute right-0 bottom-0 w-32 h-32 object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
