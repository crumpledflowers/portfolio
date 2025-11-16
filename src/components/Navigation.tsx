import { useState, useEffect } from "react";
import { Menu, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "home", label: "~/home", href: "#hero" },
    { name: "about", label: "~/about", href: "#about" },
    { name: "skills", label: "~/skills", href: "#skills" },
    { name: "projects", label: "~/projects", href: "#projects" },
    { name: "achievements", label: "~/achievements", href: "#achievements" },
    { name: "contact", label: "~/contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-terminal-cyan/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="font-mono text-terminal-cyan hover:text-terminal-green transition-colors"
          >
            <span className="text-lg font-semibold">visitor@portfolio:~$</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-3 py-2 text-sm font-mono text-muted-foreground hover:text-terminal-cyan transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terminal-cyan group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* GitHub Star Button */}
          <div className="hidden md:block">
            <a
              href="https://github.com/crumpledflowers/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button variant="terminal" size="sm" className="gap-2">
                <Star className="h-4 w-4" />
                Star on GitHub
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-terminal-cyan hover:text-terminal-green transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-terminal-cyan/20 bg-background/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block px-4 py-2 font-mono text-sm text-muted-foreground hover:text-terminal-cyan hover:bg-terminal-cyan/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <a
                  href="https://github.com/crumpledflowers/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full"
                >
                  <Button variant="terminal" size="sm" className="gap-2 w-full">
                    <Star className="h-4 w-4" />
                    Star on GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
