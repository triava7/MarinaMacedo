import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Users, Gift, ClipboardList, Phone, Stethoscope, Baby, Cog, Sparkle, Target, FileHeart, Smile, Brain, HeartPulse, Ear, UserRound, Bone, Apple, HandHeart } from 'lucide-react';
import { Button } from '../components/ui/button';
import PageHero from '../components/layout/PageHero';

const ServiceDetailPage = () => {
  const { t } = useTranslation();
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const allServices = [
    'general-dentistry',
    'pediatric-dentistry',
    'prosthetics',
    'aesthetic-dentistry',
    'implantology',
    'endodontics',
    'orthodontics',
    'tmj',
    'periodontics',
    'ent',
    'general-medicine',
    'orthopedics',
    'nutrition',
    'massage',
  ];

  const serviceIcons = {
    'general-dentistry': Stethoscope,
    'pediatric-dentistry': Baby,
    'prosthetics': Cog,
    'aesthetic-dentistry': Sparkle,
    'implantology': Target,
    'endodontics': FileHeart,
    'orthodontics': Smile,
    'tmj': Brain,
    'periodontics': HeartPulse,
    'ent': Ear,
    'general-medicine': UserRound,
    'orthopedics': Bone,
    'nutrition': Apple,
    'massage': HandHeart,
  };

  // Background images for each service
  const serviceBackgrounds = {
    'general-dentistry': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80',
    'pediatric-dentistry': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80',
    'prosthetics': 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1920&q=80',
    'aesthetic-dentistry': 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1920&q=80',
    'implantology': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80',
    'endodontics': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80',
    'orthodontics': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80',
    'tmj': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80',
    'periodontics': 'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?w=1920&q=80',
    'ent': 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80',
    'general-medicine': 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80',
    'orthopedics': 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&q=80',
    'nutrition': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&q=80',
    'massage': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80',
  };

  // Get related services (excluding current)
  const relatedServices = allServices.filter(s => s !== serviceId).slice(0, 3);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Get benefits array from translation
  const benefits = t(`services.items.${serviceId}.benefits`, { returnObjects: true });

  const IconComponent = serviceIcons[serviceId];

  if (!allServices.includes(serviceId)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-headline font-serif text-foreground mb-4">404</h1>
          <p className="text-muted-foreground mb-8">Service not found</p>
          <Link to="/services">
            <Button className="btn-luxury text-cream">
              {t('services.backToServices')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${serviceBackgrounds[serviceId]}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background" />
        </div>

        <div className="relative container-luxury pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            {/* Back button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => navigate('/services')}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('services.backToServices')}
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-20 h-20 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-6 backdrop-blur-sm"
            >
              <IconComponent className="w-9 h-9 text-primary" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-display font-serif text-foreground mb-6"
            >
              {t(`services.items.${serviceId}.title`)}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-body-lg text-muted-foreground"
            >
              {t(`services.items.${serviceId}.description`)}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-luxury bg-background relative">
        <div className="container-luxury relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Who is it for */}
            <motion.div variants={fadeInUp} className="card-luxury rounded-lg p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-4">
                {t('services.whoIsItFor')}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(`services.items.${serviceId}.whoIsItFor`)}
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div variants={fadeInUp} className="card-luxury rounded-lg p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <Gift className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-4">
                {t('services.benefits')}
              </h3>
              <ul className="space-y-3">
                {Array.isArray(benefits) && benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What to expect */}
            <motion.div variants={fadeInUp} className="card-luxury rounded-lg p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <ClipboardList className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-4">
                {t('services.whatToExpect')}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(`services.items.${serviceId}.whatToExpect`)}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-beige-dark relative">
        <div className="container-luxury relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-title font-serif text-foreground mb-6">
              {t('home.cta.title')}
            </h2>
            <a href="tel:+351253994232">
              <Button className="btn-luxury text-cream px-8 py-4 h-auto text-base font-medium">
                <Phone className="mr-2 w-4 h-4" />
                253 994 232
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-luxury bg-background relative">
        <div className="container-luxury relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-title font-serif text-foreground">
              {t('services.otherServices')}
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {relatedServices.map((service) => {
              const RelatedIcon = serviceIcons[service];
              return (
                <motion.div key={service} variants={fadeInUp}>
                  <Link to={`/services/${service}`}>
                    <div className="card-luxury rounded-lg p-6 h-full flex flex-col group">
                      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                        <RelatedIcon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {t(`services.items.${service}.title`)}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                        {t(`services.items.${service}.shortDesc`)}
                      </p>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {t('services.learnMore')}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
