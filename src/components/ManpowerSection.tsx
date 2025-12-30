import { Shield, Clock, FileCheck, Users, Headphones, GraduationCap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import manpowerTeam from '@/assets/manpower-team.jpg';

const benefits = [
  { icon: Users, title: 'Skilled Workforce', description: 'Trained and verified personnel' },
  { icon: Clock, title: 'Quick Deployment', description: 'Rapid mobilization across MP' },
  { icon: FileCheck, title: 'Full Compliance', description: 'PF, ESI, WC Policy covered' },
  { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock assistance' },
  { icon: GraduationCap, title: 'Training Programs', description: 'Continuous skill development' },
  { icon: Shield, title: 'Verified Background', description: 'Thorough background checks' },
];

const ManpowerSection = () => {
  return (
    <section id="manpower" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-4">
              Manpower Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Professional <span className="text-gradient-gold">Workforce Solutions</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              We believe in value-added services with quality manpower, timely payment distribution, 
              100% government compliance, and 24/7 audit-ready preparation. Our manpower solutions 
              are designed to improve workforce productivity while maintaining the highest standards.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance List */}
            <div className="bg-card border border-border rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-foreground mb-4">Our Compliance Standards</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  'Employee Salary between 5th to 7th',
                  'Provident Fund (PF)',
                  'Employee State Insurance (ESI)',
                  'GST Compliance',
                  'WC Policy',
                  'Labour Welfare',
                  'Legal Documents Submission',
                  '100% Tax Liabilities Paid',
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
              Request Manpower Quote
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-2xl transform -rotate-3" />
            <img
              src={manpowerTeam}
              alt="Professional manpower team"
              className="relative rounded-2xl w-full shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManpowerSection;
