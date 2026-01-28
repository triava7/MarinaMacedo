import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import logo from '@/img/logo.png'

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/protocols', label: t('nav.protocols') },
    { path: '/contacts', label: t('nav.contacts') },
  ];

  const locations = [
    {
      name: 'Amares',
      phone: '253 994 232',
      address: 'Rua Santa Catarina n36 A, 4720-352 Ferreiros Amares',
    },
    {
      name: 'Adaúfe',
      phone: '253 284 121',
      address: 'Travessa do Comércio n12 sala 2, 4710-820 Adaúfe',
    },
    {
      name: 'Bouro',
      phone: '253 377 770',
      address: 'Largo do Terreiro, Edif. da Caixa Agrícola, 4720-688 Bouro Santa Maria',
    },
  ];

  return (
    <footer className="bg-charcoal-dark border-t border-border">
      {/* Main Footer Content */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={logo}
                      alt="Logo"
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                </div>
              <div className="hidden sm:block">
                <span className="text-foreground font-serif text-lg tracking-wide">Marina Macedo</span>
                <span className="block text-primary text-xs tracking-widest uppercase">Clínica Médico-Dentária</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-serif text-lg mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-primary font-serif text-lg mb-6">{t('contacts.info.title')}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:clinicamarina@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  clinicamarina@gmail.com
                </a>
              </li>
              {locations.map((loc) => (
                <li key={loc.name}>
                  <a
                    href={`tel:+351${loc.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    <span>
                      <strong className="text-foreground">{loc.name}:</strong> {loc.phone}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="text-primary font-serif text-lg mb-6">{t('footer.schedule')}</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p>{t('footer.weekdays')}</p>
                  <p>{t('footer.saturday')}</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="text-foreground font-serif text-sm mb-3">{t('footer.legal')}</h5>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors duration-300">
                    {t('footer.privacy')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors duration-300">
                    {t('footer.terms')}
                  </a>
                </li>
                <li>
                  <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                    {t('footer.complaints')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-luxury py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {currentYear} Clínica Dentária Marina Macedo e Cª Lda. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-muted-foreground text-xs">Amares</span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-muted-foreground text-xs">Adaúfe</span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-muted-foreground text-xs">Bouro</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
