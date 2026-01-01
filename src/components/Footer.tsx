import { Shield, Phone, Mail, MapPin, Award } from 'lucide-react';

const certifications = ['ISO 9001:2015', 'PSARA Licensed', 'MSME Registered', 'CAPSI Member'];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Clients', href: '#clients' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-accent" />
              <div>
                <span className="text-xl font-bold text-foreground">VARTIKA</span>
                <p className="text-xs text-accent">SECURITY SERVICES</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              An ISO 9001:2015 certified security and manpower company led by Ex-Serviceman, 
              delivering trusted solutions across Madhya Pradesh.
            </p>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span key={cert} className="inline-flex items-center gap-1 px-2 py-1 bg-accent/10 border border-accent/30 rounded text-xs text-accent">
                  <Award className="w-3 h-3" />
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Security Guarding</li>
              <li>Facility Management</li>
              <li>Manpower Supply</li>
              <li>Payroll Services</li>
              <li>VIP Security</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>10 Adarsh Nagar, Dewas (M.P.) 455001</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <div>
                  <a href="tel:9713600864" className="hover:text-accent transition-colors">9713600864</a>
                  {' | '}
                  <a href="tel:9522334488" className="hover:text-accent transition-colors">9522334488</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:vartikaservices1989@gmail.com" className="hover:text-accent transition-colors break-all">
                  vartikaservices1989@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Vartika Security Services. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Ex-Serviceman Led | Trusted Since 2011
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
