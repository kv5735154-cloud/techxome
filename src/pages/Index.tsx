import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategoryBar from "@/components/CategoryBar";
import ProductGrid from "@/components/ProductGrid";
import DealsSection from "@/components/DealsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <CategoryBar />
        <DealsSection />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
