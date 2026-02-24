import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageHero from '../components/layout/PageHero';
import img6 from "../img/galery/6.jpeg";
import img7 from "../img/galery/7.jpeg";
import img11 from "../img/galery/11.jpeg";
import img13 from "../img/galery/13.jpeg";
import img17 from "../img/galery/17.jpeg";
import img18 from "../img/galery/18.jpeg";
import img19 from "../img/galery/19.jpeg";


const GalleryPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'clinic', 'equipment', 'spaces'];

  // Placeholder images - in production these would be real clinic photos
  const galleryImages = [
    {
      id: 1,
      src: img11,
      category: 'clinic',
      alt: 'Clinic Interior',
    },
    {
      id: 3,
      src: img18,
      category: 'spaces',
      alt: 'Waiting Area',
    },
    {
      id: 4,
      src: img7,
      category: 'clinic',
      alt: 'Treatment Room',
    },
    {
      id: 6,
      src: img13,
      category: 'spaces',
      alt: 'Reception',
    },
    {
      id: 8,
      src: img6,
      category: 'equipment',
      alt: 'Advanced Technology',
    },
    {
      id: 9,
      src: img17,
      category: 'spaces',
      alt: 'Outside View',
    },
        {
      id: 10,
      src: img19,
      category: 'spaces',
      alt: 'Outside View',
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
        backgroundImage={img11}
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
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
