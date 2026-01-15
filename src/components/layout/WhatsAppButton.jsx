import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // WhatsApp chat link with pre-filled message
  const whatsappNumber = '351925460202';
  const message = encodeURIComponent('Olá! Gostaria de obter mais informações sobre a clínica.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold-lg hover:shadow-gold transition-shadow duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-background transition-transform duration-300 group-hover:scale-110" />
      
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '2s' }} />
    </motion.a>
  );
};

export default WhatsAppButton;
