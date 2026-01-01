import { Shield, Target, Eye, Users, MapPin, Award } from 'lucide-react';
import founderImage from '@/assets/founder.jpeg';
import coverageMap from '@/assets/coverage-map.jpg';

const values = [
  { icon: Shield, title: 'Discipline', description: 'Military-grade training and protocols' },
  { icon: Eye, title: 'Vigilance', description: '24/7 alertness and monitoring' },
  { icon: Target, title: 'Integrity', description: 'Honest and transparent operations' },
  { icon: Users, title: 'Reliability', description: 'Dependable service delivery' },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Led by <span className="text-gradient-gold">Ex-Serviceman</span> Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A foundation built on military-grade integrity, vigilance, and reliability
          </p>
        </div>

        {/* Founder Message */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl transform rotate-3" />
              <img
                src={founderImage}
                alt="Bhim Singh Dayma - Founder"
                className="relative rounded-2xl w-full object-cover shadow-card"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold">Bhim Singh Dayma</p>
                <p className="text-sm opacity-90">Founder & Ex-Serviceman</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Message from the Founder</h3>
            </div>
            <blockquote className="text-lg text-muted-foreground italic border-l-4 border-accent pl-6">
              "At Vartika Security Services, our mission is not just to deploy personnel — it's to ensure safety, efficiency, and trust at every level. With my background in the armed forces, I've instilled the values of discipline, responsiveness, and accountability in every team member."
            </blockquote>
            <p className="text-muted-foreground">
              Whether it's guarding your premises or supporting your operations with trained manpower, 
              we stand committed to delivering dependable service, always.
            </p>

            {/* Company Story */}
            <div className="pt-6 border-t border-border">
              <h4 className="text-xl font-semibold text-foreground mb-3">Our Story</h4>
              <p className="text-muted-foreground">
                Vartika Security Services is a trusted and reputed name in security and manpower solutions, 
                operating under the experienced leadership of Mr. Bhim Singh Dayma. With a foundation built 
                on military-grade values, we are committed to delivering tailored security and staffing 
                services that meet the evolving needs of clients across industries.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card border border-border rounded-xl p-6 text-center card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-4">
                <value.icon className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Coverage Map */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-accent" />
                <span className="text-accent font-medium">Operational Coverage</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Nation-Wide Rapid Deployment
              </h3>
              <p className="text-muted-foreground mb-6">
                We provide comprehensive service coverage across the entire India, 
                backed by rapid deployment teams that are trained to mobilize at short notice 
                for any location or emergency need.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground">Quick mobilization across nation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground">Emergency response teams ready</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground">Local expertise in every district</span>
                </div>
              </div>
            </div>
            <div className="h-64 lg:h-full min-h-[300px]">
              <img
                src={coverageMap}
                alt="Nationwide coverage map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
