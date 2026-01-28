import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
const logo = '/assets/logo.png';
import { CONTACT_INFO } from '@/config/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-elegant py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <img src={logo} alt="Foto by Eva" className="h-16 w-auto brightness-0 invert opacity-90" />
            <p className="text-ivory/70 text-sm leading-relaxed">
              Preserving life's most precious moments with artistry and heart.
              30+ years of capturing timeless portraits in Virginia Beach.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-6">Explore</h4>
            <ul className="space-y-3">
              {['About Eva', 'Our Studio', 'Galleries', 'Investment', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-ivory/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Galleries */}
          <div>
            <h4 className="text-lg font-serif mb-6">Galleries</h4>
            <ul className="space-y-3">
              {['Maternity', 'Newborns', 'Babies', 'Families', 'Women', 'Headshots'].map((item) => (
                <li key={item}>
                  <Link
                    to="/galleries"
                    className="text-ivory/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-ivory/70 text-sm">
                  Virginia Beach, VA<br />
                  Serving Hampton Roads
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={CONTACT_INFO.phone.link} className="text-ivory/70 hover:text-primary transition-colors text-sm">
                  {CONTACT_INFO.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={CONTACT_INFO.email.link} className="text-ivory/70 hover:text-primary transition-colors text-sm">
                  {CONTACT_INFO.email.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-ivory/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-ivory/50 text-sm">
              © {currentYear} Foto by Eva. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-ivory/50 hover:text-ivory text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-ivory/50 hover:text-ivory text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
