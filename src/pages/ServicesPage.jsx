import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope, Baby, Cog, Sparkle, Target, FileHeart, Smile, Brain, HeartPulse, Ear, UserRound, Bone, Apple, HandHeart } from 'lucide-react';
import PageHero from '../components/layout/PageHero';

const ServicesPage = () => {
  const { t } = useTranslation();

  const serviceCategories = {
    dental: [
      'general-dentistry',
      'pediatric-dentistry',
      'prosthetics',
      'aesthetic-dentistry',
      'implantology',
      'oral-surgery',
      'endodontics',
      'orthodontics',
      'tmj',
      'periodontics',
    ],
    medical: [
      'general-medicine',
      'orthopedics',
      'nutrition',
    ],
    wellness: [
      'massage',
    ],
  };

  const serviceIcons = {
    'general-dentistry': Stethoscope,
    'pediatric-dentistry': Baby,
    'prosthetics': Cog,
    'aesthetic-dentistry': Sparkle,
    'implantology': Target,
    'oral-surgery': Target,
    'endodontics': FileHeart,
    'orthodontics': Smile,
    'tmj': Brain,
    'periodontics': HeartPulse,
    'general-medicine': UserRound,
    'orthopedics': Bone,
    'nutrition': Apple,
    'massage': HandHeart,
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const renderServiceCard = (serviceId) => {
    const IconComponent = serviceIcons[serviceId];
    return (
      <motion.div key={serviceId} variants={fadeInUp}>
        <Link to={`/services/${serviceId}`}>
          <div className="card-luxury rounded-lg p-6 h-full flex flex-col group">
            <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-4">
              <IconComponent className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {t(`services.items.${serviceId}.title`)}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
              {t(`services.items.${serviceId}.shortDesc`)}
            </p>
            <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {t('services.learnMore')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </div>
        </Link>
      </motion.div>
    );
  };

  const renderCategory = (categoryKey, services) => (
    <div key={categoryKey} className="mb-16 last:mb-0">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-subtitle font-serif text-foreground mb-8 pb-4 border-b border-border"
      >
        <span className="text-primary">|</span> {t(`services.${categoryKey}`)}
      </motion.h3>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map(renderServiceCard)}
      </motion.div>
    </div>
  );

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <PageHero
        label={t('services.hero.label')}
        title={t('services.hero.title')}
        description={t('services.hero.description')}
        backgroundImage="https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBkZW50YWwlMjBjbGluaWN8ZW58MHx8fHwxNzY4MDQ0NTY4fDA&ixlib=rb-4.1.0&q=85"
      />

      {/* Services Grid */}
      <section className="section-luxury bg-background relative">
        <div className="container-luxury relative">
          {renderCategory('dental', serviceCategories.dental)}
          {renderCategory('medical', serviceCategories.medical)}
          {renderCategory('wellness', serviceCategories.wellness)}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
