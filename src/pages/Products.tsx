import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, Lightbulb, Radio, Sun, Lamp, Factory, Gauge, Thermometer, ArrowRight } from "lucide-react";

interface Product {
  model: string;
  name: string;
  specs: string;
}

interface ProductCategory {
  title: string;
  icon: React.ElementType;
  products: Product[];
}

const productCategories: ProductCategory[] = [
  {
    title: "Smart Motion Sensor Moon Light",
    icon: Sun,
    products: [
      { model: "IHT-PML01", name: "Smart Motion Sensor Moon Light", specs: "10W – 6 inches" },
      { model: "IHT-PML02", name: "Smart Motion Sensor Moon Light", specs: "20W – 8 inches" },
    ],
  },
  {
    title: "Garden Light – with Sensor",
    icon: Lamp,
    products: [
      { model: "IHT-PGL01", name: "Smart LED Gate Light", specs: "2\" pipe – 20W – Square" },
      { model: "IHT-PGL02", name: "Smart LED Gate Light", specs: "2\" pipe – 15W – Square" },
    ],
  },
  {
    title: "Flood Light – with Sensor",
    icon: Lightbulb,
    products: [
      { model: "IHT-PFDL01", name: "Smart LED Flood Light", specs: "50W – Square" },
      { model: "IHT-PFDL02", name: "Smart LED Flood Light", specs: "100W – Square" },
      { model: "IHT-PFDL03", name: "Smart LED Flood Light", specs: "150W – Square" },
      { model: "IHT-PFDL04", name: "Smart LED Flood Light", specs: "200W – Square" },
    ],
  },
  {
    title: "Foot / Step Lamp – with Sensor",
    icon: Lamp,
    products: [
      { model: "IHT-PFL01", name: "Foot / Step Light", specs: "2W – Module: 2 / 3 / 4 M" },
    ],
  },
  {
    title: "High Bay – with Sensor",
    icon: Factory,
    products: [
      { model: "IHT-PHL01", name: "Smart High Bay", specs: "50W – Round" },
      { model: "IHT-PHL02", name: "Smart High Bay", specs: "100W – Round" },
      { model: "IHT-PHL03", name: "Smart High Bay", specs: "150W – Round" },
      { model: "IHT-PHL04", name: "Smart High Bay", specs: "200W – Round" },
    ],
  },
  {
    title: "Inzaus Motion Sensors",
    icon: Radio,
    products: [
      { model: "S-24", name: "Inzaus Motion Sensor Mini", specs: "PIR – 8m – Surface" },
      { model: "S-24A", name: "Inzaus Motion Sensor Tiny", specs: "PIR – 6m – Ceiling" },
      { model: "S-27 / 33", name: "Inzaus Occupancy Presence Sensor", specs: "6m – Ceiling" },
      { model: "S-29", name: "Sensor Switch", specs: "Microwave – 8m – Any" },
      { model: "S-30", name: "Microwave Sensor", specs: "12m – Surface" },
      { model: "S-31", name: "Microwave Sensor", specs: "12m – Surface" },
      { model: "LDR", name: "LDR Sensor", specs: "Surface" },
      { model: "SS-25", name: "Inzaus Smoke Sensor", specs: "Ceiling" },
    ],
  },
  {
    title: "Tube Lights – with Sensor",
    icon: Lightbulb,
    products: [
      { model: "IHT-PTL01", name: "Tube Light (Plastic)", specs: "2 Feet – 10W – T5 – Box: 20/50" },
      { model: "IHT-PTL02", name: "Tube Light (Plastic)", specs: "4 Feet – 20W – T5 – Box: 20/50" },
      { model: "IHT-PTL03", name: "Tube Light (Plastic)", specs: "4 Feet – 40W – T5/T8 – Box: 20/50" },
      { model: "IHT-PTL04", name: "Tube Light (Plastic)", specs: "2 Feet – 20W – T5/T8 – Box: 20/50" },
      { model: "IHT-PTL05", name: "Tube Light (Aluminum)", specs: "2 Feet – 10W – T5/T8 – Box: 20/50" },
      { model: "IHT-PTL06", name: "Tube Light (Aluminum)", specs: "2 Feet – 20W – T5/T8 – Box: 20/50" },
      { model: "IHT-PTL07", name: "Tube Light (Aluminum)", specs: "4 Feet – 20W – T5/T8 – Box: 20/50" },
      { model: "IHT-PTL08", name: "Tube Light (Aluminum)", specs: "4 Feet – 40W – T5/T8 – Box: 20/50" },
    ],
  },
  {
    title: "Concealed Panel Light – with Sensor",
    icon: Sun,
    products: [
      { model: "IHT-PPL01", name: "Panel Light (Plastic)", specs: "12W/15W/20W – 6\" – Round/Square" },
      { model: "IHT-PPL02", name: "Panel Light (Plastic)", specs: "10W/15W/18W – 5\" – Round/Square" },
      { model: "IHT-PPL03", name: "Panel Light (Plastic)", specs: "7W/9W/12W – 4\" – Round/Square" },
      { model: "IHT-PPL04", name: "Panel Light (Metal)", specs: "12W/15W – 6\" – Round/Square" },
      { model: "IHT-PPL05", name: "Panel Light (Metal)", specs: "15W/18W – 7\" – Round/Square" },
      { model: "IHT-PPL06", name: "Panel Light (Metal)", specs: "18W/22W – 8\" – Round/Square" },
      { model: "IHT-PPL07", name: "Panel Light (Metal)", specs: "9W/12W – 5\" – Round/Square" },
      { model: "IHT-PPL08", name: "Panel Light (Metal on/off)", specs: "7W/9W – 4\" – Round/Square" },
    ],
  },
  {
    title: "Surface Panel Light – with Sensor",
    icon: Sun,
    products: [
      { model: "IHT-PSL01", name: "Surface Light (Plastic Dim)", specs: "12W/15W/20W – 6\" – Round-Dim" },
      { model: "IHT-PSL02", name: "Surface Light (Metal)", specs: "12W/15W – 6\" – Round/Square" },
      { model: "IHT-PSL03", name: "Surface Light (Metal)", specs: "9W/12W – 5\" – Round/Square" },
      { model: "IHT-PSL04", name: "Surface Light (Metal on/off)", specs: "7W/9W – 4\" – Round/Square" },
      { model: "IHT-PSL05", name: "Surface Light (Metal)", specs: "18W/22W – 8\" – Round/Square" },
    ],
  },
  {
    title: "Street Light – with Sensor",
    icon: Lamp,
    products: [
      { model: "IHT-PSTL01", name: "Street Light", specs: "24W – 4KV Protection – Pipe ID 45 – Lence" },
      { model: "IHT-PSTL02", name: "Street Light", specs: "36W – 6KV Protection – Pipe ID 45 – Lence" },
      { model: "IHT-PSTL03", name: "Street Light", specs: "50W – 6KV Protection – Pipe ID 47 – Lence" },
      { model: "IHT-PSTL04", name: "Street Light", specs: "72W – 6KV Protection – Pipe ID 47 – Lence" },
      { model: "IHT-PSTL05", name: "Street Light", specs: "100W – 6KV Protection – Pipe ID 47 – Lence" },
      { model: "IHT-PSTL06", name: "Street Light", specs: "150W – 6KV Protection – Pipe ID 65 – Lence" },
      { model: "IHT-PSTL07", name: "Street Light", specs: "200W – 6KV Protection – Pipe ID 65 – Lence" },
    ],
  },
  {
    title: "2×2 Panel Light – with Sensor",
    icon: Sun,
    products: [
      { model: "IHT-2X2PL01", name: "Panel Light Dimming", specs: "36W – Size: 2×2 – Concealed" },
      { model: "IHT-2X2PL02", name: "Panel Light Dimming", specs: "50W – Size: 2×2 – Concealed" },
    ],
  },
  {
    title: "COB Light – with Sensor",
    icon: Lightbulb,
    products: [
      { model: "IHT-PCL01", name: "Smart COB Light (Std on/off)", specs: "7W – Concealed" },
      { model: "IHT-PCL02", name: "Smart COB Light (Std)", specs: "9W – Concealed" },
      { model: "IHT-PCL03", name: "Smart COB Light (Std)", specs: "12W – Concealed" },
      { model: "IHT-PCL04", name: "Smart COB Light (Std)", specs: "15W – Concealed" },
      { model: "IHT-PCL05", name: "Smart COB Light (Delta)", specs: "9W – Concealed" },
      { model: "IHT-PCL06", name: "Smart COB Light (Delta)", specs: "12W – Concealed" },
    ],
  },
  {
    title: "Bulkhead Light – with Sensor",
    icon: Lightbulb,
    products: [
      { model: "IHT-PBL01", name: "Smart BulkHead Light", specs: "10W – Oblong" },
      { model: "IHT-PBL02", name: "Smart BulkHead Light", specs: "20W – Oblong" },
    ],
  },
  {
    title: "Moon Light – with Sensor",
    icon: Sun,
    products: [],
  },
];

