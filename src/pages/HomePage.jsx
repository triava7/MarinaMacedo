import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Award, Users, Sparkles, Heart, Phone, MapPin, Clock, ChevronRight,
  Stethoscope, Baby, Smile, Sparkle, Target, Apple
} from 'lucide-react';
import { Button } from '../components/ui/button';
import img1 from "../img/galery/19.jpeg";
import img9 from "../img/galery/7.jpeg";

const HomePage = () => {
  const { t } = useTranslation();

  const featuredServices = [
    { id: 'general-dentistry', icon: Stethoscope },
    { id: 'orthodontics', icon: Smile },
    { id: 'implantology', icon: Target },
    { id: 'pediatric-dentistry', icon: Baby },
    { id: 'aesthetic-dentistry', icon: Sparkle },
  ];

  const locations = [
    {
      id: 'amares',
      name: 'Amares',
      address: 'Rua Santa Catarina n36 A',
      city: '4720-352 Ferreiros Amares',
      phone: '253 994 232',
      mobilePhone: '925 460 202',
      hours: 'Seg-Sex: 9h-12h, 14h-19h',
    },
    {
      id: 'adaufe',
      name: 'Adaúfe',
      address: 'Travessa do Comércio n12 sala 2',
      city: '4710-820 Adaúfe',
      phone: '253 284 121',
      mobilePhone: '913 958 650',
      hours: 'Seg-Sex: 9:30h-12h, 14/14:30h-19h; Sáb: 9h-13h',
    },
    {
      id: 'bouro',
      name: 'Bouro',
      address: 'Largo do Terreiro, Edif. da Caixa Agrícola',
      city: '4720-688 Bouro Santa Maria',
      phone: '253 377 770',
      mobilePhone: '935 383 101',
      hours: 'Seg-Sex: 9h-12h, 14/15h-19h; Sáb: 9h-13h',
    },
  ];

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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
               backgroundImage: `url(${img1})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background" />
        </div>

        {/* Content */}
        <div className="relative container-luxury pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-label text-primary mb-6"
            >
              Clínica Dentária Marina Macedo
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-display font-serif text-foreground mb-8"
            >
              {t('hero.tagline')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="tel:+351253994232">
                <Button className="btn-luxury text-charcoal-dark px-8 py-4 h-auto text-base font-medium">
                  <Phone className="mr-2 w-4 h-4" />
                  {t('hero.cta')}
                </Button>
              </a>
              <Link to="/services">
                <Button variant="outline" className="btn-ghost-luxury px-8 py-4 h-auto text-base">
                  {t('hero.discover')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-luxury bg-background relative">
        <div className="container-luxury relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Image */}
            <motion.div variants={fadeInUp} className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={img9}
                  alt="Clínica"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/30 rounded-lg -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeInUp} className="order-1 lg:order-2">
              <span className="text-label text-primary mb-4 block">{t('home.intro.label')}</span>
              <h2 className="text-headline font-serif text-foreground mb-6">
                {t('home.intro.title')}
              </h2>
              <p className="text-body-lg text-muted-foreground mb-8 leading-relaxed">
                {t('home.intro.description')}
              </p>
              <Link to="/about">
                <Button variant="outline" className="btn-ghost-luxury">
                  {t('common.learnMore')}
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-luxury">
        <div className="divider-gold" />
      </div>

      {/* Services Section */}
      <section className="section-luxury bg-background relative">
        <div className="container-luxury relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-label text-primary mb-4 block"
            >
              {t('home.services.label')}
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-headline font-serif text-foreground mb-4"
            >
              {t('home.services.title')}
            </motion.h2>

            {/* Texto maior + branco */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white max-w-2xl mx-auto"
            >
              {t('home.services.description')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredServices.map((service) => {
              const IconComponent = service.icon;

              return (
                <motion.div key={service.id} variants={fadeInUp}>
                  <Link to={`/services/${service.id}`}>
                    <div className="card-luxury rounded-lg p-8 h-full flex flex-col">
                      <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-6">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>

                      <h3 className="text-xl font-serif text-white mb-3">
                        {t(`services.items.${service.id}.title`)}
                      </h3>

                      <p className="text-base md:text-[15px] text-white leading-relaxed flex-grow">
                        {t(`services.items.${service.id}.shortDesc`)}
                      </p>

                      <div className="mt-6 flex items-center text-primary text-sm font-medium">
                        {t('services.learnMore')}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}

            {/* Card Ver Mais */}
            <motion.div variants={fadeInUp}>
              <Link to="/services">
                <div className="card-luxury rounded-lg p-8 h-full flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-6">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-serif text-white mb-3">
                    {t('services.viewAllTitle')}
                  </h3>
                </div>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="section-luxury bg-charcoal relative">
        <div className="container-luxury relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-label text-primary mb-4 block">
              {t('home.whyUs.label')}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-headline font-serif text-foreground">
              {t('home.whyUs.title')}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { key: 'experience', icon: Award },
              { key: 'team', icon: Users },
              { key: 'technology', icon: Sparkles },
              { key: 'comfort', icon: Heart },
            ].map((item) => (
              <motion.div
                key={item.key}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-serif text-foreground mb-3">
                  {t(`home.whyUs.reasons.${item.key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`home.whyUs.reasons.${item.key}.description`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-luxury bg-background relative">
        <div className="container-luxury relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-label text-primary mb-4 block">
              {t('home.locations.label')}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-headline font-serif text-foreground mb-4">
              {t('home.locations.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-body-lg text-muted-foreground">
              {t('home.locations.description')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {locations.map((location) => (
              <motion.div
                key={location.id}
                variants={fadeInUp}
                className="card-luxury rounded-lg overflow-hidden flex flex-col"
              >
                {/* Header */}
                <div className="bg-primary/10 border-b border-primary/20 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif text-foreground">{location.name}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-grow">
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>{location.address}</p>
                    <p>{location.city}</p>
                    <div className="flex items-center gap-2 pt-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{location.hours}</span>
                    </div>
                  </div>
                </div>
                
                {/* Phone links */}
                <div className="p-6 pt-0 space-y-2">
                  <a
                    href={`tel:+351${location.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-primary font-medium text-sm hover:text-gold-light transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {location.phone}
                  </a>
                  <a
                    href={`tel:+351${location.mobilePhone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-primary/80 text-sm hover:text-gold-light transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {location.mobilePhone}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-luxury relative overflow-hidden">
        <div className="absolute inset-0 bg-charcoal" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container-luxury relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-headline font-serif text-foreground mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground mb-10">
              {t('home.cta.description')}
            </p>
            <a href="tel:+351253994232">
              <Button className="btn-luxury text-charcoal-dark px-10 py-5 h-auto text-base font-medium">
                <Phone className="mr-2 w-5 h-5" />
                253 994 232
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
