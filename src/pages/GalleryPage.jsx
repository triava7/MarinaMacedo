import React from 'react';
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

  const galleryImages = [
    {
      id: 1,
      src: img11,
      category: 'gallery',
      alt: 'Clinic Interior',
    },
    {
      id: 3,
      src: img18,
      category: 'gallery',
      alt: 'Waiting Area',
    },
    {
      id: 4,
      src: img7,
      category: 'gallery',
      alt: 'Treatment Room',
    },
    {
      id: 6,
      src: img13,
      category: 'gallery',
      alt: 'Reception',
    },
    {
      id: 8,
      src: img6,
      category: 'gallery',
      alt: 'Advanced Technology',
    },
    {
      id: 9,
      src: img17,
      category: 'gallery',
      alt: 'Outside View',
    },
    {
      id: 10,
      src: img19,
      category: 'gallery',
      alt: 'Outside View',
    },
  ];

  return (
    <div className="overflow-hidden">
      <PageHero
        label={t('gallery.hero.label')}
        title={t('gallery.hero.title')}
        description={t('gallery.hero.description')}
        backgroundImage={img11}
      />

      <section className="section-luxury bg-background relative">
        <div className="container-luxury relative">
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-[4/5] rounded-lg overflow-hidden card-luxury"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;