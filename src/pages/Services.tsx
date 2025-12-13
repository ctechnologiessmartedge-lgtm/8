import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "CCTV & Surveillance Systems",
    description: "Comprehensive video surveillance solutions with high-definition cameras, night vision capabilities, and remote monitoring access.",
    features: [
      "HD & 4K IP Cameras",
      "Night Vision & IR Cameras",
      "Cloud & Local Storage",
      "Mobile App Monitoring",
      "Motion Detection Alerts",
    ],
    useCases: ["Homes", "Offices", "Retail Stores", "Warehouses", "Schools"],
  },
  {
    icon: Fingerprint,
    title: "Biometric & Access Control",
    description: "Secure access management with fingerprint, face recognition, and card-based systems for controlled entry to your premises.",
    features: [
      "Fingerprint Recognition",
      "Face Recognition",
      "RFID Card Access",
      "Time & Attendance",
      "Visitor Management",
    ],
    useCases: ["Corporate Offices", "Factories", "Apartments", "Data Centers"],
  },
  {
    icon: Video,
    title: "Video Door Phones & Intercoms",
    description: "Smart intercom systems that let you see and communicate with visitors before granting access, enhancing entry security.",
    features: [
      "HD Video Display",
      "Two-Way Audio",
      "Remote Unlock",
      "Mobile Integration",
      "Multi-Unit Support",
    ],
    useCases: ["Homes", "Apartments", "Villas", "Gated Communities"],
  },
  {
    icon: Home,
    title: "Home Automation Solutions",
    description: "Transform your living space with smart automation for lighting, climate, curtains, and appliances controlled via voice or app.",
    features: [
      "Smart Lighting Control",
      "AC & Fan Automation",
      "Motorized Curtains",
      "Voice Control (Alexa/Google)",
      "Scene & Schedule Settings",
    ],
    useCases: ["Homes", "Villas", "Hotels", "Executive Offices"],
  },
  {
    icon: DoorOpen,
    title: "Automatic Sliding Gates",
    description: "Motorized gate systems with remote control, sensor-based safety, and seamless integration with access control systems.",
    features: [
      "Sliding & Swing Gates",
      "Remote Control Operation",
      "Safety Sensors",
      "Solar Power Options",
      "Access Control Integration",
    ],
    useCases: ["Residences", "Commercial Buildings", "Industrial Sites", "Campuses"],
  },
  {
    icon: Bell,
    title: "Intrusion Alarm Systems",
    description: "Comprehensive perimeter protection with motion sensors, door/window contacts, and instant alerts to protect against unauthorized entry.",
    features: [
      "Motion Sensors (PIR)",
      "Door/Window Contacts",
      "Glass Break Detectors",
      "Siren & Strobe Alerts",
      "Mobile Notifications",
    ],
    useCases: ["Homes", "Jewelry Stores", "Banks", "Warehouses"],
  },
  {
    icon: Monitor,
    title: "Computer Hardware & Software",
    description: "Complete IT solutions including computer sales, networking, software installation, and technical support for businesses.",
    features: [
      "Desktop & Laptop Sales",
      "Network Setup & Cabling",
      "Software Installation",
      "Hardware Repair",
      "IT Support Services",
    ],
    useCases: ["Offices", "Schools", "Retail", "Small Businesses"],
  },
  {
    icon: Speaker,
    title: "Projectors & Sound Systems",
    description: "Professional audio-visual solutions for conference rooms, auditoriums, and entertainment spaces with premium equipment.",
    features: [
      "HD/4K Projectors",
      "Conference Room Solutions",
      "PA & Sound Systems",
      "Interactive Displays",
      "Video Conferencing Setup",
    ],
    useCases: ["Conference Rooms", "Auditoriums", "Classrooms", "Home Theaters"],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | C Technologies Smart Edge</title>
        <meta
          name="description"
          content="Explore our comprehensive security and smart technology services including CCTV, access control, home automation, and more in Vijayawada."
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
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Complete Security & Smart Technology Solutions
              </h1>
              <p className="text-xl text-primary-foreground/70 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                From surveillance to automation, we offer end-to-end solutions
                designed to protect and enhance your home, office, or commercial
                space.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-main">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-accent" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                          <span className="text-foreground text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Use Cases */}
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Visual */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-card rounded-2xl p-8 border border-border shadow-card h-full flex items-center justify-center min-h-[280px]">
                      <div className="text-center">
                        <div className="w-24 h-24 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                          <service.icon className="w-12 h-12 text-accent" />
                        </div>
                        <p className="text-muted-foreground text-sm max-w-xs">
                          Professional installation with warranty and dedicated support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-hero">
          <div className="container-main text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Our team will assess your requirements and design a tailored
              security and automation system just for you.
            </p>
            <Link to="/contact">
              <Button variant="hero" className="group">
                Request Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
