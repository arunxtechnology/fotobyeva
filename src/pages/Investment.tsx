import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Investment = () => {
  const sessions = [
    {
      name: 'Maternity',
      price: 'From $595',
      description: 'Celebrate the beauty of motherhood with a luxurious studio session.',
      includes: [
        'Pre-session consultation',
        'Studio wardrobe access',
        '60-90 minute session',
        'Same-week reveal appointment',
        '5 retouched digital images',
        'Online gallery',
      ],
    },
    {
      name: 'Newborn',
      price: 'From $795',
      description: 'Gentle, artistic portraits capturing your baby\'s first precious days.',
      includes: [
        'Pre-session consultation',
        '2-3 hour studio session',
        'Props & wraps included',
        'Sibling & family poses',
        'Same-week reveal appointment',
        '10 retouched digital images',
      ],
      popular: true,
    },
    {
      name: 'Family',
      price: 'From $495',
      description: 'Create lasting memories with portraits that celebrate your connection.',
      includes: [
        'Pre-session consultation',
        '45-60 minute session',
        'Wardrobe guidance',
        'Same-week reveal appointment',
        '5 retouched digital images',
        'Online gallery',
      ],
    },
    {
      name: 'Professional',
      price: 'From $395',
      description: 'Polish your personal brand with stunning professional headshots.',
      includes: [
        'Pre-session consultation',
        '30-45 minute session',
        'Outfit changes (2-3)',
        'Same-day digital proofs',
        '3 retouched digital images',
        'LinkedIn optimization',
      ],
    },
  ];

  const faqs = [
    {
      question: 'When should I book my newborn session?',
      answer: 'We recommend booking during your second trimester to secure your spot. Newborn sessions are best done within the first 14 days when babies are still curly and sleepy.',
    },
    {
      question: 'What should I wear to my session?',
      answer: 'We provide detailed wardrobe guidance after booking, and our studio has a curated collection of maternity gowns, wraps, and accessories for your use.',
    },
    {
      question: 'How long until I see my photos?',
      answer: 'We schedule your reveal appointment within one week of your session. At the reveal, you\'ll view your edited images and select your favorites and products.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes! We offer flexible payment plans for all sessions and product orders. A retainer is required to book, with the balance due at your reveal appointment.',
    },
    {
      question: 'What if my baby won\'t cooperate?',
      answer: 'Patience is our specialty! We build plenty of time for feeding, soothing, and outfit changes. We work at baby\'s pace, not ours.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-ivory">
        <div className="container-elegant">
          <FadeInSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Investment
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
              Your Portrait Experience
            </h1>
            <p className="text-charcoal-light text-lg">
              An investment in professional portraits is an investment in your family's 
              legacy. Every session includes a full boutique experience.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Sessions Grid */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sessions.map((session, index) => (
              <FadeInSection key={session.name} delay={index * 0.1}>
                <div
                  className={`relative rounded-2xl p-8 h-full ${
                    session.popular
                      ? 'bg-charcoal text-ivory'
                      : 'bg-card shadow-soft'
                  }`}
                >
                  {session.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-sm px-4 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current" /> Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif mb-2">{session.name}</h3>
                    <p className={`text-sm mb-4 ${session.popular ? 'text-ivory/70' : 'text-charcoal-light'}`}>
                      {session.description}
                    </p>
                    <p className="text-3xl font-serif">{session.price}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {session.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${session.popular ? 'text-primary' : 'text-primary'}`} />
                        <span className={`text-sm ${session.popular ? 'text-ivory/90' : 'text-charcoal-light'}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={session.popular ? 'hero' : 'outline'}
                    className="w-full"
                    asChild
                  >
                    <Link to="/contact">Inquire Now</Link>
                  </Button>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section-padding bg-secondary">
        <div className="container-elegant">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-3xl font-serif text-charcoal mb-4">
              Heirloom Products
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Transform your portraits into tangible treasures. All products are 
              professionally printed and hand-finished to museum quality standards.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Gallery Wraps', price: 'From $295' },
              { name: 'Framed Wall Art', price: 'From $445' },
              { name: 'Heirloom Albums', price: 'From $795' },
              { name: 'Digital Collections', price: 'From $995' },
            ].map((product, index) => (
              <FadeInSection key={product.name} delay={index * 0.1}>
                <div className="bg-background rounded-lg p-6 text-center">
                  <h3 className="font-serif text-lg text-charcoal mb-2">{product.name}</h3>
                  <p className="text-primary font-medium">{product.price}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-3xl font-serif text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
          </FadeInSection>

          <FadeInSection className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card rounded-lg px-6 border-none shadow-soft"
                >
                  <AccordionTrigger className="text-left font-medium text-charcoal hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-charcoal-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blush-light">
        <div className="container-elegant">
          <FadeInSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
              Ready to Begin?
            </h2>
            <p className="text-charcoal-light mb-8">
              Schedule your complimentary consultation and let's discuss your 
              vision for your portrait session.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Book Your Session</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investment;
