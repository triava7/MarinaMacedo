import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Users, Gift, ClipboardList, Phone, Stethoscope, Baby, Cog, Sparkle, Target, FileHeart, Smile, Brain, HeartPulse, Ear, UserRound, Bone, Apple, HandHeart, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { Button } from '../components/ui/button';

const ServiceDetailPage = () => {
  const { t } = useTranslation();
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allServices = [
    'general-dentistry',
    'pediatric-dentistry',
    'prosthetics-fixed',
    'prosthetics-removable',
    'aesthetic-dentistry',
    'implantology',
    'oral-surgery',
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
    'prosthetics-fixed': Cog,
    'prosthetics-removable': Cog,
    'aesthetic-dentistry': Sparkle,
    'implantology': Target,
    'oral-surgery': Target,
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
    'prosthetics-fixed': 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1920&q=80',
    'prosthetics-removable': 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1920&q=80',
    'aesthetic-dentistry': 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1920&q=80',
    'implantology': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80',
    'oral-surgery': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80',
    'endodontics': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80',
    'orthodontics': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80',
    'tmj': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80',
    'periodontics': 'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6?w=1920&q=80',
    'ent': 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80',
    'general-medicine': 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80',
    'orthopedics': 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&q=80',
    'nutrition': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&q=80',
    'massage': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80',
  };

  // Clinical cases data for services that require them
  const clinicalCasesData = {
    'oral-surgery': {
      title: 'Caso Clínico',
      cases: [
        {
          id: 1,
          title: 'Correção de Retração Gengival',
          description: 'Tratamento cirúrgico para correção de retração gengival com enxerto de tecido conjuntivo.',
          images: [
            { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80', caption: 'Antes do procedimento' },
            { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80', caption: 'Durante a cirurgia' },
            { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', caption: 'Resultado final' }
          ]
        }
      ]
    },
    'orthodontics': {
      title: 'Casos Clínicos',
      featured: true,
      cases: [
        {
          id: 1,
          title: 'Correção de Apinhamento Severo',
          description: 'Tratamento ortodôntico completo com aparelho fixo para correção de apinhamento dentário severo.',
          images: [
            { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80', caption: 'Antes' },
            { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', caption: 'Depois' }
          ]
        },
        {
          id: 2,
          title: 'Mordida Cruzada',
          description: 'Correção de mordida cruzada posterior com expansão maxilar e alinhamento.',
          images: [
            { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80', caption: 'Antes' },
            { url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80', caption: 'Depois' }
          ]
        },
        {
          id: 3,
          title: 'Diastema Central',
          description: 'Encerramento de diastema central com alinhadores invisíveis.',
          images: [
            { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80', caption: 'Antes' },
            { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', caption: 'Depois' }
          ]
        },
        {
          id: 4,
          title: 'Classe II Divisão 1',
          description: 'Tratamento de má oclusão Classe II com aparelho funcional e fixo.',
          images: [
            { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80', caption: 'Antes' },
            { url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80', caption: 'Depois' }
          ]
        },
        {
          id: 5,
          title: 'Sobremordida Profunda',
          description: 'Correção de sobremordida profunda com intrusão dos incisivos.',
          images: [
            { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80', caption: 'Antes' },
            { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', caption: 'Depois' }
          ]
        },
        {
          id: 6,
          title: 'Mordida Aberta Anterior',
          description: 'Tratamento de mordida aberta com controlo vertical e correção funcional.',
          images: [
            { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80', caption: 'Antes' },
            { url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80', caption: 'Depois' }
          ]
        }
      ]
    },
    'prosthetics-fixed': {
      title: 'Caso Clínico',
      cases: [
        {
          id: 1,
          title: 'Reabilitação com Coroas Cerâmicas',
          description: 'Reabilitação estética e funcional com coroas totais em cerâmica sobre dentes anteriores.',
          images: [
            { url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80', caption: 'Situação inicial' },
            { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80', caption: 'Preparação dentária' },
            { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', caption: 'Resultado final' }
          ]
        }
      ]
    },
    'prosthetics-removable': {
      title: 'Caso Clínico',
      cases: [
        {
          id: 1,
          title: 'Prótese Parcial Removível Esquelética',
          description: 'Reabilitação com prótese parcial removível esquelética para substituição de dentes posteriores.',
          images: [
            { url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80', caption: 'Antes da prótese' },
            { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80', caption: 'Prótese confeccionada' },
            { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', caption: 'Prótese em boca' }
          ]
        }
      ]
    },
    'implantology': {
      title: 'Casos Clínicos',
      implantImages: [
        { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', caption: 'Implante dentário' },
        { url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80', caption: 'Sistema de implante' },
        { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80', caption: 'Componentes' }
      ],
      cases: [
        {
          id: 1,
          title: 'Implante Unitário Anterior',
          description: 'Colocação de implante unitário em zona estética com carga imediata.',
          placeholder: true,
          images: []
        },
        {
          id: 2,
          title: 'Reabilitação Total',
          description: 'Reabilitação total com protocolo All-on-4.',
          placeholder: true,
          images: []
        }
      ]
    }
  };

  // TMJ specific illustration
  const tmjIllustration = {
    url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    caption: 'Dor orofacial e disfunção temporomandibular'
  };

  // Get related services (excluding current and grouped prosthetics)
  const getRelatedServices = () => {
    let filtered = allServices.filter(s => s !== serviceId);
    // If viewing a prosthetics page, exclude the other prosthetics variant
    if (serviceId === 'prosthetics-fixed') {
      filtered = filtered.filter(s => s !== 'prosthetics-removable');
    } else if (serviceId === 'prosthetics-removable') {
      filtered = filtered.filter(s => s !== 'prosthetics-fixed');
    }
    return filtered.slice(0, 3);
  };

  const relatedServices = getRelatedServices();

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

  // Image modal handlers
  const openImageModal = (images, index) => {
    setSelectedImage(images);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedImage) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedImage.length);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedImage.length) % selectedImage.length);
    }
  };

  // Render Clinical Cases Section
  const renderClinicalCases = () => {
    const caseData = clinicalCasesData[serviceId];
    if (!caseData) return null;

    const isFeatured = caseData.featured;

    return (
      <section className={`py-16 ${isFeatured ? 'bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5' : 'bg-beige-dark/30'} relative`}>
        <div className="container-luxury relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Camera className={`w-6 h-6 ${isFeatured ? 'text-primary' : 'text-primary/70'}`} />
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                {isFeatured ? 'Galeria de Resultados' : 'Documentação Clínica'}
              </span>
            </div>
            <h2 className={`${isFeatured ? 'text-display' : 'text-title'} font-serif text-foreground`}>
              {caseData.title}
            </h2>
            {isFeatured && (
              <p className="text-muted-foreground mt-4 max-w-2xl">
                Explore a nossa galeria de casos clínicos reais e veja os resultados transformadores que alcançamos para os nossos pacientes.
              </p>
            )}
          </motion.div>

          {/* Implant Images for Implantology */}
          {caseData.implantImages && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-xl font-serif text-foreground mb-6">Sistemas de Implantes</h3>
              <div className="grid grid-cols-3 gap-4">
                {caseData.implantImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => openImageModal(caseData.implantImages, idx)}
                  >
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="absolute bottom-4 left-4 text-white text-sm font-medium">{img.caption}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Cases Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className={`grid ${isFeatured ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 max-w-4xl mx-auto'} gap-8`}
          >
            {caseData.cases.map((caseItem) => (
              <motion.div
                key={caseItem.id}
                variants={fadeInUp}
                className={`${isFeatured ? 'card-luxury rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-500' : 'card-luxury rounded-xl p-6'}`}
              >
                {caseItem.placeholder ? (
                  // Placeholder for cases without images yet
                  <div className="p-6">
                    <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center mb-4 border-2 border-dashed border-primary/30">
                      <div className="text-center">
                        <Camera className="w-8 h-8 text-primary/40 mx-auto mb-2" />
                        <span className="text-muted-foreground text-sm">Imagens em breve</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-serif text-foreground mb-2">{caseItem.title}</h4>
                    <p className="text-muted-foreground text-sm">{caseItem.description}</p>
                  </div>
                ) : isFeatured ? (
                  // Featured style for orthodontics
                  <>
                    <div className="relative overflow-hidden">
                      <div className="grid grid-cols-2">
                        {caseItem.images.slice(0, 2).map((img, idx) => (
                          <div
                            key={idx}
                            className="aspect-square relative cursor-pointer"
                            onClick={() => openImageModal(caseItem.images, idx)}
                          >
                            <img
                              src={img.url}
                              alt={img.caption}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                              <span className="absolute bottom-2 left-2 text-white text-xs font-semibold px-2 py-1 bg-primary/80 rounded">
                                {img.caption}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                        {caseItem.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {caseItem.description}
                      </p>
                    </div>
                  </>
                ) : (
                  // Standard style for other services
                  <>
                    <h4 className="text-xl font-serif text-foreground mb-4">{caseItem.title}</h4>
                    <p className="text-muted-foreground mb-6">{caseItem.description}</p>
                    <div className="grid grid-cols-3 gap-3">
                      {caseItem.images.map((img, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                          onClick={() => openImageModal(caseItem.images, idx)}
                        >
                          <img
                            src={img.url}
                            alt={img.caption}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-xs font-medium text-center px-2">{img.caption}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  // Render TMJ Illustration Section
  const renderTmjIllustration = () => {
    if (serviceId !== 'tmj') return null;

    return (
      <section className="py-16 bg-background relative">
        <div className="container-luxury relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-5 h-5 text-primary" />
                  <span className="text-primary text-sm font-medium tracking-wider uppercase">
                    Compreender a DTM
                  </span>
                </div>
                <h2 className="text-title font-serif text-foreground mb-4">
                  Dor Orofacial e Disfunção Temporomandibular
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A dor orofacial pode manifestar-se de diversas formas, afetando a qualidade de vida dos pacientes. 
                  O diagnóstico correto é fundamental para um tratamento eficaz.
                </p>
                <ul className="space-y-2">
                  {['Dor na região da face e maxilar', 'Dificuldade em abrir ou fechar a boca', 'Estalidos na articulação', 'Dores de cabeça frequentes', 'Desgaste dentário'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-xl overflow-hidden shadow-2xl"
              >
                <img
                  src={tmjIllustration.url}
                  alt={tmjIllustration.caption}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  if (!allServices.includes(serviceId)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-headline font-serif text-foreground mb-4">404</h1>
          <p className="text-muted-foreground mb-8">Serviço não encontrado</p>
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
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            {selectedImage.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 text-white/80 hover:text-white p-2 transition-colors"
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 text-white/80 hover:text-white p-2 transition-colors"
                >
                  <ChevronRight className="w-10 h-10" />
                </button>
              </>
            )}

            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage[currentImageIndex].url}
                alt={selectedImage[currentImageIndex].caption}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg font-medium">
                {selectedImage[currentImageIndex].caption}
              </p>
              {selectedImage.length > 1 && (
                <p className="text-white/60 text-center mt-2 text-sm">
                  {currentImageIndex + 1} / {selectedImage.length}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              data-testid="back-to-services-btn"
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
              {IconComponent && <IconComponent className="w-9 h-9 text-primary" />}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-display font-serif text-foreground mb-6"
              data-testid="service-title"
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

      {/* TMJ Illustration (only for TMJ service) */}
      {renderTmjIllustration()}

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
            <motion.div variants={fadeInUp} className="card-luxury rounded-lg p-8" data-testid="who-is-it-for-card">
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
            <motion.div variants={fadeInUp} className="card-luxury rounded-lg p-8" data-testid="benefits-card">
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
            <motion.div variants={fadeInUp} className="card-luxury rounded-lg p-8" data-testid="what-to-expect-card">
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

      {/* Clinical Cases Section */}
      {renderClinicalCases()}

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
              <Button className="btn-luxury text-cream px-8 py-4 h-auto text-base font-medium" data-testid="cta-phone-btn">
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
                    <div className="card-luxury rounded-lg p-6 h-full flex flex-col group" data-testid={`related-service-${service}`}>
                      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                        {RelatedIcon && <RelatedIcon className="w-5 h-5 text-primary" />}
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
