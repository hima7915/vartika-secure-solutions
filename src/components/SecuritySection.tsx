import { Shield, Radio, Flame, FileCheck, Clock, Eye, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import controlRoom from '@/assets/control-room.jpg';

const features = [
  { icon: Radio, title: '24/7 Control Room', description: 'Round-the-clock monitoring and coordination' },
  { icon: Flame, title: 'Fire Safety Training', description: 'All personnel trained in fire safety protocols' },
  { icon: FileCheck, title: 'Statutory Compliance', description: '100% adherence to all regulations' },
  { icon: Eye, title: 'Vigilant Personnel', description: 'Alert and responsive security teams' },
  { icon: Clock, title: 'Timely Response', description: 'Quick action in all situations' },
  { icon: Shield, title: 'Licensed Guards', description: 'PSARA verified security personnel' },
];

const SecuritySection = () => {
  return (
    <section id="security" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3" />
            <img
              src={controlRoom}
              alt="Security control room"
              className="relative rounded-2xl w-full shadow-card"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg">
              <p className="font-bold">24/7 Active</p>
              <p className="text-sm opacity-90">Control Room</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-4">
              Security Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Military-Grade <span className="text-gradient-gold">Security Solutions</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Our security services are led by ex-serviceman values of discipline, vigilance, 
              and reliability. We provide comprehensive protection with trained personnel, 
              modern monitoring systems, and 24/7 support for complete peace of mind.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                Why Choose Our Security
              </h4>
              <div className="space-y-2">
                {[
                  'Ex-Serviceman led organization',
                  'PSARA licensed operations',
                  'Tailored security plans',
                  'First aid trained personnel',
                  'Regular performance audits',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Button
              size="lg"
              className="bg-accent hover:bg-gold-light text-accent-foreground font-bold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Security Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
