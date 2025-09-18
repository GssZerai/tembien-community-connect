import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Globe, Target, Award, Shield } from "lucide-react";
import communityImage from "@/assets/community-meeting.jpg";

export const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community-Centered",
      description: "We prioritize the needs and voices of local communities in all our initiatives."
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Operating with complete openness in our funding, operations, and impact reporting."
    },
    {
      icon: Globe,
      title: "International Reach",
      description: "Connecting diaspora communities worldwide to support development in Tembien."
    },
    {
      icon: Award,
      title: "Sustainable Impact",
      description: "Creating lasting change through education, capacity building, and economic development."
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About TIDA
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transforming Communities Through
            <span className="text-primary block">Collaborative Development</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Tembien International Development Association (TIDA) is a non-profit, 
            non-governmental organization committed to addressing socio-economic challenges 
            in the Tigray region, particularly in Tembein.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Our Mission & Vision
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              TIDA operates as a member-based organization with a diverse membership 
              including students, civil servants, and community members from both 
              urban and rural areas. Our network spans across Ethiopia and internationally, 
              creating a powerful force for positive change.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Large Membership Base</h4>
                  <p className="text-muted-foreground">Diverse community including students, civil servants, and rural members</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Global Network</h4>
                  <p className="text-muted-foreground">Chapters and sub-chapters within Ethiopia and internationally</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Sustainable Funding</h4>
                  <p className="text-muted-foreground">Multiple revenue streams including membership fees and partnerships</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={communityImage}
              alt="TIDA community meeting"
              className="rounded-2xl shadow-medium w-full"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-medium transition-smooth border-card-border">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};