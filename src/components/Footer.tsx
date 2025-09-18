import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { label: "About TIDA", href: "#about" },
    { label: "Our Programs", href: "#programs" },
    { label: "Membership", href: "#membership" },
    { label: "Chapters", href: "#chapters" },
    { label: "Transparency", href: "#transparency" },
    { label: "Contact", href: "#contact" }
  ];

  const programs = [
    { label: "Education & Capacity Building", href: "#" },
    { label: "Agricultural Development", href: "#" },
    { label: "Infrastructure Projects", href: "#" },
    { label: "Community Welfare", href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-xl font-bold">TIDA</div>
                <div className="text-sm text-primary-foreground/80">
                  Tembien International Development
                </div>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              A non-profit NGO addressing socio-economic challenges in Tigray region 
              through sustainable development and community empowerment.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                  >
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/80 flex-shrink-0 mt-1" />
                <div className="text-primary-foreground/90">
                  <div>Tembien, Tigray Region</div>
                  <div>Ethiopia</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/80 flex-shrink-0" />
                <a href="mailto:info@tida.org" className="text-primary-foreground/90 hover:text-primary-foreground">
                  info@tida.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/80 flex-shrink-0" />
                <span className="text-primary-foreground/90">+251 xxx xxx xxx</span>
              </div>
            </div>
            
            <div className="mt-8">
              <Button variant="outline-hero" className="w-full">
                <Heart className="w-4 h-4 mr-2" />
                Support Our Mission
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/80 text-sm">
            © 2024 Tembien International Development Association (TIDA). All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
              Transparency Report
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};