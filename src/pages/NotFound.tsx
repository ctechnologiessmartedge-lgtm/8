import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | C Technologies Smart Edge</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Return to C Technologies Smart Edge homepage for security and smart technology solutions in Vijayawada, Andhra Pradesh."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://ctechnologies-smartedge.com/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ctechnologies-smartedge.com/" />
        <meta property="og:title" content="404 - Page Not Found | C Technologies Smart Edge" />
        <meta property="og:description" content="Page not found. Return to our homepage for security and smart technology solutions." />
        <meta property="og:image" content="https://ctechnologies-smartedge.com/logo.png" />
      </Helmet>
      <Layout>
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-background pt-20 pb-12">
          <div className="container-main text-center max-w-2xl mx-auto px-4">
            {/* 404 Visual */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-accent/10 mb-6">
                <Search className="w-16 h-16 text-accent" />
              </div>
              <h1 className="text-8xl md:text-9xl font-bold text-foreground mb-4">404</h1>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The page you're looking for doesn't exist or has been moved. 
                Let's get you back on track.
              </p>
            </div>

            {/* Quick Links */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
              <Link to="/">
                <Button variant="accent" className="w-full group">
                  <Home className="w-4 h-4 mr-2" />
                  Go to Homepage
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => window.history.back()}
                className="w-full group"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>

            {/* Popular Pages */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                You might be looking for:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/about"
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:bg-accent/10 hover:border-accent transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/products"
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:bg-accent/10 hover:border-accent transition-colors"
                >
                  Products
                </Link>
                <Link
                  to="/services"
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:bg-accent/10 hover:border-accent transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:bg-accent/10 hover:border-accent transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
