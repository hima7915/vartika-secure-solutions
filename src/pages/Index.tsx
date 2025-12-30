import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import ManpowerSection from '@/components/ManpowerSection';
import SecuritySection from '@/components/SecuritySection';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // JSON-LD structured data for local business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    "name": "Vartika Security Services",
    "description": "ISO 9001:2015 certified security and manpower company led by Ex-Serviceman, providing trusted security solutions across Madhya Pradesh.",
    "url": "https://www.vartikasecurity.com",
    "telephone": ["+91-9713600864", "+91-9522334488"],
    "email": "vartikaservices1989@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Adarsh Nagar",
      "addressLocality": "Dewas",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "455001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.9676",
      "longitude": "76.0534"
    },
    "founder": {
      "@type": "Person",
      "name": "Bhim Singh Dayma"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Security & Manpower Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Guarding" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facility Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Manpower Supply" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Payroll Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VIP Security" } }
      ]
    },
    "areaServed": {
      "@type": "State",
      "name": "Madhya Pradesh"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Su 00:00-24:00"
  };

  return (
    <>
      <Helmet>
        <title>Vartika Security Services | ISO Certified Security & Manpower Solutions in MP</title>
        <meta name="description" content="Vartika Security Services - ISO 9001:2015 certified security & manpower company led by Ex-Serviceman in Dewas, MP. Security guarding, facility management, manpower supply. Call 9713600864." />
        <meta name="keywords" content="security services dewas, manpower supply madhya pradesh, security guard services MP, facility management, VIP security, payroll services, ex-serviceman security company" />
        <meta name="author" content="Vartika Security Services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vartikasecurity.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Vartika Security Services | Trusted Security & Manpower Solutions" />
        <meta property="og:description" content="ISO 9001:2015 certified security company led by Ex-Serviceman. Professional security guarding, manpower supply & facility management across Madhya Pradesh." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vartikasecurity.com" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vartika Security Services | Security & Manpower Solutions" />
        <meta name="twitter:description" content="ISO certified security company in MP. Ex-Serviceman led, 24/7 support, full compliance." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <ManpowerSection />
        <SecuritySection />
        <Clients />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
