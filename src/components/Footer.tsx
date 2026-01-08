import { Facebook, Twitter, Instagram, Youtube, CreditCard, Truck, Shield, Headphones } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-header text-header-foreground">
      {/* Features Bar */}
      <div className="border-b border-border/20">
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Truck className="w-8 h-8 text-accent" />
              <div>
                <p className="font-semibold">Free Shipping</p>
                <p className="text-sm text-muted-foreground">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-accent" />
              <div>
                <p className="font-semibold">Secure Payment</p>
                <p className="text-sm text-muted-foreground">100% protected</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="w-8 h-8 text-accent" />
              <div>
                <p className="font-semibold">Easy Returns</p>
                <p className="text-sm text-muted-foreground">30 day returns</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Headphones className="w-8 h-8 text-accent" />
              <div>
                <p className="font-semibold">24/7 Support</p>
                <p className="text-sm text-muted-foreground">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-accent cursor-pointer">About TechZone</li>
              <li className="hover:text-accent cursor-pointer">Careers</li>
              <li className="hover:text-accent cursor-pointer">Press Releases</li>
              <li className="hover:text-accent cursor-pointer">TechZone Science</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Make Money with Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-accent cursor-pointer">Sell products</li>
              <li className="hover:text-accent cursor-pointer">Become an Affiliate</li>
              <li className="hover:text-accent cursor-pointer">Advertise Your Products</li>
              <li className="hover:text-accent cursor-pointer">Self-Publish</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-accent cursor-pointer">Your Account</li>
              <li className="hover:text-accent cursor-pointer">Your Orders</li>
              <li className="hover:text-accent cursor-pointer">Shipping Rates</li>
              <li className="hover:text-accent cursor-pointer">Returns & Replacements</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-secondary/20 hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary/20 hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary/20 hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary/20 hover:bg-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 TechZone. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent">Privacy Policy</a>
              <a href="#" className="hover:text-accent">Terms of Use</a>
              <a href="#" className="hover:text-accent">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
