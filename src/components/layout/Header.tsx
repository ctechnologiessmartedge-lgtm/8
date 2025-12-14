import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { productCategories } from "@/data/productCategories";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  }, [location.pathname]);

  const filledCategories = productCategories.filter(cat => cat.products.length > 0);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="h-12 w-auto rounded-lg overflow-hidden transition-transform group-hover:scale-110">
              <img 
                src="/logo.png" 
                alt="C Technologies Smart Edge Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors link-underline ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  location.pathname.startsWith("/products")
                    ? "text-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div
                className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                  isProductsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <div className="bg-card border border-border rounded-xl shadow-lg py-2 w-72 max-h-96 overflow-y-auto">
                  <Link
                    to="/products"
                    className="block px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent/10 hover:text-accent transition-colors border-b border-border mb-1"
                  >
                    All Products
                  </Link>
                  {filledCategories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/products/${category.slug}`}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors link-underline ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button variant="accent">Get a Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[80vh] pb-4" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <div className="flex flex-col py-4">
              <Link
                to="/"
                className={`px-6 py-3 text-base font-medium transition-colors border-l-4 ${
                  location.pathname === "/"
                    ? "text-accent border-accent bg-accent/5"
                    : "text-black border-transparent hover:text-accent hover:bg-gray-50"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-6 py-3 text-base font-medium transition-colors border-l-4 ${
                  location.pathname === "/about"
                    ? "text-accent border-accent bg-accent/5"
                    : "text-black border-transparent hover:text-accent hover:bg-gray-50"
                }`}
              >
                About
              </Link>
              
              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className={`w-full px-6 py-3 flex items-center justify-between text-base font-medium transition-colors text-left border-l-4 ${
                    location.pathname.startsWith("/products")
                      ? "text-accent border-accent bg-accent/5"
                      : "text-black border-transparent hover:text-accent hover:bg-gray-50"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isProductsOpen ? "max-h-96" : "max-h-0"}`}>
                  <div className="bg-gray-50 py-2 space-y-1 max-h-60 overflow-y-auto">
                    <Link
                      to="/products"
                      className="block px-10 py-2 text-sm font-semibold text-gray-800 hover:text-accent hover:bg-white transition-colors"
                    >
                      All Products
                    </Link>
                    {filledCategories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/products/${category.slug}`}
                        className="block px-10 py-2 text-sm text-gray-700 hover:text-accent hover:bg-white transition-colors"
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/services"
                className={`px-6 py-3 text-base font-medium transition-colors border-l-4 ${
                  location.pathname === "/services"
                    ? "text-accent border-accent bg-accent/5"
                    : "text-black border-transparent hover:text-accent hover:bg-gray-50"
                }`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`px-6 py-3 text-base font-medium transition-colors border-l-4 ${
                  location.pathname === "/contact"
                    ? "text-accent border-accent bg-accent/5"
                    : "text-black border-transparent hover:text-accent hover:bg-gray-50"
                }`}
              >
                Contact
              </Link>
              <div className="px-6 pt-4 mt-2 border-t border-gray-200">
                <Link to="/contact">
                  <Button variant="accent" className="w-full">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
