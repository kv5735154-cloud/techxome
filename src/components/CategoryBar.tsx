import { Smartphone, Laptop, Headphones, Watch, Camera, Gamepad2, Tv, Battery } from "lucide-react";

const categories = [
  { name: "Phones", icon: Smartphone },
  { name: "Laptops", icon: Laptop },
  { name: "Headphones", icon: Headphones },
  { name: "Watches", icon: Watch },
  { name: "Cameras", icon: Camera },
  { name: "Gaming", icon: Gamepad2 },
  { name: "TVs", icon: Tv },
  { name: "Accessories", icon: Battery },
];

const CategoryBar = () => {
  return (
    <section className="py-6 bg-card border-b border-border">
      <div className="container">
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className="flex flex-col items-center gap-2 min-w-[80px] p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200 group"
              >
                <div className="p-3 rounded-full bg-background group-hover:bg-primary-foreground/10 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium whitespace-nowrap">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryBar;
