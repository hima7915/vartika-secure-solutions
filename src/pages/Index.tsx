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
  // JSON-LD structured data - BreadcrumbList for better search appearance
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.vartikasecurity.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://www.vartikasecurity.in/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": "https://www.vartikasecurity.in/#services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://www.vartikasecurity.in/#contact"
      }
    ]
  };

  // FAQ structured data for rich snippets
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Vartika Security provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vartika Security Services provides professional security guarding, facility management, manpower supply, payroll services, and VIP security solutions. We are ISO 9001:2015 certified and led by an Ex-Serviceman."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Vartika Security located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vartika Security Services is headquartered at 10 Adarsh Nagar, Dewas, Madhya Pradesh 455001, India. We provide services across Madhya Pradesh and other parts of India."
        }
      },
      {
        "@type": "Question",
        "name": "Is Vartika Security ISO certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Vartika Security Services is ISO 9001:2015 certified, ensuring the highest quality standards in security and manpower services."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Vartika Security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Vartika Security at +91-9713600864 or +91-9522334488. You can also email us at vartikaservices1989@gmail.com. We provide 24/7 customer support."
        }
      },
      {
        "@type": "Question",
        "name": "Which companies trust Vartika Security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vartika Security is trusted by major companies including Tata, Honda, Mahindra, and many other industrial and commercial clients across India."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Vartika Security Services | Best Security & Manpower Company in Dewas, MP</title>
        <meta name="description" content="Vartika Security Services - ISO 9001:2015 certified security & manpower company led by Ex-Serviceman in Dewas, Madhya Pradesh. Security guarding, facility management, manpower supply, payroll services. Trusted by Tata, Honda, Mahindra. Call +91-9713600864." />
        <meta name="keywords" content="vartika security, vartika security services, security services dewas, security company madhya pradesh, manpower supply india, security guard services MP, facility management dewas, VIP security india, payroll services, ex-serviceman security company, ISO certified security, security agency dewas, best security company MP, industrial security services" />
        <meta name="author" content="Vartika Security Services" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.vartikasecurity.in/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Vartika Security Services | Best Security & Manpower Company in MP, India" />
        <meta property="og:description" content="ISO 9001:2015 certified security company led by Ex-Serviceman. Professional security guarding, manpower supply, facility management & payroll services. Trusted by Tata, Honda, Mahindra. 24/7 support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vartikasecurity.in/" />
        <meta property="og:image" content="https://www.vartikasecurity.in/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Vartika Security Services" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vartika Security Services | Security & Manpower Solutions India" />
        <meta name="twitter:description" content="ISO 9001:2015 certified security company led by Ex-Serviceman. Trusted by Tata, Honda, Mahindra. 24/7 support across India." />
        <meta name="twitter:image" content="https://www.vartikasecurity.in/og-image.jpg" />
        
        {/* Structured Data - Breadcrumbs */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
        
        {/* Structured Data - FAQ for rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
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