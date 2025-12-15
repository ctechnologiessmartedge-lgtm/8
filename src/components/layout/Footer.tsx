import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Youtube, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/footer-bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.5)'
        }}
      />
      
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/45 to-primary/50 z-[1]" />
      
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent z-[1]" />
      
      <div className="container-main py-6 md:py-16 relative z-[2]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-3 md:mb-6">
              <div className="h-12 md:h-[67.2px] w-auto rounded-lg overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="C Technologies Smart Edge Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-xs md:text-sm leading-relaxed mb-4">
              <span className="font-bold text-blue-500">C Technologies Smart Edge</span> - Providing advanced security, automation, and smart living
              solutions in Vijayawada and nearby regions.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://youtube.com/@ctechnologiessmartedge?si=86SYE30_vtZUC4T3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.facebook.com/share/1D7jUKJkaJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/c_technologies_smart_edge?igsh=dnRjYzF1OWJxcGM="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm md:text-base mb-3 md:mb-6">Quick Links</h4>
            <ul className="space-y-1.5 md:space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm md:text-base mb-3 md:mb-6">Our Services</h4>
            <ul className="space-y-1.5 md:space-y-3">
              {[
                "CCTV Surveillance",
                "Access Control",
                "Home Automation",
                "Automatic Gates",
                "Alarm Systems",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm md:text-base mb-3 md:mb-6">Contact Us</h4>
            <ul className="space-y-2 md:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <a
                  href="https://maps.app.goo.gl/JBSJFvqbpepJHDtEA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Indra Colony, Krishna Lanka, Vijayawada, Andhra Pradesh 520013
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="tel:+919010727204"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  +91-9010727204
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="tel:+919010700204"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  +91-9010700204
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:ctechnologies.smartedge@gmail.com"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  ctechnologies.smartedge@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 md:mt-12 pt-3 md:pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
            <div className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-2 text-center md:text-left">
              <p className="text-primary-foreground/60 text-sm">
                © {currentYear} C Technologies Smart Edge. All rights reserved.
              </p>
              <span className="text-primary-foreground/40">•</span>
              <p className="text-primary-foreground/60 text-sm">
                Developed by{" "}
                <a
                  href="https://www.octaleads.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  Octaleads Private Limited
                </a>
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <p className="hidden md:block text-primary-foreground/60 text-sm">
                Live Smartly. Stay Secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
