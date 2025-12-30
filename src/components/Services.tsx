import { Shield, Building2, Users, FileText, UserCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Shield,
    title: 'Security Guarding',
    description: 'Professional armed and unarmed security personnel trained in vigilance, access control, and emergency response for complete premises protection.',
    features: ['Armed & Unarmed Guards', 'Access Control', 'Patrol Services', 'Emergency Response'],
  },
  {
    icon: Building2,
    title: 'Facility Management',
    description: 'Comprehensive facility maintenance solutions including housekeeping, maintenance, and infrastructure management for optimal operations.',
    features: ['Housekeeping', 'Maintenance', 'Pest Control', 'Landscaping'],
  },
  {
    icon: Users,
    title: 'Manpower Supply',
    description: 'Skilled and semi-skilled workforce deployment across industries with rigorous training and verification processes.',
    features: ['Skilled Workers', 'Technical Staff', 'Office Support', 'Industrial Labor'],
  },
  {
    icon: FileText,
    title: 'Payroll Services',
    description: 'End-to-end payroll management with full statutory compliance including PF, ESI, and all government requirements.',
    features: ['Salary Processing', 'PF & ESI Compliance', 'Tax Management', 'Timely Distribution'],
  },
  {
    icon: UserCheck,
    title: 'VIP Security',
    description: 'Executive protection and close protection services by specially trained personnel for high-profile individuals and events.',
    features: ['Close Protection', 'Event Security', 'Travel Security', 'Threat Assessment'],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive <span className="text-gradient-gold">Security Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From security guarding to manpower supply, we deliver professional services 
            tailored to your specific needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-6 lg:p-8 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant="outline"
                className="w-full border-accent/30 text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent group/btn"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary via-primary/90 to-primary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Need a Custom Security Solution?
            </h3>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
              We offer tailored service plans designed specifically for your industry and requirements.
              Contact us for a free consultation.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-gold-light text-accent-foreground font-bold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
