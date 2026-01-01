import { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, Briefcase, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to enhance your security? Contact us for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Google Form Embed */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdb8s_25aZDLX4mV2uptmPH85sKjpQtLysuAComqtzMqU1yLw/viewform?embedded=true"
              style={{
                border: "none",
                width: "100%",
                height: "800px",
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Info & Careers */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground">10 Adarsh Nagar, Dewas (M.P.) 455001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">
                      <a href="tel:9713600864" className="hover:text-accent transition-colors">9713600864</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:vartikaservices1989@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                      vartikaservices1989@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Website</p>
                    <a href="https://www.vartikasecurity.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                      www.vartikasecurity.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Careers Section */}
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Join Our Team</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                We're always looking for disciplined, dedicated individuals to join our security and manpower team. 
                Ex-servicemen and trained professionals are encouraged to apply.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  'Competitive salaries with timely payment',
                  'Full PF, ESI & statutory benefits',
                  'Training and skill development',
                  'Growth opportunities',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full border-accent text-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => window.open('mailto:vartikaservices1989@gmail.com?subject=Career Inquiry', '_blank')}
              >
                Send an Email
              </Button>
              <Button
                variant="outline"
                className="w-full border-accent text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                +91 9522334488
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
