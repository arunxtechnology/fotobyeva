import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FadeInSection from './FadeInSection';
const studioImage = '/assets/studio.jpg';

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={studioImage}
          alt="Photography Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative container-elegant">
        <FadeInSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ivory mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-ivory/80 text-lg mb-10 max-w-xl mx-auto">
            Let's capture the moments that matter most. Schedule your complimentary
            consultation and begin your portrait experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Book Your Session</Link>
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              className="border-ivory text-ivory hover:bg-ivory hover:text-charcoal"
              asChild
            >
              <Link to="/investment">View Investment</Link>
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
