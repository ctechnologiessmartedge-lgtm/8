import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  MapPin,
  Shield,
  Lightbulb,
  Heart,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We prioritize the safety of our clients above all else, delivering robust and reliable solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying ahead with the latest technology to provide cutting-edge smart solutions.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "Building lasting relationships through exceptional service and support.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | C Technologies Smart Edge</title>
        <meta
          name="description"
          content="Learn about C Technologies Smart Edge - your trusted partner for security and smart technology solutions in Vijayawada with 10+ years of experience."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container-main relative z-10">
            <div className="max-w-3xl">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block animate-fade-in">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Empowering Spaces with Smart Security Since 2014
              </h1>
              <p className="text-xl text-primary-foreground/70 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                C Technologies Smart Edge is a leading provider of integrated
                security and automation solutions, serving homes and businesses
                across Vijayawada and neighboring regions.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded with a vision to make advanced security technology
                    accessible to everyone, C Technologies Smart Edge has grown
                    from a small local business to a trusted name in the
                    security industry.
                  </p>
                  <p>
                    Over the past decade, we have successfully completed more
                    than 500 installations across residential complexes,
                    commercial buildings, educational institutions, and
                    industrial facilities.
                  </p>
                  <p>
                    Our team of certified technicians combines technical
                    expertise with a deep understanding of our clients' needs,
                    delivering customized solutions that provide real peace of
                    mind.
                  </p>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "10+", label: "Years of Experience" },
                    { value: "500+", label: "Successful Projects" },
                    { value: "50+", label: "Team Members" },
                    { value: "24/7", label: "Customer Support" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted/30">
          <div className="container-main">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide innovative, reliable, and affordable security and
                  smart technology solutions that empower our clients to live
                  and work safely. We are committed to delivering excellence
                  through quality products, professional installation, and
                  dedicated after-sales support.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and preferred partner for security and
                  smart automation solutions in Andhra Pradesh, recognized for
                  our technological innovation, customer satisfaction, and
                  contribution to creating safer communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background">
          <div className="container-main">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="text-center bg-card rounded-xl p-8 border border-border shadow-soft card-hover"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-10 md:py-12 bg-hero relative overflow-hidden">
          {/* Background Design */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/98 to-primary z-0" />
          
          {/* Glow Effects */}
          <div className="absolute inset-0 z-[1]">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/15 rounded-full blur-3xl" />
          </div>
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.05] z-[1]"
            style={{
              backgroundImage: `linear-gradient(hsl(187 94% 43% / 0.2) 1px, transparent 1px), linear-gradient(90deg, hsl(187 94% 43% / 0.2) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
          
          {/* Border Accents */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent z-[1]" />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent z-[1]" />
          
          <div className="container-main relative z-[2]">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4 shadow-glow">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                Our Service Areas
              </h2>
              <p className="text-base md:text-lg text-primary-foreground/70">
                Proudly serving Vijayawada and the surrounding regions with
                professional security solutions
              </p>
            </div>

            {/* Service Areas Grid */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {[
                "Vijayawada",
                "Guntur",
                "Tenali",
                "Mangalagiri",
                "Amaravati",
                "Tadepalli",
                "Gudivada",
                "Machilipatnam",
              ].map((city, index) => (
                <span
                  key={city}
                  className="px-6 py-3 bg-secondary/40 backdrop-blur-sm rounded-full text-primary-foreground font-medium border border-primary-foreground/20 hover:border-accent/50 hover:bg-accent/10 hover:shadow-glow transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {city}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
