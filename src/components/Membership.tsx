import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Globe, Star, ArrowRight } from "lucide-react";

export const Membership = () => {
  const benefits = [
    "Access to professional development opportunities",
    "Networking with diaspora communities worldwide",
    "Direct involvement in community development projects",
    "Regular updates on TIDA's impact and initiatives",
    "Voting rights in organizational decisions",
    "Invitation to annual conferences and events"
  ];

  const membershipTypes = [
    {
      title: "Student Member",
      price: "Reduced Rate",
      description: "Special rates for students and young professionals",
      features: [
        "Full membership benefits",
        "Educational scholarships eligibility",
        "Mentorship programs access",
        "Career development support"
      ],
      popular: false
    },
    {
      title: "Regular Member",
      price: "Standard Rate",
      description: "For civil servants and working professionals",
      features: [
        "All standard benefits",
        "Committee participation rights",
        "Project proposal submission",
        "Leadership training opportunities"
      ],
      popular: true
    },
    {
      title: "Premium Member",
      price: "Supporting Rate",
      description: "Enhanced support for greater impact",
      features: [
        "All membership benefits",
        "Priority event access",
        "Direct project involvement",
        "Recognition programs",
        "Special advisory roles"
      ],
      popular: false
    }
  ];

  return (
    <section id="membership" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Membership
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Global Community of
            <span className="text-primary block">Change Makers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TIDA's strength comes from our diverse membership base including students, 
            civil servants, and community members from urban and rural areas, 
            united in our mission for sustainable development.
          </p>
        </div>

        {/* Member Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full gradient-success flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-success mb-2">50+</div>
            <div className="text-muted-foreground">Global Chapters</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full gradient-earth flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-earth mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-heritage flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-heritage-foreground" />
            </div>
            <div className="text-3xl font-bold text-heritage-foreground mb-2">100+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
        </div>

        {/* Membership Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Membership Benefits
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-accent transition-smooth">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {membershipTypes.map((type, index) => (
            <Card key={index} className={`p-8 text-center relative overflow-hidden transition-smooth hover:shadow-medium ${
              type.popular ? 'border-primary shadow-medium scale-105' : 'border-card-border'
            }`}>
              {type.popular && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <h3 className="text-2xl font-bold text-foreground mb-2">{type.title}</h3>
              <div className="text-3xl font-bold text-primary mb-4">{type.price}</div>
              <p className="text-muted-foreground mb-6">{type.description}</p>
              
              <ul className="space-y-3 mb-8">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={type.popular ? "default" : "outline"} 
                className="w-full"
                size="lg"
              >
                Join as {type.title}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of members worldwide who are actively contributing 
              to the development of Tembien and the broader Tigray region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Apply for Membership
              </Button>
              <Button variant="outline-hero" size="lg">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};