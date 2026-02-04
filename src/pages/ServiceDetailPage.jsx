import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Users, Gift, ClipboardList, Phone, Stethoscope, Baby, Cog, Sparkle, Target, FileHeart, Smile, Brain, HeartPulse, Ear, UserRound, Bone, Apple, HandHeart, X, ChevronLeft, ChevronRight, Camera, Eye, Zap, Shield } from 'lucide-react';
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
    'prosthetics',
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
    'prosthetics': Cog,
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
    'prosthetics': 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1920&q=80',
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

  // Get related services
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

  // ========== ORTODONTIA - Alinhadores Invisíveis ==========
  const renderOrthodonticsSection = () => {
    if (serviceId !== 'orthodontics') return null;

    const alignerImages = [
      { url: 'https://images.unsplash.com/photo-1670250492416-570b5b7343b1?w=800&q=80', caption: 'Alinhador em posição' },
      { url: 'https://images.unsplash.com/photo-1694364596437-904741b3335f?w=800&q=80', caption: 'Resultado do tratamento' },
    ];

    const plasterModels = [
      { url: 'https://images.unsplash.com/photo-1656623807884-f6c9b7f389e9?w=800&q=80', caption: 'Modelo de estudo' },
      { url: 'https://images.unsplash.com/photo-1562330743-fbc6ef07ca78?w=800&q=80', caption: 'Planeamento ortodôntico' },
      { url: 'https://images.pexels.com/photos/33748059/pexels-photo-33748059.jpeg?w=800', caption: 'Molde dentário' },
    ];

    const clinicalCases = [
      {
        id: 1,
        title: 'Correção de Apinhamento',
        description: 'Tratamento com alinhadores invisíveis para correção de apinhamento severo.',
        images: [
          { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80', caption: 'Antes' },
          { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', caption: 'Depois' }
        ]
      },
      {
        id: 2,
        title: 'Encerramento de Diastema',
        description: 'Correção de espaçamento entre dentes anteriores.',
        images: [
          { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80', caption: 'Antes' },
          { url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80', caption: 'Depois' }
        ]
      },
      {
        id: 3,
        title: 'Mordida Cruzada',
        description: 'Tratamento de mordida cruzada com alinhadores.',
        images: [
          { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80', caption: 'Antes' },
          { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', caption: 'Depois' }
        ]
      },
      {
        id: 4,
        title: 'Sobremordida',
        description: 'Correção de sobremordida profunda.',
        images: [
          { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80', caption: 'Antes' },
          { url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80', caption: 'Depois' }
        ]
      }
    ];

    return (
      <>
        {/* Alinhadores Invisíveis Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 relative">
          <div className="container-luxury relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Tecnologia Avançada</span>
              <h2 className="text-display font-serif text-foreground mb-6">Alinhadores Invisíveis</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                Feitos à medida de cada paciente com material plástico termoplástico e biocompatível, 
                adaptando-se confortavelmente à anatomia de cada boca.
              </p>
            </motion.div>

            {/* How it works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-primary/20"
            >
              <h3 className="text-xl font-serif text-foreground mb-4">Como Funcionam?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Funcionam através da aplicação controlada de forças suaves e progressivas que vão 
                movimentando os dentes para as posições desejadas. Cada conjunto de alinhadores é 
                usado durante aproximadamente duas semanas antes de passar para o seguinte.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-4 gap-6 mb-16"
            >
              {[
                { icon: Eye, title: 'Estética', desc: 'Praticamente impercetíveis' },
                { icon: Sparkle, title: 'Imperceptíveis', desc: 'Transparentes e discretos' },
                { icon: Shield, title: 'Conforto', desc: 'Material suave e adaptável' },
                { icon: Zap, title: 'Eficiência', desc: 'Resultados previsíveis' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="text-center p-6 rounded-xl bg-background/60 border border-primary/10 hover:border-primary/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-serif text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Aligner Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-xl font-serif text-foreground mb-6 text-center">Alinhadores em Ação</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {alignerImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-lg"
                    onClick={() => openImageModal(alignerImages, idx)}
                  >
                    <img src={img.url} alt={img.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="absolute bottom-4 left-4 text-white font-medium">{img.caption}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Plaster Models */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-xl font-serif text-foreground mb-6 text-center">Modelos de Gesso - Planeamento</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {plasterModels.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-lg"
                    onClick={() => openImageModal(plasterModels, idx)}
                  >
                    <img src={img.url} alt={img.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                      <span className="absolute bottom-4 left-4 text-white text-sm font-medium">{img.caption}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Clinical Cases Gallery */}
        <section className="py-20 bg-beige-dark/30 relative">
          <div className="container-luxury relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Camera className="w-8 h-8 text-primary mx-auto mb-4" />
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Galeria de Resultados</span>
              <h2 className="text-title font-serif text-foreground">Casos Clínicos</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Veja exemplos reais de transformações com os nossos tratamentos ortodônticos.
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {clinicalCases.map((caseItem) => (
                <motion.div
                  key={caseItem.id}
                  variants={fadeInUp}
                  className="card-luxury rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
                >
                  <div className="grid grid-cols-2">
                    {caseItem.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="aspect-square relative cursor-pointer"
                        onClick={() => openImageModal(caseItem.images, idx)}
                      >
                        <img src={img.url} alt={img.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                          <span className="absolute bottom-2 left-2 text-white text-xs font-semibold px-2 py-1 bg-primary/80 rounded">{img.caption}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4">
                    <h4 className="font-serif text-foreground group-hover:text-primary transition-colors">{caseItem.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{caseItem.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </>
    );
  };

  // ========== CIRURGIA ORAL ==========
  const renderOralSurgerySection = () => {
    if (serviceId !== 'oral-surgery') return null;

    const clinicalImages = [
      { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80', caption: 'Procedimento cirúrgico' },
      { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80', caption: 'Ambiente cirúrgico' },
      { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80', caption: 'Resultado pós-operatório' },
    ];

    const indications = [
      'Quistos',
      'Lesões na mucosa/língua',
      'Dentes para extrair (inclusos ou não)',
      'Fibromas',
      'Cirurgia para preparação protética',
      'Gengivoplastias',
      'Correção de retrações gengivais'
    ];

    return (
      <section className="py-20 bg-gradient-to-b from-background to-beige-dark/20 relative">
        <div className="container-luxury relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Documentação Clínica</span>
            <h2 className="text-display font-serif text-foreground mb-6">Caso Clínico</h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <h3 className="text-xl font-serif text-foreground mb-4">O que é a Cirurgia Oral?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Área da medicina dentária que se dedica ao diagnóstico e tratamento cirúrgico 
                  das dores e tensões maxilares e estruturas anexas dos dentes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif text-foreground mb-6 flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  Para quem é indicado?
                </h3>
                <ul className="space-y-3">
                  {indications.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Large Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Main Large Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
                onClick={() => openImageModal(clinicalImages, 0)}
              >
                <img 
                  src={clinicalImages[0].url} 
                  alt={clinicalImages[0].caption} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6">
                    <span className="text-white font-serif text-xl">{clinicalImages[0].caption}</span>
                  </div>
                </div>
              </motion.div>

              {/* Two smaller images */}
              <div className="grid grid-cols-2 gap-6">
                {clinicalImages.slice(1).map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-lg"
                    onClick={() => openImageModal(clinicalImages, idx + 1)}
                  >
                    <img src={img.url} alt={img.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-sm font-medium">{img.caption}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  // ========== PRÓTESES (Fixa e Removível juntas) ==========
  const renderProstheticsSection = () => {
    if (serviceId !== 'prosthetics') return null;

    const fixedImages = [
      { url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80', caption: 'Coroa cerâmica' },
      { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80', caption: 'Ponte fixa' },
      { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80', caption: 'Facetas' },
    ];

    const removableImages = [
      { url: 'https://images.unsplash.com/photo-1562330743-fbc6ef07ca78?w=800&q=80', caption: 'Prótese parcial' },
      { url: 'https://images.pexels.com/photos/4687406/pexels-photo-4687406.jpeg?w=800', caption: 'Prótese total' },
      { url: 'https://images.unsplash.com/photo-1658994477987-42468f4dbbb2?w=800&q=80', caption: 'Modelo de trabalho' },
    ];

    return (
      <section className="py-20 bg-background relative">
        <div className="container-luxury relative">
          {/* Prótese Fixa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Cog className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-primary text-sm font-medium tracking-wider uppercase">Soluções Permanentes</span>
                <h2 className="text-title font-serif text-foreground">Prótese Fixa</h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A Prótese Fixa oferece soluções permanentes para restaurar dentes danificados ou 
                  substituir dentes perdidos. Inclui coroas, pontes e facetas que ficam cimentadas 
                  aos dentes, proporcionando uma solução estável e duradoura.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h4 className="font-serif text-foreground mb-4">Vantagens:</h4>
                  <ul className="space-y-2">
                    {['Solução permanente e estável', 'Aspeto natural e estético', 'Função mastigatória completa', 'Não necessita remoção diária'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {fixedImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-lg"
                    onClick={() => openImageModal(fixedImages, idx)}
                  >
                    <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs font-medium text-center px-2">{img.caption}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-border my-12" />

          {/* Prótese Removível */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Cog className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-primary text-sm font-medium tracking-wider uppercase">Soluções Flexíveis</span>
                <h2 className="text-title font-serif text-foreground">Prótese Removível</h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-3 gap-4">
                {removableImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-lg"
                    onClick={() => openImageModal(removableImages, idx)}
                  >
                    <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs font-medium text-center px-2">{img.caption}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A Prótese Removível oferece soluções acessíveis e eficazes para substituir 
                  múltiplos dentes ou dentições completas. São próteses que podem ser retiradas 
                  para higiene e manutenção.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h4 className="font-serif text-foreground mb-4">Vantagens:</h4>
                  <ul className="space-y-2">
                    {['Solução económica', 'Fácil manutenção e higiene', 'Adaptável a alterações futuras', 'Recuperação da função e estética'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  // ========== IMPLANTOLOGIA (Estrutura Primadent) ==========
  const renderImplantologySection = () => {
    if (serviceId !== 'implantology') return null;

    const implantImages = [
      { url: 'https://images.unsplash.com/photo-1675285657370-541bd9616b85?w=800&q=80', caption: 'Implante dentário' },
      { url: 'https://primadent.pt/wp-content/uploads/2025/09/implante-unico-e1758038758205.jpg', caption: 'Sistema de implante' },
      { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80', caption: 'Procedimento' },
    ];

    const indicationImages = [
      { 
        url: 'https://primadent.pt/wp-content/uploads/2025/09/266-d8fb546e-250499c1-1920w-1000x667-1920w.webp', 
        title: 'Apenas 1 dente em falta',
        desc: 'Um dente em falta deverá ser substituído por um implante dentário para prevenir problemas futuros.'
      },
      { 
        url: 'https://primadent.pt/wp-content/uploads/2025/09/055-1920w-1000x666-1920w.webp', 
        title: 'Vários dentes em falta',
        desc: 'Se tem dois ou mais dentes em falta, a solução ideal é substituí-los através de uma ponte suportada por implantes.'
      },
      { 
        url: 'https://primadent.pt/wp-content/uploads/2025/09/427-1920w-1000x667-1920w.webp', 
        title: 'Todos os dentes em falta',
        desc: 'Reabilitação total com protocolo All-on-4 ou All-on-6 para uma solução fixa e definitiva.'
      },
    ];

    const advantages = [
      'Recuperação da função mastigatória e da fala',
      'Melhoria da estética facial e do sorriso',
      'Prevenção da reabsorção óssea',
      'Conforto e estabilidade superiores',
      'Preservação dos dentes adjacentes'
    ];

    return (
      <>
        {/* What are implants */}
        <section className="py-20 bg-gradient-to-b from-background to-primary/5 relative">
          <div className="container-luxury relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Tecnologia de Ponta</span>
              <h2 className="text-display font-serif text-foreground mb-6">O que são Implantes Dentários?</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-muted-foreground leading-relaxed text-lg">
                  São pequenas estruturas, geralmente de titânio, que são colocadas cirurgicamente 
                  no osso maxilar ou mandibular, funcionando como uma raiz artificial.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
                  <h4 className="font-serif text-foreground mb-4 text-xl">Biocompatibilidade</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    O titânio é um metal biocompatível, o que significa que é bem tolerado pelo 
                    organismo e permite a <strong className="text-foreground">osseointegração</strong>, ou seja, 
                    a união do implante ao osso, conferindo estabilidade e durabilidade ao tratamento.
                  </p>
                </div>
                <div className="bg-beige-dark/50 rounded-2xl p-8">
                  <h4 className="font-serif text-foreground mb-4 text-xl">Objetivo</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Devolver ao paciente a função mastigatória, estética e autoestima, proporcionando 
                    uma solução fixa, segura e duradoura para a perda dentária.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {implantImages.slice(0, 2).map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    className={`relative rounded-xl overflow-hidden cursor-pointer group shadow-lg ${idx === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}
                    onClick={() => openImageModal(implantImages, idx)}
                  >
                    <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <span className="absolute bottom-4 left-4 text-white font-medium">{img.caption}</span>
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-lg"
                  onClick={() => openImageModal(implantImages, 2)}
                >
                  <img src={implantImages[2].url} alt={implantImages[2].caption} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="absolute bottom-4 left-4 text-white font-medium">{implantImages[2].caption}</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Indications */}
        <section className="py-20 bg-beige-dark/30 relative">
          <div className="container-luxury relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-title font-serif text-foreground mb-4">Indicações para Implantes Dentários</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A colocação de implantes está indicada para pacientes que perderam um ou mais dentes 
                e que desejam uma solução fixa, sem recorrer a próteses removíveis.
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {indicationImages.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video relative">
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-serif text-foreground text-lg mb-3">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 bg-background relative">
          <div className="container-luxury relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-title font-serif text-foreground mb-12">Vantagens dos Implantes Dentários</h2>
              <div className="space-y-4">
                {advantages.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 bg-primary/5 border border-primary/10 rounded-xl p-4"
                  >
                    <Check className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Clinical Cases */}
        <section className="py-20 bg-beige-dark/20 relative">
          <div className="container-luxury relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Camera className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="text-title font-serif text-foreground mb-4">Casos Clínicos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Veja exemplos reais de reabilitações com implantes dentários realizadas na nossa clínica.
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: 'Implante Unitário Anterior',
                  desc: 'Substituição de incisivo central com implante e coroa cerâmica para resultado estético natural.',
                  images: [
                    { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80', caption: 'Antes' },
                    { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80', caption: 'Depois' }
                  ]
                },
                {
                  title: 'Ponte sobre Implantes',
                  desc: 'Reabilitação de 3 dentes posteriores com ponte fixa suportada por 2 implantes.',
                  images: [
                    { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', caption: 'Antes' },
                    { url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80', caption: 'Depois' }
                  ]
                },
                {
                  title: 'Reabilitação Total',
                  desc: 'Protocolo All-on-4 para reabilitação completa da arcada superior com carga imediata.',
                  images: [
                    { url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80', caption: 'Antes' },
                    { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80', caption: 'Depois' }
                  ]
                }
              ].map((caseItem, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="grid grid-cols-2">
                    {caseItem.images.map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="aspect-square relative cursor-pointer"
                        onClick={() => openImageModal(caseItem.images, imgIdx)}
                      >
                        <img src={img.url} alt={img.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                          <span className="absolute bottom-2 left-2 text-white text-xs font-semibold px-2 py-1 bg-primary/80 rounded">{img.caption}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-6">
                    <h4 className="font-serif text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{caseItem.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{caseItem.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </>
    );
  };

  // ========== OCLUSÃO (TMJ) - Expandido ==========
  const renderTmjSection = () => {
    if (serviceId !== 'tmj') return null;

    const symptoms = [
      'Dor na região da face e maxilar',
      'Dificuldade em abrir ou fechar a boca',
      'Estalidos na articulação temporomandibular',
      'Dores de cabeça frequentes',
      'Desgaste dentário excessivo',
      'Dor ao mastigar ou falar',
      'Tensão muscular na face e pescoço',
      'Zumbido nos ouvidos'
    ];

    const treatments = [
      { title: 'Goteiras Oclusais', desc: 'Dispositivos personalizados para proteção e relaxamento muscular' },
      { title: 'Fisioterapia', desc: 'Exercícios específicos para a articulação temporomandibular' },
      { title: 'Medicação', desc: 'Anti-inflamatórios e relaxantes musculares quando necessário' },
      { title: 'Ajuste Oclusal', desc: 'Correção da mordida para aliviar tensões' }
    ];

    return (
      <section className="py-20 bg-gradient-to-b from-background to-beige-dark/20 relative">
        <div className="container-luxury relative">
          {/* Header with large image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-primary" />
                <span className="text-primary text-sm font-medium tracking-wider uppercase">Compreender a DTM</span>
              </div>
              <h2 className="text-display font-serif text-foreground mb-6">
                Dor Orofacial e Disfunção Temporomandibular
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                A Disfunção Temporomandibular (DTM) afeta a articulação e os músculos da mastigação, 
                podendo provocar dor, estalidos, dificuldade em abrir a boca e até dificuldade em 
                fechar quando em abertura máxima com um simples bocejo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A dor orofacial é dor localizada na face, boca ou maxilar, com diferentes origens 
                que requerem avaliação especializada para determinar a causa e o tratamento adequado.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1000&q=80"
                alt="Dor orofacial"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Symptoms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-title font-serif text-foreground mb-8 text-center">Sintomas Comuns</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {symptoms.map((symptom, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-background border border-primary/10 rounded-xl p-4 flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{symptom}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Treatments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-title font-serif text-foreground mb-8 text-center">Opções de Tratamento</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatments.map((treatment, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center hover:bg-primary/10 transition-colors"
                >
                  <h4 className="font-serif text-foreground mb-2">{treatment.title}</h4>
                  <p className="text-muted-foreground text-sm">{treatment.desc}</p>
                </motion.div>
              ))}
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
            <button onClick={closeImageModal} className="absolute top-4 right-4 text-white/80 hover:text-white p-2">
              <X className="w-8 h-8" />
            </button>
            
            {selectedImage.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 text-white/80 hover:text-white p-2">
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 text-white/80 hover:text-white p-2">
                  <ChevronRight className="w-10 h-10" />
                </button>
              </>
            )}

            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-5xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage[currentImageIndex].url}
                alt={selectedImage[currentImageIndex].caption}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg font-medium">
                {selectedImage[currentImageIndex].caption}
              </p>
              {selectedImage.length > 1 && (
                <p className="text-white/60 text-center mt-2 text-sm">{currentImageIndex + 1} / {selectedImage.length}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${serviceBackgrounds[serviceId]}')` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background" />
        </div>

        <div className="relative container-luxury pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => navigate('/services')}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
              data-testid="back-to-services-btn"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('services.backToServices')}
            </motion.button>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="w-20 h-20 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-6 backdrop-blur-sm">
              {IconComponent && <IconComponent className="w-9 h-9 text-primary" />}
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-display font-serif text-foreground mb-6" data-testid="service-title">
              {t(`services.items.${serviceId}.title`)}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-body-lg text-muted-foreground">
              {t(`services.items.${serviceId}.description`)}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service-specific sections */}
      {renderOrthodonticsSection()}
      {renderOralSurgerySection()}
      {renderProstheticsSection()}
      {renderImplantologySection()}
      {renderTmjSection()}

      {/* Standard Content (for services without custom sections) */}
      {!['orthodontics', 'oral-surgery', 'prosthetics', 'implantology', 'tmj'].includes(serviceId) && (
        <section className="section-luxury bg-background relative">
          <div className="container-luxury relative">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="card-luxury rounded-lg p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-4">{t('services.whoIsItFor')}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(`services.items.${serviceId}.whoIsItFor`)}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="card-luxury rounded-lg p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <Gift className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-4">{t('services.benefits')}</h3>
                <ul className="space-y-3">
                  {Array.isArray(benefits) && benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="card-luxury rounded-lg p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <ClipboardList className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-4">{t('services.whatToExpect')}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(`services.items.${serviceId}.whatToExpect`)}</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-beige-dark relative">
        <div className="container-luxury relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-title font-serif text-foreground mb-6">{t('home.cta.title')}</h2>
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-title font-serif text-foreground">{t('services.otherServices')}</h2>
          </motion.div>

          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service) => {
              const RelatedIcon = serviceIcons[service];
              return (
                <motion.div key={service} variants={fadeInUp}>
                  <Link to={`/services/${service}`}>
                    <div className="card-luxury rounded-lg p-6 h-full flex flex-col group">
                      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                        {RelatedIcon && <RelatedIcon className="w-5 h-5 text-primary" />}
                      </div>
                      <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-primary transition-colors">{t(`services.items.${service}.title`)}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{t(`services.items.${service}.shortDesc`)}</p>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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
