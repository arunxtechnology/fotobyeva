import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import { Button } from '@/components/ui/button';
const evaPortrait = "/assets/eva-portrait.png";
const studioImage = "/assets/studio.jpg";

const About = () => {
  const milestones = [
    { year: '1994', title: 'Journey Begins', description: 'Started professional photography in Sweden, learning the art of film and darkroom developing.' },
    { year: '2000', title: 'Virginia Roots', description: 'Relocated to Virginia Beach and opened our first boutique portrait studio.' },
    { year: '2010', title: 'Digital Evolution', description: 'Embraced digital technology while maintaining our signature high-key, timeless style.' },
    { year: '2024', title: '30 Years Strong', description: 'Celebrating three decades of capturing life\'s most precious moments.' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-ivory">
        <div className="container-elegant">
          <FadeInSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              About Eva
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
              The Artist Behind the Lens
            </h1>
            <p className="text-charcoal-light text-lg">
              A story of passion, artistry, and three decades dedicated to preserving
              life's most beautiful moments.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left">
              <div className="relative">
                <img
                  src={evaPortrait}
                  alt="Eva - Portrait Photographer"
                  className="w-full rounded-lg shadow-elegant"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary rounded-lg -z-10" />
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-8">
                From Swedish Roots to Virginia Shores
              </h2>
              <div className="space-y-6 text-charcoal-light leading-relaxed">
                <p>
                  My journey with photography began over 30 years ago in Sweden, where I first
                  fell in love with the magic of capturing light on film. Those early days in
                  the darkroom—watching images slowly emerge from the developer—taught me that
                  photography is both an art and a craft of patience.
                </p>
                <p>
                  When I moved to Virginia Beach, I brought with me a vision: to create a
                  sanctuary where families could experience portrait photography as a meaningful,
                  joyful journey rather than just a quick session.
                </p>
                <p>
                  My signature high-key style—clean, light-filled, and timeless—has evolved
                  over three decades but has always remained true to one principle: the most
                  beautiful photographs capture genuine emotion.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-blush-light">
        <div className="container-elegant">
          <FadeInSection className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-8">
              My Approach to Portraiture
            </h2>
            <blockquote className="text-xl md:text-2xl text-charcoal italic leading-relaxed mb-8">
              "Every person who walks through my studio doors has a story worth telling.
              My job isn't just to take photographs—it's to listen, to connect, and to
              reveal the beauty that's already there."
            </blockquote>
            <p className="text-charcoal-light">— Eva</p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { title: 'Patience', description: 'Great portraits take time. I never rush a session—especially with little ones.' },
              { title: 'Comfort', description: 'My studio is designed to feel like home. Relaxed subjects make the best portraits.' },
              { title: 'Connection', description: 'Before I pick up my camera, I get to know you. Authentic moments come from trust.' },
            ].map((value, index) => (
              <FadeInSection key={value.title} delay={index * 0.1}>
                <div className="bg-background rounded-lg p-8 text-center shadow-soft">
                  <h3 className="text-xl font-serif text-charcoal mb-4">{value.title}</h3>
                  <p className="text-charcoal-light">{value.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <FadeInSection className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal">
              30 Years of Artistry
            </h2>
          </FadeInSection>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <FadeInSection key={milestone.year} delay={index * 0.15}>
                <div className="flex gap-8 mb-12 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif text-xl">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-serif text-charcoal mb-2">{milestone.title}</h3>
                    <p className="text-charcoal-light">{milestone.description}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={studioImage} alt="Studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative container-elegant">
          <FadeInSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-ivory mb-6">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-ivory/80 mb-8">
              Ready to begin your portrait experience? I'd love to hear your story.
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

export default About;
