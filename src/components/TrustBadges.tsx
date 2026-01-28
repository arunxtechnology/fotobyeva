import { Award, Shield, Heart, Camera } from 'lucide-react';
import FadeInSection from './FadeInSection';

const badges = [
  {
    icon: Camera,
    title: '30+ Years',
    description: 'Professional Experience',
  },
  {
    icon: Award,
    title: 'Award-Worthy',
    description: 'Gallery Quality Portraits',
  },
  {
    icon: Heart,
    title: 'Personalized',
    description: 'Boutique Experience',
  },
  {
    icon: Shield,
    title: 'Professional',
    description: 'Full-Service Studio',
  },
];

const TrustBadges = () => {
  return (
    <section className="py-12 bg-secondary border-y border-border">
      <div className="container-elegant">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <FadeInSection key={badge.title} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-1">{badge.title}</h3>
                <p className="text-charcoal-light text-sm">{badge.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
