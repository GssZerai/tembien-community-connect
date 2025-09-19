import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Globe, Heart } from "lucide-react";
import { DonationDialog } from "./DonationDialog";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Membership", href: "#membership" },
    { label: "Chapters", href: "#chapters" },
    { label: "Transparency", href: "#transparency" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-primary">TIDA</div>
              <div className="text-xs text-muted-foreground hidden sm:block">
                Tembien International Development
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-smooth text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="ml-4"
              onClick={() => setIsDonationOpen(true)}
            >
              <Heart className="w-4 h-4 mr-2" />
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-smooth"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-smooth"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 pt-4">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    setIsDonationOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Donate
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <DonationDialog 
        open={isDonationOpen} 
        onOpenChange={setIsDonationOpen} 
      />
    </nav>
  );
};