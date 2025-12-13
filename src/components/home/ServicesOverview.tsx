import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Camera,
  Fingerprint,
  Video,
  Home,
  DoorOpen,
  Bell,
  Monitor,
  Speaker,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "CCTV & Surveillance",
    description: "High-definition cameras with remote monitoring and cloud storage for complete visibility.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Access",
    description: "Advanced fingerprint and face recognition systems for secure entry management.",
  },
  {
    icon: Video,
    title: "Video Door Phones",
    description: "See and communicate with visitors from anywhere with smart intercom solutions.",
  },
  {
    icon: Home,
    title: "Home Automation",
    description: "Control lights, AC, curtains, and appliances with smart voice and app control.",
  },
  {
    icon: DoorOpen,
    title: "Automatic Gates",
    description: "Motorized sliding and swing gates with remote access and sensor-based safety.",
  },
  {
    icon: Bell,
    title: "Intrusion Alarms",
    description: "Motion sensors, door contacts, and sirens for comprehensive perimeter protection.",
  },
  {
    icon: Monitor,
    title: "IT Solutions",
    description: "Computer hardware, software, and network solutions for businesses.",
  },
  {
    icon: Speaker,
    title: "AV Systems",
    description: "Professional projectors and sound systems for offices and auditoriums.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Complete Security & Smart Technology Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From surveillance to automation, we provide end-to-end solutions
            tailored for homes, offices, and commercial establishments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 border border-border shadow-soft card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:shadow-glow transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="default" size="lg" className="group">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
