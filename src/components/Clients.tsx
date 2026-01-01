import Brilliant from "@/assets/clients/logo-brilliant.jpeg"
import Unbrako from "@/assets/clients/logo-unbrako.jpeg"
import RSPL from "@/assets/clients/logo-rspl.jpeg"
import Aban from "@/assets/clients/logo-aban.jpeg"
import Dinero from "@/assets/clients/logo-dinero.jpeg"
import Geofast from "@/assets/clients/logo-geofast.jpeg"
import Honda from "@/assets/clients/logo-honda.jpeg"
import Madhur from "@/assets/clients/logo-madhur.jpeg"
import Mahindra from "@/assets/clients/logo-mahindra.jpeg"
import Modware from "@/assets/clients/logo-modware.jpeg"
import Purasure from "@/assets/clients/logo-purasure.jpeg"
import Purbasha from "@/assets/clients/logo-purbasha.jpeg"
import Sabho from "@/assets/clients/logo-sabho.jpeg"
import Suroj from "@/assets/clients/logo-suroj.jpeg"
import Tata from "@/assets/clients/logo-tata.jpeg"
import Ugc from "@/assets/clients/logo-ugc.jpeg"
import WhiteSpread from "@/assets/clients/logo-whitespread.jpeg"
import  "../App.css"

const clients = [
  { src: Brilliant, alt: 'Brilliant', title: 'Brilliant' },
  { src: Unbrako, alt: 'Unbrako', title: 'Unbrako' },
  { src: RSPL, alt: 'RSPL', title: 'RSPL' },
  { src: Aban, alt: 'Aban', title: 'Aban' },
  { src: Dinero, alt: 'Dinero', title: 'Dinero' },
  { src: Geofast, alt: 'Geofast', title: 'Geofast' },
  { src: Honda, alt: 'Honda', title: 'Honda' },
  { src: Madhur, alt: 'Madhur', title: 'Madhur' },
  { src: Mahindra, alt: 'Mahindra', title: 'Mahindra' },
  { src: Modware, alt: 'Modware', title: 'Modware' },
  { src: Purasure, alt: 'Purasure', title: 'Purasure' },
  { src: Purbasha, alt: 'Purbasha', title: 'Purbasha' },
  { src: Sabho, alt: 'Sabho', title: 'Sabho' },
  { src: Suroj, alt: 'Suroj', title: 'Suroj' },
  { src: Tata, alt: 'Tata', title: 'Tata' },
  { src: Ugc, alt: 'Ugc', title: 'Ugc' },
  { src: WhiteSpread, alt: 'WhiteSpread', title: 'WhiteSpread' },
];

const Clients = () => {
  return (
    <section id="clients" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-4">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient-gold">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are proud to serve leading organizations across various industries
          </p>
        </div>

        {/* Client Value Proposition */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12 text-center">
          <blockquote className="text-lg md:text-xl text-foreground/90 italic max-w-3xl mx-auto">
            "We believe in value-added services with quality manpower, timely payment distribution, 
            100% government compliance and 24/7 audit ready preparation."
          </blockquote>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((client) => (
            <div
              key={client.title}
              className="group bg-card border border-border rounded-xl p-6 flex items-center justify-center h-24 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
            >
              <img className="client-img" src={client.src} alt={client.alt}/>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '500+', label: 'Security Personnel' },
            { value: '100+', label: 'Happy Clients' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-card border border-border rounded-xl">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
