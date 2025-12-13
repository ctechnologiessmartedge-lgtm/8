import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, Camera, Fingerprint, Video, Home, DoorOpen, Bell, Monitor, Speaker, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Camera,
    title: "Hikvision 4MP IP Camera",
    category: "CCTV Cameras",
    description: "High-definition IP camera with night vision, motion detection, and remote viewing capabilities.",
    price: "Starting ₹3,500",
    features: ["4MP Resolution", "Night Vision", "Mobile App", "Weatherproof"],
  },
  {
    icon: Camera,
    title: "CP Plus 8-Channel DVR Kit",
    category: "CCTV Systems",
    description: "Complete surveillance kit with 8 cameras, DVR, and all installation accessories.",
    price: "Starting ₹25,000",
    features: ["8 Cameras", "1TB Storage", "Remote Access", "HD Recording"],
  },
  {
    icon: Fingerprint,
    title: "ZKTeco Biometric Attendance",
    category: "Access Control",
    description: "Fingerprint and face recognition attendance system with software and reports.",
    price: "Starting ₹8,500",
    features: ["Fingerprint", "Face Recognition", "USB/WiFi", "Software Included"],
  },
  {
    icon: Fingerprint,
    title: "RFID Card Access System",
    category: "Access Control",
    description: "Secure card-based access control for doors with audit trail and user management.",
    price: "Starting ₹6,000",
    features: ["RFID Cards", "Door Lock", "User Management", "Access Logs"],
  },
  {
    icon: Video,
    title: "Video Door Phone 7-inch",
    category: "Intercom Systems",
    description: "Color video door phone with 7-inch screen, night vision camera, and door unlock.",
    price: "Starting ₹5,500",
    features: ["7\" Color Display", "Night Vision", "Door Unlock", "Intercom"],
  },
  {
    icon: Home,
    title: "Smart Home Automation Kit",
    category: "Home Automation",
    description: "Control lights, fans, and AC with voice commands and mobile app. Works with Alexa & Google.",
    price: "Starting ₹15,000",
    features: ["Voice Control", "Mobile App", "4 Switches", "Scene Control"],
  },
  {
    icon: DoorOpen,
    title: "Automatic Sliding Gate Motor",
    category: "Gate Automation",
    description: "Heavy-duty sliding gate motor with remote controls and safety sensors.",
    price: "Starting ₹18,000",
    features: ["500kg Capacity", "2 Remotes", "Safety Sensors", "Auto-Close"],
  },
  {
    icon: Bell,
    title: "Wireless Alarm System",
    category: "Security Alarms",
    description: "Complete wireless alarm kit with motion sensors, door contacts, and mobile alerts.",
    price: "Starting ₹12,000",
    features: ["Wireless", "Motion Sensors", "Mobile Alerts", "Loud Siren"],
  },
  {
    icon: Monitor,
    title: "Desktop Computer Package",
    category: "IT Solutions",
    description: "Complete desktop setup with monitor, CPU, keyboard, and mouse for office use.",
    price: "Starting ₹28,000",
    features: ["Intel i3/i5", "8GB RAM", "SSD Storage", "21\" Monitor"],
  },
  {
    icon: Speaker,
    title: "Conference Room Projector",
    category: "AV Solutions",
    description: "Full HD projector perfect for presentations and meetings in offices and schools.",
    price: "Starting ₹35,000",
    features: ["Full HD", "3600 Lumens", "HDMI/VGA", "Keystone Correction"],
  },
  {
    icon: Speaker,
    title: "PA Sound System",
    category: "Audio Systems",
    description: "Public address system with amplifier, speakers, and microphone for announcements.",
    price: "Starting ₹22,000",
    features: ["120W Amplifier", "4 Speakers", "Wireless Mic", "USB/Bluetooth"],
  },
  {
    icon: Camera,
    title: "Solar Powered CCTV",
    category: "CCTV Cameras",
    description: "Off-grid solar powered camera with battery backup for remote locations.",
    price: "Starting ₹15,000",
    features: ["Solar Panel", "Battery Backup", "4G SIM", "Cloud Storage"],
  },
];

const whatsappNumber = "919876543210";

const Products = () => {
  const getWhatsAppLink = (productName: string) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the "${productName}". Please share more details and pricing.`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <>
      <Helmet>
        <title>Products | C Technologies Smart Edge</title>
        <meta
          name="description"
          content="Browse our range of CCTV cameras, access control systems, home automation products, and IT solutions. Quality products at competitive prices in Vijayawada."
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
                Our Products
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Quality Security & Smart Products
              </h1>
              <p className="text-xl text-primary-foreground/70 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Explore our range of premium CCTV cameras, access control systems, 
                home automation devices, and IT solutions at competitive prices.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding bg-background">
          <div className="container-main">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div
                  key={product.title}
                  className="group bg-card rounded-2xl border border-border shadow-soft card-hover overflow-hidden flex flex-col"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Product Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)] transition-all duration-300">
                        <product.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-accent/5 border border-accent/10 rounded text-xs text-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Product Footer */}
                  <div className="mt-auto p-6 pt-4 border-t border-border bg-muted/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground">Price</span>
                        <p className="font-bold text-lg text-accent">{product.price}</p>
                      </div>
                      <a
                        href={getWhatsAppLink(product.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="accent" size="sm" className="group/btn">
                          <MessageCircle className="w-4 h-4" />
                          Enquire
                          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </a>
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
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Can't Find What You Need?
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              We work with all major brands and can source any security or smart technology 
              product. Contact us for custom requirements and bulk orders.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I need help finding a specific product. Can you assist?")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" className="group">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Products;