const whatsappNumber = "919876543210";

const Products = () => {
  const getWhatsAppLink = (productModel: string, productName: string) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in ${productModel} – ${productName}. Please share more details and pricing.`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  // Filter out empty categories
  const filledCategories = productCategories.filter(cat => cat.products.length > 0);

  return (
    <>
      <Helmet>
        <title>Products | C Technologies Smart Edge</title>
        <meta
          name="description"
          content="Browse our range of smart motion sensor lights, LED panels, sensors, and energy-efficient lighting solutions. Quality products for homes and businesses in Vijayawada."
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
                Smart Sensor Lighting Solutions
              </h1>
              <p className="text-xl text-primary-foreground/70 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Explore our range of motion sensor lights, LED panels, and smart sensors 
                for energy-efficient and automated lighting solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Products by Category */}
        <section className="section-padding bg-background">
          <div className="container-main space-y-16">
            {filledCategories.map((category, catIndex) => (
              <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>

                {/* Products Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.products.map((product) => (
                    <div
                      key={product.model}
                      className="group bg-card rounded-xl border border-border shadow-soft card-hover p-5 flex flex-col"
                    >
                      <div className="flex-1">
                        <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded mb-3">
                          {product.model}
                        </span>
                        <h3 className="font-semibold text-foreground mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {product.specs}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <a
                          href={getWhatsAppLink(product.model, product.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <Button variant="accent" size="sm" className="w-full group/btn">
                            <MessageCircle className="w-4 h-4" />
                            Enquire Now
                            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-hero">
          <div className="container-main text-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              We can help you find the perfect lighting and sensor solutions for your 
              specific requirements. Contact us for bulk orders and custom installations.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I need help finding the right sensor lighting solution. Can you assist?")}`}
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
