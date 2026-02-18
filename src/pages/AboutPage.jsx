import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Shield, Lightbulb, Heart } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import img1 from "../img/galery/17.jpeg";
import img2 from "../img/galery/13.jpeg";
import team1 from "../img/team/1.jpeg";
import team2 from "../img/team/2.jpeg";
import team3 from "../img/team/3.jpeg";
import team4 from "../img/team/4.jpeg";
import team5 from "../img/team/5.jpeg";
import team6 from "../img/team/6.jpeg";
import team7 from "../img/team/7.jpeg";
import team8 from "../img/team/8.jpeg";
import team9 from "../img/team/9.jpeg";
import team10 from "../img/team/10.jpeg";
import team11 from "../img/team/11.jpeg";
import team12 from "../img/team/12.jpeg";
import team13 from "../img/team/13.jpeg";
import team14 from "../img/team/14.jpeg";
import team15 from "../img/team/15.jpeg";
import team16 from "../img/team/16.jpeg";


const AboutPage = () => {
  const { t } = useTranslation();

  const values = [
    { key: 'excellence', icon: Award },
    { key: 'ethics', icon: Shield },
    { key: 'innovation', icon: Lightbulb },
    { key: 'humanization', icon: Heart },
  ];

  // Team members data - placeholder images
  // Diretora Clínica (imagem 1)
const clinicDirector = {
  id: 1,
  name: 'Dra. Marina Macedo',
  image: team1,
};

// Restante equipa (2 a 16)
const teamMembers = [
  { id: 2, name: 'Membro 2', image: team2 },
  { id: 3, name: 'Membro 3', image: team3 },
  { id: 4, name: 'Membro 4', image: team4 },
  { id: 5, name: 'Membro 5', image: team5 },
  { id: 6, name: 'Membro 6', image: team6 },
  { id: 7, name: 'Membro 7', image: team7 },
  { id: 8, name: 'Membro 8', image: team8 },
  { id: 9, name: 'Membro 9', image: team9 },
  { id: 10, name: 'Membro 10', image: team10 },
  { id: 11, name: 'Membro 11', image: team11 },
  { id: 12, name: 'Membro 12', image: team12 },
  { id: 13, name: 'Membro 13', image: team13 },
  { id: 14, name: 'Membro 14', image: team14 },
  { id: 15, name: 'Membro 15', image: team15 },
  { id: 16, name: 'Membro 16', image: team16 },
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
        label={t('about.hero.label')}
        title={t('about.hero.title')}
        description={t('about.hero.description')}
        backgroundImage={img1}
      />

      {/* Story Section */}
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
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={img2}
                  alt="Nossa Clínica"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-primary/30 rounded-lg -z-10" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-lg -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-headline font-serif text-foreground mb-8">
                {t('about.story.title')}
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>{t('about.story.p1')}</p>
                <p>{t('about.story.p2')}</p>
                <p>{t('about.story.p3')}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-luxury">
        <div className="divider-gold" />
      </div>

      {/* Mission & Vision */}
      <section className="section-luxury bg-background relative">
        <div className="container-luxury relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp} className="card-luxury rounded-lg p-10">
              <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-subtitle font-serif text-foreground mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.mission.description')}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="card-luxury rounded-lg p-10">
              <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-subtitle font-serif text-foreground mb-4">
                {t('about.vision.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.vision.description')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-luxury bg-charcoal relative">
        <div className="container-luxury relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-headline font-serif text-foreground">
                {t('about.values.title')}
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <motion.div
                  key={value.key}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif text-foreground mb-3">
                    {t(`about.values.items.${value.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`about.values.items.${value.key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section with Carousel */}
      <section className="section-luxury bg-background relative">
        <div className="container-luxury relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-label text-primary mb-4 block">
              {t('about.team.label')}
            </span>
            <h2 className="text-headline font-serif text-foreground mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.team.description')}
            </p>
          </motion.div>

          {/* Team Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative px-12"
          >
          {/* Diretora Clínica */}
            <div className="mb-16 text-center">
              <div className="max-w-md mx-auto">
                <div className="relative aspect-square rounded-lg overflow-hidden mb-6 shadow-elegant border border-border">
                  <img
                    src={clinicDirector.image}
                    alt={clinicDirector.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-serif text-foreground mb-2">
                  {clinicDirector.name}
                </h3>
                <p className="text-primary text-lg">
                  {t('about.team.clinicalDirector')}
                </p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-10 relative inline-block">
              {t('about.team.clinicalBody')}
              <span className="block w-16 h-[2px] bg-primary mx-auto mt-3"></span>
            </h3>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {teamMembers.map((member) => (
                  <CarouselItem key={member.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="group">
                      <div className="relative aspect-square rounded-lg overflow-hidden mb-4 shadow-card border border-border">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-charcoal border-border text-foreground hover:bg-primary hover:text-charcoal-dark hover:border-primary" />
              <CarouselNext className="right-0 bg-charcoal border-border text-foreground hover:bg-primary hover:text-charcoal-dark hover:border-primary" />
            </Carousel>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
