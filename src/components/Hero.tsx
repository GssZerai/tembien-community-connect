import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Globe } from "lucide-react";
import heroImage from "@/assets/hero-tida.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary-dark to-earth overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
            <Globe className="w-4 h-4 mr-2" />
            Non-Profit • NGO • Community Development
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Empowering
            <span className="block text-heritage">Tembien</span>
            <span className="block text-2xl md:text-3xl font-normal mt-4 text-white/90">
              Through Sustainable Development
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            TIDA is a member-based organization addressing socio-economic challenges 
            in the Tigray region, building stronger communities through education, 
            development, and international cooperation.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-heritage mb-2">1000+</div>
              <div className="text-white/80 text-sm">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-heritage mb-2">50+</div>
              <div className="text-white/80 text-sm">Chapters Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-heritage mb-2">15+</div>
              <div className="text-white/80 text-sm">Years of Impact</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="group">
              <Users className="w-5 h-5 mr-2" />
              Join Our Mission
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-hero" size="lg">
              <Target className="w-5 h-5 mr-2" />
              Learn About Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};