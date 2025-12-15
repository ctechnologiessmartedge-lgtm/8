import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Images } from "lucide-react";
import { productCategories } from "@/data/productCategories";

const GallerySection = () => {
  // Get first 8 product images for preview
  const previewImages = productCategories
    .flatMap(category => category.products)
    .filter(product => product.image)
    .slice(0, 8)
    .map(product => product.image!);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Product Collection
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our wide range of smart lighting and sensor solutions through our product gallery.
          </p>
        </div>

        {/* Gallery Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {previewImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="group relative aspect-square bg-card rounded-lg overflow-hidden border border-border shadow-soft hover:shadow-glow transition-all duration-300"
            >
              <img
                src={image}
                alt={`Product ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                style={{ imageRendering: 'auto', willChange: 'transform' }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/gallery">
            <Button variant="default" size="lg" className="group">
              <Images className="w-4 h-4 mr-2" />
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

