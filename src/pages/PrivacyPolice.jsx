import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageHero from '../components/layout/PageHero';
import img17 from "../img/galery/17.jpeg";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  const sections = t('privacy.sections', { returnObjects: true });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <PageHero
        label={t('privacy.hero.label')}
        title={t('privacy.hero.title')}
        description={t('privacy.hero.description')}
        backgroundImage={img17}
      />

      {/* Content Section */}
      <section className="section-luxury bg-background relative">
        <div className="container-luxury relative max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >

            {/* Dynamic Sections */}
            {sections && Object.keys(sections).map((key) => (
              <div key={key}>
                <h2 className="text-xl font-serif text-foreground mb-4">
                  {t(`privacy.sections.${key}.title`)}
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {t(`privacy.sections.${key}.content`)}
                </p>
              </div>
            ))}

            {/* Contact Section */}
            <div className="pt-10 border-t border-border">
              <h2 className="text-xl font-serif text-foreground mb-4">
                {t('privacy.contact.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {t('privacy.contact.content')}
              </p>
            </div>

          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;