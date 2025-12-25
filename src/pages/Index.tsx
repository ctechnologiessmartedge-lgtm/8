import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProductCategories from "@/components/home/ProductCategories";
import GallerySection from "@/components/home/GallerySection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  useEffect(() => {
    // Add structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "C Technologies Smart Edge",
      "description": "Advanced CCTV, access control, home automation, and smart security solutions provider in Vijayawada, Andhra Pradesh",
      "url": "https://ctechnologies-smartedge.com",
      "logo": "https://ctechnologies-smartedge.com/logo.png",
      "image": "https://ctechnologies-smartedge.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Indra Colony, Krishna Lanka",
        "addressLocality": "Vijayawada",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "520013",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "16.5062",
        "longitude": "80.6480"
      },
      "telephone": "+91-9010727204",
      "email": "ctechnologies.smartedge@gmail.com",
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "14:00"
        }
      ],
      "areaServed": {
        "@type": "City",
        "name": ["Vijayawada", "Guntur", "Tenali", "Mangalagiri", "Amaravati"]
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Security and Smart Technology Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CCTV & Surveillance Systems"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Biometric & Access Control Systems"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Home Automation Solutions"
            }
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>C Technologies Smart Edge | Security & Smart Solutions Vijayawada</title>
        <meta
          name="description"
          content="C Technologies Smart Edge provides advanced CCTV, access control, home automation, and smart security solutions in Vijayawada. Live Smartly with our expert installations."
        />
        <meta name="keywords" content="CCTV Vijayawada, security systems, home automation, access control, smart home, surveillance cameras, biometric access control, video door phone, smart lighting, motion sensor lights, LED panels, smart security solutions Andhra Pradesh, CCTV installation Vijayawada, home automation Vijayawada, access control systems, smart home solutions, security cameras, IP cameras, night vision cameras, fingerprint recognition, face recognition, RFID access, video intercom, smart gates, alarm systems, IT support Vijayawada, network setup, structured cabling, projectors, sound systems, C Technologies Smart Edge, smart living solutions, ChatGPT, AI security solutions" />
        <meta name="author" content="C Technologies Smart Edge" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://ctechnologies-smartedge.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ctechnologies-smartedge.com/" />
        <meta property="og:title" content="C Technologies Smart Edge | Security & Smart Solutions Vijayawada" />
        <meta property="og:description" content="Advanced CCTV, access control, home automation, and smart security solutions in Vijayawada. Expert installations with 10+ years of experience." />
        <meta property="og:image" content="https://ctechnologies-smartedge.com/logo.png" />
        <meta property="og:site_name" content="C Technologies Smart Edge" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://ctechnologies-smartedge.com/" />
        <meta name="twitter:title" content="C Technologies Smart Edge | Security & Smart Solutions Vijayawada" />
        <meta name="twitter:description" content="Advanced CCTV, access control, home automation, and smart security solutions in Vijayawada." />
        <meta name="twitter:image" content="https://ctechnologies-smartedge.com/logo.png" />
        
        {/* Additional SEO */}
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Vijayawada" />
        <meta name="geo.position" content="16.5062;80.6480" />
        <meta name="ICBM" content="16.5062, 80.6480" />
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesOverview />
        <ProductCategories />
        <GallerySection />
        <WhyChooseUs />
        <CTABanner />
      </Layout>
    </>
  );
};

export default Index;
