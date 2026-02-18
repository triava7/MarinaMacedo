import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope, Baby, Cog, Sparkle, Target, FileHeart, Smile, Brain, HeartPulse, Ear, UserRound, Bone, Apple, HandHeart, Star, Shield } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import img1 from "../img/galery/6.jpeg";

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
    'implantology': Shield,
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

  // Services with featured/highlighted styling
  const featuredServices = [];

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
    const isFeatured = featuredServices.includes(serviceId);

    return (
      <motion.div key={serviceId} variants={fadeInUp}>
        <Link to={`/services/${serviceId}`}>
          <div 
            className={`rounded-lg p-6 h-full flex flex-col group transition-all duration-300 ${
              isFeatured 
                ? 'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10' 
                : 'card-luxury'
            }`}
            data-testid={`service-card-${serviceId}`}
          >
            {isFeatured && (
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-xs font-semibold text-primary tracking-wider uppercase">Destaque</span>
              </div>
            )}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
              isFeatured 
                ? 'bg-primary/20 border-2 border-primary/40' 
                : 'bg-primary/20 border border-primary/30'
            }`}>
              <IconComponent className={`w-5 h-5 ${isFeatured ? 'text-primary' : 'text-primary'}`} />
            </div>
            <h3 className={`font-serif mb-2 group-hover:text-primary transition-colors duration-300 ${
              isFeatured ? 'text-xl text-foreground' : 'text-lg text-foreground'
            }`}>
              {t(`services.items.${serviceId}.title`)}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
              {t(`services.items.${serviceId}.shortDesc`)}
            </p>
            {isFeatured && (
              <p className="text-primary/80 text-xs mt-3 font-medium">
                Ver galeria de casos clínicos
              </p>
            )}
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
        backgroundImage={img1}
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
