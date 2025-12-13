import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-12 md:py-16 bg-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/50 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Secure Your Space?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10">
            Get a free consultation and customized quote for your security and
            automation needs. Our experts are ready to help you live smartly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" className="w-full sm:w-auto group">
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button variant="hero-outline" className="w-full sm:w-auto">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/60 text-sm mb-3">
              Serving Vijayawada & Surrounding Areas
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {["Vijayawada", "Guntur", "Tenali", "Mangalagiri", "Amaravati"].map(
                (city) => (
                  <span
                    key={city}
                    className="text-primary-foreground/50 text-sm font-medium"
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
