import { Shield, Award, CheckCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import vslogo from '@/assets/vslogo.jpeg';

const certifications = [
  { name: 'ISO 9001:2015', label: 'Quality Certified' },
  { name: 'PSARA', label: 'Licensed' },
  { name: 'MSME', label: 'Registered' },
  { name: 'CAPSI', label: 'Member' },
];

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern"
    >
      {/* Background with Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container-custom px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Banner */}
          <div className="mb-8 animate-fade-up">
            <img 
              src={vslogo} 
              alt="Vartika Security Services Logo" 
              className="w-48 h-48 md:w-64 md:h-64 mx-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-8 animate-fade-up">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Ex-Serviceman Led Organization</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up stagger-1">
            Trusted Security &<br />
            <span className="text-gradient-gold">Manpower Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up stagger-2">
            Delivering professional security and workforce solutions across India 
            with military-grade discipline, integrity, and 24/7 vigilance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up stagger-3">
            <Button
              size="lg"
              className="bg-accent hover:bg-gold-light text-accent-foreground font-bold text-lg px-8 py-6 shadow-glow"
              onClick={scrollToServices}
            >
              Explore Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent/50 text-foreground hover:bg-accent/10 hover:border-accent font-semibold text-lg px-8 py-6"
              onClick={scrollToContact}
            >
              Request Quote
            </Button>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 animate-fade-up stagger-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-lg badge-glow animate-pulse-glow"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <Award className="w-5 h-5 text-accent" />
                <div className="text-left">
                  <p className="text-sm font-bold text-foreground">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50 animate-fade-up stagger-5">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm">Licensed & Verified Workforce</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm">24/7 Control Room Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm">100% Statutory Compliance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-accent/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
