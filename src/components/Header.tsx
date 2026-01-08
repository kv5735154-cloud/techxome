import { Search, ShoppingCart, User, Menu, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-header text-header-foreground sticky top-0 z-50">
      {/* Main Header */}
      <div className="container py-3">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">
              <span className="text-primary">Tech</span>
              <span className="text-accent">Zone</span>
            </h1>
          </div>

          {/* Delivery Location */}
          <div className="hidden md:flex items-center gap-1 text-sm cursor-pointer hover:opacity-80">
            <MapPin className="w-4 h-4" />
            <div>
              <p className="text-xs text-muted-foreground">Deliver to</p>
              <p className="font-semibold">United States</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="flex">
              <select className="bg-secondary text-secondary-foreground px-3 py-2 rounded-l-lg text-sm border-r border-border focus:outline-none">
                <option>All</option>
                <option>Electronics</option>
                <option>Phones</option>
                <option>Laptops</option>
                <option>Accessories</option>
              </select>
              <Input
                type="text"
                placeholder="Search for products..."
                className="rounded-none border-0 bg-background text-foreground flex-1"
              />
              <Button className="rounded-l-none bg-accent hover:bg-accent/90 text-accent-foreground">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Account */}
          <div className="hidden md:flex items-center gap-1 cursor-pointer hover:opacity-80">
            <User className="w-6 h-6" />
            <div className="text-sm">
              <p className="text-xs text-muted-foreground">Hello, Sign in</p>
              <p className="font-semibold">Account & Lists</p>
            </div>
          </div>

          {/* Cart */}
          <Button variant="ghost" className="relative text-header-foreground hover:bg-header/80">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
            <span className="ml-1 font-semibold hidden sm:inline">Cart</span>
          </Button>

          {/* Mobile Menu */}
          <Button variant="ghost" className="md:hidden text-header-foreground">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-header/90 border-t border-border/20">
        <div className="container py-2">
          <ul className="flex items-center gap-6 text-sm overflow-x-auto">
            <li className="flex items-center gap-1 cursor-pointer hover:text-accent transition-colors whitespace-nowrap">
              <Menu className="w-4 h-4" />
              <span className="font-semibold">All</span>
            </li>
            <li className="cursor-pointer hover:text-accent transition-colors whitespace-nowrap">Today's Deals</li>
            <li className="cursor-pointer hover:text-accent transition-colors whitespace-nowrap">Best Sellers</li>
            <li className="cursor-pointer hover:text-accent transition-colors whitespace-nowrap">New Arrivals</li>
            <li className="cursor-pointer hover:text-accent transition-colors whitespace-nowrap">Customer Service</li>
            <li className="cursor-pointer hover:text-accent transition-colors whitespace-nowrap">Gift Cards</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
