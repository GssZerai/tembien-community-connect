import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Globe, Send } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Main Office",
      details: ["Tembien, Tigray Region", "Ethiopia"],
      color: "primary"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@tida.org", "membership@tida.org"],
      color: "success"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+251 xxx xxx xxx", "+251 xxx xxx xxx"],
      color: "earth"
    },
    {
      icon: Globe,
      title: "Global Chapters",
      details: ["50+ chapters worldwide", "Contact your local chapter"],
      color: "heritage"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Contact Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch with
            <span className="text-primary block">Our Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you want to join our mission, learn about our programs, 
            or explore partnership opportunities, we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Connect With TIDA
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 border-card-border hover:shadow-medium transition-smooth">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      info.color === 'primary' ? 'gradient-primary' :
                      info.color === 'success' ? 'gradient-success' :
                      info.color === 'earth' ? 'gradient-earth' :
                      'bg-heritage'
                    }`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="gradient-primary rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Join Our Newsletter</h4>
              <p className="text-white/90 mb-6">
                Stay updated with our latest programs, achievements, and opportunities 
                to get involved in our mission.
              </p>
              <div className="flex gap-3">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button variant="hero">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 border-card-border shadow-medium">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your inquiry..."
                  className="min-h-32"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};