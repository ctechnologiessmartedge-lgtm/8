import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91-9010727204",
    link: "tel:+919010727204",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91-9010700204",
    link: "tel:+919010700204",
  },
  {
    icon: Mail,
    title: "Email",
    content: "ctechnologies.smartedge@gmail.com",
    link: "mailto:ctechnologies.smartedge@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Indra Colony, Krishna Lanka, Vijayawada, Andhra Pradesh 520013",
    link: "https://maps.app.goo.gl/JBSJFvqbpepJHDtEA",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sat: 9:00 AM - 10:00 PM | Sun: 10:00 AM - 2:00 PM",
    link: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const whatsappNumber = "919010700204";
  const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in your security solutions. Please share more details."
  );

  return (
    <>
      <Helmet>
        <title>Contact Us | C Technologies Smart Edge</title>
        <meta
          name="description"
          content="Get in touch with C Technologies Smart Edge for security and smart home solutions in Vijayawada. Call, email, or visit us for a free consultation."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-20 md:pt-32 pb-8 md:pb-16 bg-hero relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-contain md:bg-cover"
            style={{
              backgroundImage: 'url(/hero-bg.png)',
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.6
            }}
          />
          <div className="absolute inset-0 bg-primary/20 z-[1]" />
          <div className="absolute inset-0 opacity-10 z-[1]">
            <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container-main relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block animate-fade-in">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Let's Discuss Your Security Needs
              </h1>
              <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <span className="text-2xl md:text-3xl font-bold text-blue-500">
                  C Technologies Smart Edge
                </span>
              </div>
              <p className="text-xl text-primary-foreground/70 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Reach out for a free consultation and customized quote. Our team
                is ready to help you secure your space.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91-9010727204"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your security requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <div className="space-y-6 mb-10">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border shadow-soft"
                    >
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-accent transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-accent/10 rounded-2xl p-8 border border-accent/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                      <MessageCircle className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-foreground">
                        Quick Response via WhatsApp
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Chat with us for instant support
                      </p>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="accent"
                      size="lg"
                      className="w-full"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-main">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Find Us on Map
              </h2>
              <p className="text-muted-foreground">
                Visit our location in Vijayawada, Andhra Pradesh
              </p>
            </div>
            <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-card">
              <div className="w-full h-[400px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps?q=Indra+Colony,+Krishna+Lanka,+Vijayawada,+Andhra+Pradesh+520013&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="C Technologies Smart Edge Location"
                />
              </div>
              <div className="p-6 bg-card border-t border-border">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground font-medium">
                      Indra Colony, Krishna Lanka, Vijayawada, Andhra Pradesh 520013
                    </span>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/JBSJFvqbpepJHDtEA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors font-medium flex items-center gap-2"
                  >
                    Open in Google Maps
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
