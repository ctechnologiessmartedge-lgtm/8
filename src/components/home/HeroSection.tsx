import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Camera, Lock, Wifi } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(187 94% 43% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(187 94% 43% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-main relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/80">
                Trusted Security Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Secure Your World with{" "}
              <span className="text-gradient">Smart Technology</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Advanced security, automation, and smart living solutions for
              homes, offices, and commercial spaces. Experience safety and
              convenience like never before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact">
                <Button variant="hero">Get a Quote</Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline">Explore Services</Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-primary-foreground/10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "500+", label: "Installations" },
                { value: "10+", label: "Years Experience" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Camera, label: "CCTV Systems", desc: "24/7 Surveillance" },
                    { icon: Lock, label: "Access Control", desc: "Biometric Security" },
                    { icon: Wifi, label: "Smart Home", desc: "Connected Living" },
                    { icon: Shield, label: "Protection", desc: "Complete Safety" },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="bg-primary/30 rounded-xl p-5 border border-primary-foreground/5 hover:border-accent/30 transition-all duration-300 hover:shadow-glow group"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary-foreground mb-1">
                        {item.label}
                      </h3>
                      <p className="text-sm text-primary-foreground/60">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm shadow-glow animate-pulse-glow">
                Live Smartly
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
