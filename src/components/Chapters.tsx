import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, Globe } from "lucide-react";

interface Chapter {
  id: string;
  name: string;
  location: string;
  members: number;
  established: string;
  status: 'Active' | 'Developing' | 'Inactive';
  description: string;
}

export const Chapters = () => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChapters();
  }, []);

  const fetchChapters = async () => {
    try {
      const { data, error } = await supabase
        .from('chapters')
        .select('*')
        .order('name');

      if (error) throw error;
      setChapters((data as Chapter[]) || []);
    } catch (error) {
      console.error('Error fetching chapters:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="chapters" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading chapters...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="chapters" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Global Network
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our Chapters Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TIDA operates through a network of active chapters across Ethiopia and internationally, 
            connecting members and coordinating development initiatives from local to global levels.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          {chapters.map((chapter, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{chapter.name}</CardTitle>
                  <Badge variant={chapter.status === "Active" ? "default" : "secondary"}>
                    {chapter.status}
                  </Badge>
                </div>
                <CardDescription className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  {chapter.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {chapter.description}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-primary" />
                    <span className="font-medium">{chapter.members} members</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Est. {chapter.established}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Start a New Chapter</h3>
            <p className="text-muted-foreground mb-6">
              Interested in establishing a TIDA chapter in your area? We provide support 
              and resources to help you build a strong local presence.
            </p>
            <Button variant="default">
              Contact Us About New Chapters
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};