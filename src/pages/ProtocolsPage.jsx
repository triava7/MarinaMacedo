import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Building2, Shield, Truck, CreditCard, Landmark, Heart, FileCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import PageHero from '../components/layout/PageHero';
import adseLogo from '../img/protocols/adse.png';
import edpLogo from '../img/protocols/edp.png';
import gnrLogo from '../img/protocols/sad-gnr.png';
import pspLogo from '../img/protocols/psp.png';
import samsLogo from '../img/protocols/sams.png';
import sibsLogo from '../img/protocols/sams-sib.png';
import cttLogo from '../img/protocols/ctt.png';
import medisLogo from '../img/protocols/medis.png';
import cgdLogo from '../img/protocols/cgd.png';
import chequeDentistaLogo from '../img/protocols/cheque-dentista.png';
import quadrosLogo from '../img/protocols/sams-quadros.png';
import img1 from "../img/galery/7.jpeg";

const ProtocolsPage = () => {
  const { t } = useTranslation();

  const protocols = [
    {
      id: 'adse',
      name: 'ADSE',
      logo: adseLogo,
    },
    {
      id: 'edp',
      name: 'EDP',
      logo: edpLogo,
    },
    {
      id: 'sad-gnr',
      name: 'SAD GNR',
      logo: gnrLogo,
    },
    {
      id: 'sad-psp',
      name: 'SAD PSP',
      logo: pspLogo,
    },
    {
      id: 'ctt',
      name: 'CTT',
      logo: cttLogo,
    },
    {
      id: 'medis',
      name: 'Médis',
      logo: medisLogo,
    },
    {
      id: 'cgd',
      name: 'CGD',
      logo: cgdLogo,
    },
    {
      id: 'cheques-dentistas',
      name: 'Cheque-Dentista',
      logo: chequeDentistaLogo,
    },
     {
      id: 'sams-quadros',
      name: 'SAMS Quadros',
      logo: quadrosLogo,
    },
     {
      id: 'sams-quadros',
      name: 'SAMS',
      logo: samsLogo,
    },
    {
      id: 'sams-sibs',
      name: 'SAMS SIBS',
      logo: sibsLogo,
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
        staggerChildren: 0.08
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <PageHero
        label={t('protocols.hero.label')}
        title={t('protocols.hero.title')}
        description={t('protocols.hero.description')}
        backgroundImage={img1}
      />

      {/* Protocols Grid */}
      <section className="section-luxury bg-background relative">
        <div className="container-luxury relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-muted-foreground leading-relaxed">
              {t('protocols.intro')}
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {protocols.map((protocol) => {
              const IconComponent = protocol.icon;
              return (
                <motion.div
                  key={protocol.id}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="card-luxury rounded-lg p-6 h-full flex flex-col items-center justify-center text-center min-h-[160px]">
                   <div className="w-16 h-16 rounded-full bg-white border border-border flex items-center justify-center mb-4 p-2 transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={protocol.logo}
                        alt={protocol.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors duration-300">
                      {protocol.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="max-w-2xl mx-auto bg-charcoal rounded-lg p-10 border border-border">
              <p className="text-muted-foreground mb-6">
                {t('protocols.contact')}
              </p>
              <a href="tel:+351253994232">
                <Button className="btn-luxury text-charcoal-dark px-8 py-4 h-auto text-base font-medium">
                  <Phone className="mr-2 w-4 h-4" />
                  253 994 232
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProtocolsPage;
