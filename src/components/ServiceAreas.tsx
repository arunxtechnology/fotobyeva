import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FadeInSection from './FadeInSection';

const ServiceAreas = () => {
  const areas = [
    'Virginia Beach',
    'Norfolk',
    'Chesapeake',
    'Suffolk',
    'Portsmouth',
    'Hampton',
    'Newport News',
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-elegant">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Service Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
              Proudly Serving Hampton Roads
            </h2>
            <p className="text-charcoal-light mb-10">
              Our studio is conveniently located in Virginia Beach, welcoming families 
              from throughout the Hampton Roads region.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {areas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-secondary rounded-full text-sm text-charcoal"
                >
                  {area}
                </span>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule Your Visit</Link>
            </Button>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
