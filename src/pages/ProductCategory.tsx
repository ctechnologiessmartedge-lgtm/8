import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { productCategories, getWhatsAppLink, whatsappNumber } from "@/data/productCategories";

const ProductCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const category = productCategories.find(cat => cat.slug === slug);

  if (!category) {
    return (
      <Layout>
        <section className="pt-32 pb-16 bg-hero">
          <div className="container-main text-center">
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

  const Icon = category.icon;

  return (
    <>
      <Helmet>
        <title>{category.title} | C Technologies Smart Edge</title>
        <meta
          name="description"
          content={`Browse our ${category.title} products. Quality smart sensor lighting solutions for homes and businesses in Vijayawada.`}
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container-main relative z-10">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Products
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                {category.title}
              </h1>
            </div>
            <p className="text-lg text-primary-foreground/70 max-w-2xl">
              {category.products.length} products available in this category
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 bg-background">
          <div className="container-main">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.products.map((product, index) => (
                <div
                  key={product.model}
                  className="group bg-card rounded-xl border border-border shadow-soft card-hover p-6 flex flex-col animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
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
