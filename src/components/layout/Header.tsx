import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center transition-transform group-hover:scale-110">
              <Shield className="w-6 h-6 text-accent-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary-foreground leading-tight">
                C Technologies
              </span>
              <span className="text-xs text-primary-foreground/70 font-medium">
                Smart Edge
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
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
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-primary-foreground/10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium py-2 transition-colors ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="mt-2">
              <Button variant="accent" className="w-full">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
