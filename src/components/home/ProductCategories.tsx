import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Lamp, Lightbulb, Factory, Radio } from "lucide-react";
import { productCategories } from "@/data/productCategories";

const iconMap = {
  Sun,
  Lamp,
  Lightbulb,
  Factory,
  Radio,
};

const ProductCategories = () => {
  const filledCategories = productCategories.filter(cat => cat.products.length > 0);

  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Smart Sensor Lighting Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive range of energy-efficient lighting products with motion sensors and smart controls.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filledCategories.map((category, index) => {
            const Icon = iconMap[category.iconName];
            const categoryImage = category.products[0]?.image;
            return (
              <Link
                key={category.slug}
                to={`/products/${category.slug}`}
                className="group bg-card rounded-xl p-6 border border-border shadow-soft card-hover flex flex-col items-center text-center overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Category Image */}
                {categoryImage ? (
                  <div className="w-full h-32 sm:h-40 mb-4 rounded-lg overflow-hidden bg-muted flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={categoryImage}
                      alt={category.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain"
                      style={{ imageRendering: 'auto', willChange: 'transform' }}
                    />
                  </div>
                ) : (
                  <div className="w-full h-32 sm:h-40 mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-12 h-12 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                )}
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.products.length} {category.products.length === 1 ? 'product' : 'products'}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-accent font-medium group-hover:gap-3 transition-all mt-auto">
                  View Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="default" size="lg" className="group">
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;

