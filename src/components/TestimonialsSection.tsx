import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from './FadeInSection';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    type: 'Maternity Session',
    text: 'Eva has the most incredible gift for making you feel beautiful and at ease. My maternity photos are absolute treasures—they capture such pure emotion. I cry happy tears every time I look at them.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jennifer & Michael Thompson',
    type: 'Family Portrait',
    text: 'We\'ve been coming to Eva for 10 years now, from our first baby to our family of five. Her patience with children is remarkable, and she always captures the genuine connections between us.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amanda Rodriguez',
    type: 'Newborn Session',
    text: 'I was nervous about our newborn shoot, but Eva\'s studio felt so warm and safe. She handled our baby with such care and expertise. The photos are like pieces of art—we display them throughout our home.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Dr. Katherine Wells',
    type: 'Professional Headshots',
    text: 'As a physician, I needed headshots that conveyed both professionalism and approachability. Eva nailed it perfectly. She made the process enjoyable and the results exceeded my expectations.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-blush-light">
      <div className="container-elegant">
        <FadeInSection className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Client Love
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6">
            What Clients Say
          </h2>
          <p className="text-charcoal-light max-w-2xl mx-auto">
            Every portrait session creates lasting memories. Here's what our clients 
            have to say about their experience with Foto by Eva.
          </p>
        </FadeInSection>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-2xl p-8 md:p-12 shadow-elegant text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-serif text-xl text-charcoal mb-1">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-primary text-sm">
                  {testimonials[currentIndex].type}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-background shadow-soft flex items-center justify-center text-charcoal hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-primary' : 'bg-charcoal/20 hover:bg-charcoal/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-background shadow-soft flex items-center justify-center text-charcoal hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
