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

const AboutPage = () => {
  const { t } = useTranslation();

  const values = [
    { key: 'excellence', icon: Award },
    { key: 'ethics', icon: Shield },
    { key: 'innovation', icon: Lightbulb },
    { key: 'humanization', icon: Heart },
  ];

  // Team members data - placeholder images
  const teamMembers = [
    {
      id: 1,
      name: 'Dra. Marina Macedo',
      role: 'Diretora Clínica',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Dr. João Silva',
      role: 'Médico Dentista',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Dra. Ana Santos',
      role: 'Ortodontista',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Dr. Pedro Costa',
      role: 'Implantologista',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Dra. Sofia Oliveira',
      role: 'Odontopediatra',
      image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Dr. Miguel Ferreira',
      role: 'Periodontologista',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 7,
      name: 'Dra. Carla Rodrigues',
      role: 'Endodontista',
      image: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 8,
      name: 'Patrícia Almeida',
      role: 'Assistente Dentária',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face'
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
        label={t('about.hero.label')}
        title={t('about.hero.title')}
        description={t('about.hero.description')}
        backgroundImage="https://images.unsplash.com/photo-1643660527072-9c702932f606?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBkZW50YWwlMjBjbGluaWN8ZW58MHx8fHwxNzY4MDQ0NTY4fDA&ixlib=rb-4.1.0&q=85"
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
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBkZW50YWwlMjBjbGluaWN8ZW58MHx8fHwxNzY4MDQ0NTY4fDA&ixlib=rb-4.1.0&q=85"
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
                      <div className="text-center">
                        <h3 className="text-lg font-serif text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-sm text-primary">
                          {member.role}
                        </p>
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
