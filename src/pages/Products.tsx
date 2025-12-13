import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { productCategories, whatsappNumber } from "@/data/productCategories";

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
        <section className="pt-32 pb-12 bg-hero relative overflow-hidden">
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

        {/* Categories Grid */}
        <section className="py-12 bg-background">
          <div className="container-main">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Browse by Category
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filledCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={category.slug}
                    to={`/products/${category.slug}`}
                    className="group bg-card rounded-xl border border-border shadow-soft card-hover p-6 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.products.length} products
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-accent font-medium">
                      View Products
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
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
