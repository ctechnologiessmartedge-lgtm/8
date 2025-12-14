import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-8 md:py-10 bg-hero relative overflow-hidden">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/98 to-primary z-0" />
      
      {/* Enhanced Glow Effects - More Visible */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/25 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-3xl" />
      </div>
      
      {/* Visible Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08] z-[1]"
        style={{
          backgroundImage: `linear-gradient(hsl(187 94% 43% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(187 94% 43% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Subtle Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-primary/20 z-[1]" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.1) 100%)'
        }}
      />
      
      {/* Top Border Accent - More Visible */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/70 to-transparent z-[1]" />
      
      {/* Bottom Border Accent - More Visible */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent z-[1]" />

      <div className="container-main relative z-[2]">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3">
            Ready to Secure Your Space?
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/70 mb-6">
            Get a free consultation and customized quote for your security and automation needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="w-full sm:w-auto group min-w-[160px]">
                Get Free Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto min-w-[160px]">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Trust Indicators - Compact */}
          <div className="mt-6 pt-4 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/60 text-xs mb-2">
              Serving Vijayawada & Surrounding Areas
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              {["Vijayawada", "Guntur", "Tenali", "Mangalagiri", "Amaravati"].map(
                (city) => (
                  <span
                    key={city}
                    className="text-primary-foreground/50 font-medium"
                  >
                    {city}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
