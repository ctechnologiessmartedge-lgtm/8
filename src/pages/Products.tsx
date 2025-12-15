import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Sun, Lamp, Lightbulb, Factory, Radio } from "lucide-react";
import { productCategories, whatsappNumber, getWhatsAppLink } from "@/data/productCategories";

const iconMap = {
  Sun,
  Lamp,
  Lightbulb,
  Factory,
  Radio,
};

const Products = () => {
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
        <section className="pt-20 md:pt-32 pb-6 md:pb-12 bg-hero relative overflow-hidden">
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
                Our Products
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Smart Sensor Lighting Solutions
              </h1>
              <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <span className="text-2xl md:text-3xl font-bold text-blue-500">
                  C Technologies Smart Edge
                </span>
              </div>
              <p className="text-xl text-primary-foreground/70 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Explore our range of motion sensor lights, LED panels, and smart sensors 
                for energy-efficient and automated lighting solutions.
              </p>
            </div>
          </div>
        </section>

        {/* All Products by Category */}
        <section className="py-12 bg-background">
          <div className="container-main">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
              Our Products
            </h2>
            <div className="space-y-12">
              {filledCategories.map((category, categoryIndex) => {
                const Icon = iconMap[category.iconName];
                
                return (
                  <div key={category.slug} className="space-y-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 pb-4 border-b border-border">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.products.length} products
                        </p>
                      </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                      {category.products.map((product, productIndex) => (
                        <a
                          key={product.model}
                          href={getWhatsAppLink(product.model, product.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group bg-card rounded-xl border border-border shadow-soft card-hover p-6 flex flex-col animate-fade-in cursor-pointer"
                          style={{ animationDelay: `${productIndex * 0.05}s` }}
                        >
                          {product.image && (
                            <div className="w-full h-32 md:h-40 mb-4 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                              <img
                                src={product.image}
                                alt={product.name}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                style={{ imageRendering: 'auto', willChange: 'transform' }}
                              />
                            </div>
                          )}
                          <div className="mb-3">
                            <span className="text-sm font-semibold text-accent block mb-2">
                              {product.model}
                            </span>
                            <h4 className="font-semibold text-foreground mb-2">
                              {product.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {product.specs}
                            </p>
                          </div>
                          <div className="mt-auto pt-4">
                            <span className="inline-flex items-center gap-2 text-sm text-accent font-medium group-hover:gap-3 transition-all">
                              Enquire Now
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-hero">
          <div className="container-main text-center">
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Need Custom Solutions?
            </h2>
            <p className="text-primary-foreground/70 mb-6 max-w-xl mx-auto">
              Contact us for bulk orders and custom installations.
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
