import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    type: 'Maternity Session',
    text: 'Eva has the most incredible gift for making you feel beautiful and at ease. My maternity photos are absolute treasures—they capture such pure emotion. I cry happy tears every time I look at them.',
    rating: 5,
    location: 'Virginia Beach, VA',
  },
  {
    id: 2,
    name: 'Jennifer & Michael Thompson',
    type: 'Family Portrait',
    text: 'We\'ve been coming to Eva for 10 years now, from our first baby to our family of five. Her patience with children is remarkable, and she always captures the genuine connections between us. Our walls are covered with her beautiful work.',
    rating: 5,
    location: 'Norfolk, VA',
  },
  {
    id: 3,
    name: 'Amanda Rodriguez',
    type: 'Newborn Session',
    text: 'I was nervous about our newborn shoot, but Eva\'s studio felt so warm and safe. She handled our baby with such care and expertise. The photos are like pieces of art—we display them throughout our home and they bring us so much joy.',
    rating: 5,
    location: 'Chesapeake, VA',
  },
  {
    id: 4,
    name: 'Dr. Katherine Wells',
    type: 'Professional Headshots',
    text: 'As a physician, I needed headshots that conveyed both professionalism and approachability. Eva nailed it perfectly. She made the process enjoyable and the results exceeded my expectations. My new photos have already improved my practice\'s online presence.',
    rating: 5,
    location: 'Virginia Beach, VA',
  },
  {
    id: 5,
    name: 'Emily Chen',
    type: 'Women\'s Portrait',
    text: 'At 50, I never thought I\'d feel confident in front of a camera. Eva changed that completely. The experience was empowering, and the photos... I didn\'t know I could look like that. She sees beauty others miss.',
    rating: 5,
    location: 'Hampton, VA',
  },
  {
    id: 6,
    name: 'The Martinez Family',
    type: 'Multi-Generation',
    text: 'Getting four generations together for a portrait session was a logistical challenge, but Eva made it magical. She was patient with our elderly parents and playful with the little ones. These photos are now our most prized possessions.',
    rating: 5,
    location: 'Newport News, VA',
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-ivory">
        <div className="container-elegant">
          <FadeInSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Client Love
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
              Kind Words
            </h1>
            <p className="text-charcoal-light text-lg">
              The greatest honor is hearing how our portraits become treasured 
              family heirlooms. Here's what our clients have to say.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeInSection key={testimonial.id} delay={index * 0.1}>
                <div className="bg-card rounded-2xl p-8 shadow-soft h-full flex flex-col">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-blush-light mb-4" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Text */}
                  <blockquote className="text-charcoal-light leading-relaxed mb-6 flex-grow">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="font-serif text-lg text-charcoal mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-primary text-sm mb-1">{testimonial.type}</p>
                    <p className="text-charcoal-light text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blush-light">
        <div className="container-elegant">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1000+', label: 'Happy Families' },
              { number: '30+', label: 'Years Experience' },
              { number: '5.0', label: 'Star Rating' },
              { number: '100%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <FadeInSection key={stat.label} delay={index * 0.1}>
                <div>
                  <p className="text-4xl md:text-5xl font-serif text-primary mb-2">
                    {stat.number}
                  </p>
                  <p className="text-charcoal-light">{stat.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-elegant">
          <FadeInSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
              Join Our Family of Happy Clients
            </h2>
            <p className="text-charcoal-light mb-8">
              Ready to create your own portrait experience? We'd love to hear from you.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Start Your Journey</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
