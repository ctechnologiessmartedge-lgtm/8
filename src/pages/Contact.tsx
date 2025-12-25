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

    try {
      const response = await fetch("https://formspree.io/f/mlgryknz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = "919010700204";
  const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in your security solutions. Please share more details."
  );

  return (
    <>
      <Helmet>
        <title>Contact Us | C Technologies Smart Edge - Vijayawada</title>
        <meta
          name="description"
          content="Get in touch with C Technologies Smart Edge for security and smart home solutions in Vijayawada. Call +91-9010727204, email, WhatsApp, or visit us at Indra Colony, Krishna Lanka for a free consultation."
        />
        <meta name="keywords" content="contact C Technologies Smart Edge, security company contact Vijayawada, CCTV installation contact, smart home consultation, free security consultation, contact security experts, WhatsApp security consultation, security company phone number, C Technologies Smart Edge address, ChatGPT, AI security consultation, smart living consultation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ctechnologies-smartedge.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ctechnologies-smartedge.com/contact" />
        <meta property="og:title" content="Contact Us | C Technologies Smart Edge - Vijayawada" />
        <meta property="og:description" content="Contact C Technologies Smart Edge for security solutions. Call, email, WhatsApp, or visit us in Vijayawada for free consultation." />
        <meta property="og:image" content="https://ctechnologies-smartedge.com/logo.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | C Technologies Smart Edge" />
        <meta name="twitter:description" content="Contact us for security and smart home solutions in Vijayawada. Free consultation available." />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-20 md:pt-32 pb-8 md:pb-16 bg-hero relative overflow-hidden w-full">
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
          <div className="absolute inset-0 opacity-10 z-[1] overflow-hidden">
            <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl hidden md:block" />
          </div>
          <div className="container-main relative z-10 w-full">
            <div className="max-w-3xl mx-auto text-center px-4">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block animate-fade-in">
                Contact Us
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in px-2" style={{ animationDelay: "0.1s" }}>
                Let's Discuss Your Security Needs
              </h1>
              <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500">
                  C Technologies Smart Edge
                </span>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/70 animate-fade-in px-2" style={{ animationDelay: "0.2s" }}>
                Reach out for a free consultation and customized quote. Our team
                is ready to help you secure your space.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background w-full overflow-hidden">
          <div className="container-main w-full">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-4 sm:p-6 md:p-8 border border-border shadow-card w-full min-w-0">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} action="https://formspree.io/f/mlgryknz" method="POST" className="space-y-6">
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
                    <div className="min-w-0">
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
                        className="h-12 w-full"
                      />
                    </div>
                    <div className="min-w-0">
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
                        className="h-12 w-full"
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
              <div className="w-full min-w-0">
                <div className="space-y-6 mb-10">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="flex items-start gap-3 sm:gap-4 bg-card rounded-xl p-4 sm:p-5 border border-border shadow-soft w-full min-w-0"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base break-words"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm sm:text-base break-words">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-accent/10 rounded-2xl p-4 sm:p-6 md:p-8 border border-accent/20 w-full min-w-0">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-accent-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-lg sm:text-xl text-foreground">
                        Quick Response via WhatsApp
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">
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
        <section className="section-padding bg-muted/30 w-full overflow-hidden">
          <div className="container-main w-full">
            <div className="text-center mb-8 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Find Us on Map
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Visit our location in Vijayawada, Andhra Pradesh
              </p>
            </div>
            <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-card w-full min-w-0">
              <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative">
                <iframe
                  src="https://www.google.com/maps?q=Indra+Colony,+Krishna+Lanka,+Vijayawada,+Andhra+Pradesh+520013&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, maxWidth: '100%' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="C Technologies Smart Edge Location"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-4 sm:p-6 bg-card border-t border-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-start gap-2 sm:gap-3 min-w-0 flex-1">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium text-sm sm:text-base break-words">
                      Indra Colony, Krishna Lanka, Vijayawada, Andhra Pradesh 520013
                    </span>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/JBSJFvqbpepJHDtEA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors font-medium flex items-center gap-2 text-sm sm:text-base shrink-0"
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
