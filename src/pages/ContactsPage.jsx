import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import PageHero from '../components/layout/PageHero';

const ContactsPage = () => {
  const { t } = useTranslation();

  const locations = [
    {
      id: 'amares',
      name: t('contacts.locations.amares.name'),
      address: t('contacts.locations.amares.address'),
      city: t('contacts.locations.amares.city'),
      phones: ['253 994 232', '925 460 202'],
      hours: t('contacts.locations.amares.hours'),
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.123456789!2d-8.35!3d41.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Santa%20Catarina%2036A%2C%20Ferreiros%2C%20Amares!5e0!3m2!1spt!2spt!4v1234567890',
    },
    {
      id: 'adaufe',
      name: t('contacts.locations.adaufe.name'),
      address: t('contacts.locations.adaufe.address'),
      city: t('contacts.locations.adaufe.city'),
      phones: ['253 284 121', '913 958 650'],
      hours: t('contacts.locations.adaufe.hours'),
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.123456789!2d-8.43!3d41.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTravessa%20do%20Com%C3%A9rcio%2012%2C%20Ada%C3%BAfe!5e0!3m2!1spt!2spt!4v1234567890',
    },
    {
      id: 'bouro',
      name: t('contacts.locations.bouro.name'),
      address: t('contacts.locations.bouro.address'),
      city: t('contacts.locations.bouro.city'),
      phones: ['253 377 770', '935 383 101'],
      hours: t('contacts.locations.bouro.hours'),
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.123456789!2d-8.22!3d41.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLargo%20do%20Terreiro%2C%20Bouro%20Santa%20Maria!5e0!3m2!1spt!2spt!4v1234567890',
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
      <PageHero
        label={t('contacts.hero.label')}
        title={t('contacts.hero.title')}
        description={t('contacts.hero.description')}
        backgroundImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBkZW50YWwlMjBjbGluaWN8ZW58MHx8fHwxNzY4MDQ0NTY4fDA&ixlib=rb-4.1.0&q=85"
      />

      {/* Main CTA - Phone */}
      <section className="py-16 bg-charcoal">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-title font-serif text-foreground mb-4">
              {t('hero.cta')}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {t('home.cta.description')}
            </p>
            <a href="tel:+351253994232">
              <Button className="btn-luxury text-charcoal-dark px-10 py-5 h-auto text-lg font-medium">
                <Phone className="mr-3 w-5 h-5" />
                253 994 232
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="section-luxury bg-background relative">
        <div className="container-luxury relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-title font-serif text-foreground text-center mb-12"
          >
            {t('contacts.info.locations')}
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {locations.map((location) => (
              <motion.div
                key={location.id}
                variants={fadeInUp}
                className="card-luxury rounded-lg overflow-hidden"
              >
                {/* Colored header */}
                <div className="bg-primary/10 border-b border-primary/20 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif text-foreground">{location.name}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="space-y-3 text-sm text-muted-foreground mb-6">
                    <p className="font-medium text-foreground">{location.address}</p>
                    <p>{location.city}</p>
                    <div className="flex items-center gap-2 pt-2 text-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="whitespace-pre-line">{location.hours}</span>
                    </div>
                  </div>
                  
                  {/* Phone buttons */}
                  <div className="space-y-3">
                    {location.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:+351${phone.replace(/\s/g, '')}`}
                        className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-lg bg-primary/10 border border-primary/30 text-primary font-medium hover:bg-primary/20 transition-colors duration-300"
                      >
                        <Phone className="w-4 h-4" />
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">Ou envie-nos um email:</p>
            <a
              href="mailto:clinicamarina@gmail.com"
              className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 text-lg"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">clinicamarina@gmail.com</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="section-luxury bg-charcoal relative">
        <div className="container-luxury relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-title font-serif text-foreground text-center mb-12"
          >
            Localizações
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg overflow-hidden border border-border shadow-card"
              >
                <div className="aspect-video">
                  <iframe
                    src={location.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map - ${location.name}`}
                  />
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-serif text-foreground text-lg mb-1">{location.name}</h3>
                  <p className="text-muted-foreground text-sm">{location.address}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;
