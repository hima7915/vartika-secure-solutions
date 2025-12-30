const clients = [
  'Unbrako',
  'ORSPL',
  'White Spread',
  'TATA',
  'Mahindra',
  'Brilliant',
  'Aban',
  'Geofast',
  'OUGC',
  'Sabho',
  'Madhur',
  'Suroj',
  'Modware',
  'Supply Chain Solutions',
  'Foods Pvt. Ltd.',
  'HINR',
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
              key={client}
              className="group bg-card border border-border rounded-xl p-6 flex items-center justify-center h-24 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
            >
              <span className="text-muted-foreground group-hover:text-foreground font-semibold text-sm text-center transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: '35+', label: 'Years Experience' },
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
