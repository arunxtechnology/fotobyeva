import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroMaternity = '/assets/hero-maternity.jpg';
const galleryNewborn = '/assets/gallery-newborn.jpg';
const galleryFamily = '/assets/gallery-family.jpg';
const galleryWomen = '/assets/gallery-women.jpg';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'maternity', name: 'Maternity' },
  { id: 'newborns', name: 'Newborns' },
  { id: 'families', name: 'Families' },
  { id: 'women', name: 'Women' },
  { id: 'headshots', name: 'Headshots' },
];

import { ALL_IMAGES } from '@/config/images';

const existingImages = [
  { id: 1, src: heroMaternity, category: 'maternity', title: 'Expecting Grace' },
  { id: 2, src: galleryNewborn, category: 'newborns', title: 'First Days' },
  { id: 3, src: galleryFamily, category: 'families', title: 'Family Bond' },
  { id: 4, src: galleryWomen, category: 'women', title: 'Confident Beauty' },
  { id: 5, src: heroMaternity, category: 'maternity', title: 'Motherhood Glow' },
  { id: 6, src: galleryNewborn, category: 'newborns', title: 'Peaceful Sleep' },
  { id: 7, src: galleryFamily, category: 'families', title: 'Generations' },
  { id: 8, src: galleryWomen, category: 'headshots', title: 'Professional Portrait' },
];

const newImages = ALL_IMAGES.filter(img => img !== "eva-portrait.png").map((filename, index) => {
  const categoryIds = ['maternity', 'newborns', 'families', 'women', 'headshots'];
  const categoryId = categoryIds[index % categoryIds.length];

  return {
    id: index + 100,
    src: `/assets/evaimages/${filename}`,
    category: categoryId,
    title: `Eva Portfolio Piece ${index + 1}`,
  };
});

const galleryImages = [...existingImages, ...newImages];

const Galleries = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-ivory">
        <div className="container-elegant">
          <FadeInSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
              Our Galleries
            </h1>
            <p className="text-charcoal-light text-lg">
              Every portrait tells a story. Browse our collections to see the artistry,
              emotion, and connection we bring to every session.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-30">
        <div className="container-elegant">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-charcoal hover:bg-primary/10'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="group block w-full aspect-[4/5] overflow-hidden rounded-lg relative"
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-ivory font-serif text-xl">{image.title}</h3>
                        <p className="text-ivory/70 text-sm capitalize">{image.category}</p>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-ivory/10 flex items-center justify-center text-ivory hover:bg-ivory/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <h3 className="text-ivory font-serif text-2xl mb-1">{selectedImage.title}</h3>
              <p className="text-ivory/60 capitalize">{selectedImage.category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section-padding bg-blush-light">
        <div className="container-elegant">
          <FadeInSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
              Ready to Create Your Own Masterpiece?
            </h2>
            <p className="text-charcoal-light mb-8">
              Every family's story deserves to be beautifully told. Let's discuss
              your vision and create portraits you'll treasure forever.
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

export default Galleries;
