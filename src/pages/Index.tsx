import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandMarquee from "@/components/BrandMarquee";
import SolutionsSection from "@/components/SolutionsSection";
import ProductsSection from "@/components/ProductsSection";
import HowItWorks from "@/components/HowItWorks";
import CompanyJourney from "@/components/CompanyJourney";
import ImpactSection from "@/components/ImpactSection";
import GrowTogether from "@/components/GrowTogether";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BrandMarquee />
      <SolutionsSection />
      <ProductsSection />
      <HowItWorks />
      <div id="journey">
        <CompanyJourney />
      </div>
      <ImpactSection />
      <GrowTogether />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
