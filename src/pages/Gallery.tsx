import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { X } from "lucide-react";
import { productCategories } from "@/data/productCategories";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Get all product images
  const allImages = productCategories
    .flatMap(category => category.products)
    .filter(product => product.image)
    .map(product => ({
      src: product.image!,
      title: product.name,
      model: product.model,
      specs: product.specs,
    }));

  return (
    <>
      <Helmet>
        <title>Gallery | C Technologies Smart Edge - Product Showcase</title>
        <meta
          name="description"
          content="Browse our comprehensive product gallery showcasing smart sensor lighting solutions, LED panels, CCTV cameras, access control systems, home automation products, sensors, and more. Quality products for homes and businesses in Vijayawada, Andhra Pradesh."
        />
        <meta name="keywords" content="product gallery, smart lighting gallery, CCTV camera gallery, access control gallery, home automation gallery, LED panel gallery, sensor gallery, security products gallery, smart home products gallery, product showcase Vijayawada, ChatGPT, AI security products, smart living products showcase" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ctechnologies-smartedge.com/gallery" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ctechnologies-smartedge.com/gallery" />
        <meta property="og:title" content="Gallery | C Technologies Smart Edge - Product Showcase" />
        <meta property="og:description" content="Browse our product gallery showcasing smart sensor lighting, CCTV, access control, and home automation products." />
        <meta property="og:image" content="https://ctechnologies-smartedge.com/logo.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | C Technologies Smart Edge" />
        <meta name="twitter:description" content="Product gallery showcasing smart lighting, CCTV, access control, and automation products." />
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
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block animate-fade-in">
                Our Gallery
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Product Gallery
              </h1>
              <p className="text-xl text-primary-foreground/70 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Explore our comprehensive range of smart lighting and sensor solutions
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding bg-background">
          <div className="container-main">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {allImages.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="group relative aspect-square bg-card rounded-lg overflow-hidden border border-border shadow-soft cursor-pointer hover:shadow-glow transition-all duration-300"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    style={{ imageRendering: 'auto', willChange: 'transform' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <p className="text-xs font-semibold truncate">{image.title}</p>
                      <p className="text-xs opacity-90 truncate">{image.model}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {allImages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No images available at the moment.</p>
              </div>
            )}
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage}
                alt="Gallery"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Gallery;

