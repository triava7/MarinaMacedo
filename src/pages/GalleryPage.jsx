import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';
import img5 from '../img/img5.png';
import img6 from '../img/img6.png';
import img7 from '../img/img7.png';
import img8 from '../img/img8.png';
import img9 from '../img/img9.png';


const GalleryPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'clinic', 'equipment', 'spaces'];

  // Placeholder images - in production these would be real clinic photos
  const galleryImages = [
    {
      id: 1,
      src: img2,
      category: 'clinic',
      alt: 'Clinic Interior',
    },
    {
      id: 2,
      src: img3,
      category: 'equipment',
      alt: 'Modern Equipment',
    },
    {
      id: 3,
      src: img4,
      category: 'spaces',
      alt: 'Waiting Area',
    },
    {
      id: 4,
      src: img5,
      category: 'clinic',
      alt: 'Treatment Room',
    },
    {
      id: 5,
      src: img6,
      category: 'equipment',
      alt: 'Dental Equipment',
    },
    {
      id: 6,
      src: img7,
      category: 'spaces',
      alt: 'Reception',
    },
    {
      id: 7,
      src: img8,
      category: 'clinic',
      alt: 'Clinic Detail',
    },
    {
      id: 8,
      src: img9,
      category: 'equipment',
      alt: 'Advanced Technology',
    },
  ];


  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <PageHero
        label={t('gallery.hero.label')}
        title={t('gallery.hero.title')}
        description={t('gallery.hero.description')}
        backgroundImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBkZW50YWwlMjBjbGluaWN8ZW58MHx8fHwxNzY4MDQ0NTY4fDA&ixlib=rb-4.1.0&q=85"
      />

      {/* Gallery Section */}
      <section className="section-luxury bg-background relative">
        <div className="container-luxury relative">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-charcoal-dark'
                    : 'bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {t(`gallery.categories.${category}`)}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden card-luxury"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-foreground text-sm font-medium">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Placeholder Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-lg bg-charcoal border border-border">
              <ImageIcon className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground text-sm">
                {t('gallery.placeholder')}
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
