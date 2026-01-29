import { Link } from 'react-router-dom';
import FadeInSection from './FadeInSection';

import { FEATURED_GALLERIES } from '@/config/images';

const galleries = FEATURED_GALLERIES;

const FeaturedGalleries = () => {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-elegant">
        <FadeInSection className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6">
            Featured Galleries
          </h2>
          <p className="text-charcoal-light max-w-2xl mx-auto">
            Every session is a unique story. Explore our collections to see the artistry
            and emotion we bring to every portrait.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {galleries.map((gallery, index) => (
            <FadeInSection key={gallery.title} delay={index * 0.1}>
              <Link
                to={gallery.href}
                className="group block relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img
                  src={gallery.image}
                  alt={gallery.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-serif text-ivory mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {gallery.title}
                  </h3>
                  <p className="text-ivory/80 text-sm md:text-base opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {gallery.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-primary text-sm font-medium opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    View Gallery →
                  </span>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection className="text-center mt-12">
          <Link
            to="/galleries"
            className="inline-flex items-center text-primary font-medium hover:text-blush-dark transition-colors duration-300 link-elegant"
          >
            Explore All Galleries →
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturedGalleries;
