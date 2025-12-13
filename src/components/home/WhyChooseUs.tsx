import { Award, Clock, Users, Wrench, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "A decade of expertise in security and smart technology solutions across various sectors.",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    description: "Trusted by homes, offices, schools, and businesses throughout Vijayawada region.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and emergency assistance for all our clients.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description: "Professional installation by trained technicians with warranty-backed service.",
  },
];

const benefits = [
  "Latest technology from premium brands",
  "Customized solutions for every budget",
  "Free site survey and consultation",
  "Post-installation training included",
  "Annual maintenance contracts available",
  "Quick response for service calls",
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Partner for Smart Security Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At C Technologies Smart Edge, we combine cutting-edge technology
              with personalized service to deliver security solutions that truly
              protect what matters most to you.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`bg-card rounded-xl p-6 border border-border shadow-soft card-hover ${
                  index % 2 === 1 ? "sm:mt-8" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
