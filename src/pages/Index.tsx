import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import TrustBadges from '@/components/TrustBadges';
import AboutPreview from '@/components/AboutPreview';
import FeaturedGalleries from '@/components/FeaturedGalleries';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServiceAreas from '@/components/ServiceAreas';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSlider />
        <TrustBadges />
        <AboutPreview />
        <FeaturedGalleries />
        <TestimonialsSection />
        <ServiceAreas />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
