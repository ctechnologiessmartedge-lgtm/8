import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>C Technologies Smart Edge | Security & Smart Solutions Vijayawada</title>
        <meta
          name="description"
          content="C Technologies Smart Edge provides advanced CCTV, access control, home automation, and smart security solutions in Vijayawada. Live Smartly with our expert installations."
        />
        <meta name="keywords" content="CCTV Vijayawada, security systems, home automation, access control, smart home, surveillance cameras" />
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesOverview />
        <WhyChooseUs />
        <CTABanner />
      </Layout>
    </>
  );
};

export default Index;
