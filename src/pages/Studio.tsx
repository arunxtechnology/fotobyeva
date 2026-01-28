import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import { Button } from '@/components/ui/button';
import { Baby, Sparkles, Shield, Coffee } from 'lucide-react';
const studioImage = '/assets/studio.jpg';

const Studio = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Spacious & Bright',
      description: 'Natural light floods our 1,500 sq ft studio, creating the perfect environment for high-key photography.',
    },
    {
      icon: Baby,
      title: 'Child-Friendly',
      description: 'Designed with little ones in mind—soft surfaces, safe props, and a patient, gentle approach.',
    },
    {
      icon: Shield,
      title: 'Safe & Private',
      description: 'A secure, private space where you can relax and be yourself without outside distractions.',
    },
    {
      icon: Coffee,
      title: 'Comfort First',
      description: 'Comfortable waiting area, refreshments, and private changing room for your convenience.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img
          src={studioImage}
          alt="Foto by Eva Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 to-charcoal/60 flex items-center justify-center">
          <div className="text-center">
            <FadeInSection>
              <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
                Our Space
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ivory mb-4">
                Welcome to Our Studio
              </h1>
              <p className="text-ivory/90 text-lg max-w-2xl mx-auto px-4">
                A sanctuary designed for comfort, creativity, and capturing life's most precious moments.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FadeInSection key={feature.title} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-blush-light flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif text-charcoal mb-3">{feature.title}</h3>
                  <p className="text-charcoal-light">{feature.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Description */}
      <section className="section-padding bg-ivory">
        <div className="container-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
                The Experience
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
                More Than a Photo Studio
              </h2>
              <div className="space-y-4 text-charcoal-light">
                <p>
                  When you step into our Virginia Beach studio, you're entering a space
                  thoughtfully designed for one purpose: to help you feel comfortable,
                  confident, and ready to create beautiful memories.
                </p>
                <p>
                  Our open-concept studio features soaring ceilings, abundant natural
                  light, and a carefully curated collection of props, backdrops, and
                  wardrobe options—everything you need for a seamless session.
                </p>
                <p>
                  For maternity and boudoir sessions, we offer a private changing area
                  and a selection of beautiful gowns and wraps. For newborn sessions,
                  we maintain a cozy temperature and have every safety precaution in place.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.2}>
              <div className="bg-blush-light rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-serif text-charcoal mb-6">What to Expect</h3>
                <ul className="space-y-4">
                  {[
                    'Complimentary parking at our door',
                    'Private changing room with robes',
                    'Curated wardrobe for maternity & women',
                    'Extensive newborn prop collection',
                    'Comfortable waiting area with refreshments',
                    'Climate-controlled for baby comfort',
                    'Viewing gallery for product selection',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-charcoal-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-elegant">
          <FadeInSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
              Come Visit Us
            </h2>
            <p className="text-charcoal-light mb-8">
              Schedule a complimentary studio tour and consultation. We'd love to show
              you around and discuss your vision for your portrait session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/investment">View Investment</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Studio;
