import { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, Briefcase, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                    className="bg-background border-border"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="bg-background border-border"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full h-10 px-3 py-2 bg-background border border-border rounded-md text-foreground"
                >
                  <option value="">Select a service</option>
                  <option value="security">Security Guarding</option>
                  <option value="facility">Facility Management</option>
                  <option value="manpower">Manpower Supply</option>
                  <option value="payroll">Payroll Services</option>
                  <option value="vip">VIP Security</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="bg-background border-border"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-gold-light text-accent-foreground font-bold">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Careers */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
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
                      {' | '}
                      <a href="tel:9522334488" className="hover:text-accent transition-colors">9522334488</a>
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
                    <a href="https://www.vartikasecurity.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                      www.vartikasecurity.com
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
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
