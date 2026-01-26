import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { MessageCircle, ArrowRight, ArrowLeft, Sun, Lamp, Lightbulb, Factory, Radio, Camera, Fingerprint, Video, Home, DoorOpen, Bell, Monitor, Code, Speaker, Network, Wrench } from "lucide-react";
import { productCategories, getWhatsAppLink, whatsappNumber } from "@/data/productCategories";

const iconMap = {
  Sun,
  Lamp,
  Lightbulb,
  Factory,
  Radio,
  Camera,
  Fingerprint,
  Video,
  Home,
  DoorOpen,
  Bell,
  Monitor,
  Code,
  Speaker,
  Network,
  Wrench,
};

const ProductCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const category = productCategories.find(cat => cat.slug === slug);

  if (!category) {
    return (
      <Layout>
        <section className="pt-20 md:pt-32 pb-8 md:pb-16 bg-hero relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-contain md:bg-cover"
            style={{
              backgroundImage: 'url(/hero-bg-new.png)',
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.6
            }}
          />
          <div className="absolute inset-0 bg-primary/20 z-[1]" />
          <div className="container-main text-center relative z-[2]">
            <h1 className="text-4xl font-bold text-primary-foreground mb-4">Category Not Found</h1>
            <Link to="/products">
              <Button variant="hero">
                <ArrowLeft className="w-4 h-4" />
                Back to Products
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const Icon = iconMap[category.iconName] || iconMap.Sun; // Fallback to Sun icon if not found

  return (
    <>
      <Helmet>
        <title>{category.title} | C Technologies Smart Edge - Vijayawada</title>
        <meta
          name="description"
          content={`Browse our ${category.title} products. Quality smart sensor lighting and security solutions for homes and businesses in Vijayawada, Andhra Pradesh. Expert installation and support available.`}
        />
        <meta name="keywords" content={`${category.title}, smart security solutions, ${category.title.toLowerCase()} Vijayawada, ${category.title.toLowerCase()} Andhra Pradesh, smart home products, security systems, automation solutions, ChatGPT, AI security, smart living solutions, C Technologies Smart Edge`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://ctechnologies-smartedge.com/products/${category.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://ctechnologies-smartedge.com/products/${category.slug}`} />
        <meta property="og:title" content={`${category.title} | C Technologies Smart Edge`} />
        <meta property="og:description" content={`Browse ${category.title} products. Quality smart security and automation solutions in Vijayawada.`} />
        <meta property="og:image" content="https://ctechnologies-smartedge.com/logo.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${category.title} | C Technologies Smart Edge`} />
        <meta name="twitter:description" content={`${category.title} products - Quality smart security solutions in Vijayawada.`} />
        <meta name="twitter:image" content="https://ctechnologies-smartedge.com/logo.png" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-20 md:pt-32 pb-6 md:pb-12 bg-hero relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-contain md:bg-cover"
            style={{
              backgroundImage: 'url(/hero-bg-new.png)',
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
              <Link 
                to="/products" 
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Products
              </Link>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                  {category.title}
                </h1>
              </div>
              <div className="mb-4">
                <span className="text-xl md:text-2xl font-bold text-blue-500">
                  C Technologies Smart Edge
                </span>
              </div>
              <p className="text-lg text-primary-foreground/70">
                {category.products.length} products available in this category
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 bg-background">
          <div className="container-main">
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {category.products.map((product, index) => (
                <div
                  key={product.model}
                  className="group bg-card rounded-xl border border-border shadow-soft card-hover p-6 flex flex-col animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {product.image && (
                    <div className="w-full h-32 md:h-40 mb-4 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                      <OptimizedImage
                        src={product.image}
                        alt={product.name}
                        priority={index < 4}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        style={{ imageRendering: 'auto', willChange: 'transform' }}
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                      {product.model}
                    </span>
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {product.specs}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-border">
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
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-hero">
          <div className="container-main text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-primary-foreground/70 mb-6 max-w-xl mx-auto">
              Our experts can help you find the perfect solution for your requirements.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I need help choosing from ${category.title}. Can you assist?`)}`}
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

export default ProductCategory;
