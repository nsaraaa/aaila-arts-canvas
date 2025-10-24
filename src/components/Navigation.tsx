import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-arts-light-blue/20 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-heading font-bold text-arts-dark-blue hover:text-arts-light-blue transition-all duration-300 relative group">
            <span className="relative z-10">Aaila Zahra</span>
            <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-arts-light-blue to-arts-pink group-hover:w-full transition-all duration-300"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body font-medium transition-all duration-300 relative group ${
                  isActive(link.path) ? "text-arts-light-blue" : "text-arts-dark-blue hover:text-arts-light-blue"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-arts-light-blue to-arts-pink transform origin-left transition-all duration-300 ${
                  isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}></div>
                
                {/* Creative hover effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-arts-light-blue/5 to-arts-pink/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-arts-dark-blue hover:text-arts-light-blue transition-all duration-300 p-2 rounded-lg hover:bg-arts-light-blue/10"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              {isOpen ? (
                <X size={24} className="transform rotate-180 transition-transform duration-300" />
              ) : (
                <Menu size={24} className="transform rotate-0 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-arts-light-blue/20 fade-in bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-body font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                    isActive(link.path) 
                      ? "text-arts-light-blue bg-gradient-to-r from-arts-light-blue/10 to-arts-pink/10" 
                      : "text-arts-dark-blue hover:text-arts-light-blue hover:bg-arts-light-blue/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
