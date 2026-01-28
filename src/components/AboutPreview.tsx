import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FadeInSection from './FadeInSection';
const evaPortrait = '/assets/eva-portrait.png';

const AboutPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-elegant">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeInSection direction="left">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={evaPortrait}
                  alt="Eva - Professional Portrait Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-medium">
                <span className="block text-3xl font-serif font-bold">30+</span>
                <span className="text-sm">Years</span>
              </div>
            </div>
          </FadeInSection>

          {/* Content */}
          <FadeInSection direction="right" delay={0.2}>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Meet the Artist
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6">
              Hello, I'm Eva
            </h2>
            <div className="space-y-4 text-charcoal-light leading-relaxed mb-8">
              <p>
                With Swedish roots and over 30 years of mastery behind the lens, I've dedicated
                my life to capturing the essence of life's most precious moments. My high-key,
                clean light approach creates timeless portraits that feel both modern and eternal.
              </p>
              <p>
                Every session is an intimate experience. I believe in patience, comfort, and
                genuine connection—because the most beautiful photographs come from moments
                of true emotion.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" asChild>
                <Link to="/about">Read My Story</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/studio">Visit Our Studio</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
