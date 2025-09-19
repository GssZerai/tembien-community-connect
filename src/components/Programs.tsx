import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Sprout, Building, Heart, ArrowRight } from "lucide-react";
import programsImage from "@/assets/alaji-basalts-farming.jpg";

export const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Education & Capacity Building",
      description: "Developing educational infrastructure, providing scholarships, and enhancing local capacity through training and skill development programs.",
      impact: "500+ students supported",
      color: "success"
    },
    {
      icon: Sprout,
      title: "Agricultural Development",
      description: "Supporting sustainable farming practices, introducing modern techniques, and helping farmers increase productivity and income.",
      impact: "200+ farmers trained",
      color: "earth"
    },
    {
      icon: Building,
      title: "Infrastructure Projects",
      description: "Building roads, bridges, health centers, and water systems to improve living conditions and economic opportunities.",
      impact: "15+ projects completed",
      color: "primary"
    },
    {
      icon: Heart,
      title: "Community Welfare",
      description: "Providing emergency relief, healthcare support, and social services to vulnerable community members.",
      impact: "1000+ people assisted",
      color: "heritage"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Programs
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Creating Lasting Impact Through
            <span className="text-primary block">Strategic Initiatives</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive programs address the key challenges facing communities 
            in Tembien, focusing on sustainable development and long-term positive change.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative mb-16 rounded-2xl overflow-hidden shadow-medium">
          <img
            src={programsImage}
            alt="TIDA development programs"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="max-w-lg ml-8 md:ml-16">
              <h3 className="text-3xl font-bold text-white mb-4">
                Transforming Lives, Building Futures
              </h3>
              <p className="text-white/90 mb-6">
                Through our integrated approach to development, we're creating 
                sustainable change that empowers communities for generations to come.
              </p>
              <Button variant="hero">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="p-8 hover:shadow-medium transition-smooth border-card-border group">
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  program.color === 'success' ? 'gradient-success' :
                  program.color === 'earth' ? 'gradient-earth' :
                  program.color === 'primary' ? 'gradient-primary' :
                  'bg-heritage'
                }`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {program.impact}
                    </Badge>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Join Us in Making a Difference
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your support helps us expand these vital programs and reach more 
              communities in need. Together, we can build a stronger future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Support Our Programs
              </Button>
              <Button variant="outline-hero" size="lg">
                Volunteer With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};