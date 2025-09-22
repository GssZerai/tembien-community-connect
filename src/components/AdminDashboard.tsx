import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Edit, Trash2, Plus, Home } from "lucide-react";

interface Chapter {
  id: string;
  name: string;
  location: string;
  members: number;
  established: string;
  status: 'Active' | 'Developing' | 'Inactive';
  description: string;
}

export const AdminDashboard = () => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingChapter, setEditingChapter] = useState<Chapter | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    members: 0,
    established: "",
    status: "Active" as Chapter['status'],
    description: ""
  });

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
    } catch (error: any) {
      toast({
        title: "Error fetching chapters",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      location: "",
      members: 0,
      established: "",
      status: "Active",
      description: ""
    });
    setEditingChapter(null);
  };

  const handleEdit = (chapter: Chapter) => {
    setEditingChapter(chapter);
    setFormData({
      name: chapter.name,
      location: chapter.location,
      members: chapter.members,
      established: chapter.established,
      status: chapter.status,
      description: chapter.description
    });
    setIsDialogOpen(true);
  };

  const handleAdd = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const handleSave = async () => {
    try {
      if (editingChapter) {
        // Update existing chapter
        const { error } = await supabase
          .from('chapters')
          .update(formData)
          .eq('id', editingChapter.id);

        if (error) throw error;
        
        toast({
          title: "Chapter updated successfully",
          description: "The chapter information has been updated."
        });
      } else {
        // Create new chapter
        const { error } = await supabase
          .from('chapters')
          .insert([formData]);

        if (error) throw error;

        toast({
          title: "Chapter created successfully",
          description: "A new chapter has been added."
        });
      }

      setIsDialogOpen(false);
      resetForm();
      fetchChapters();
    } catch (error: any) {
      toast({
        title: "Error saving chapter",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this chapter?")) return;

    try {
      const { error } = await supabase
        .from('chapters')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Chapter deleted successfully",
        description: "The chapter has been removed."
      });

      fetchChapters();
    } catch (error: any) {
      toast({
        title: "Error deleting chapter",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div>Loading admin dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">TIDA Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage chapters and content</p>
          </div>
          <div className="space-x-2">
            <Button 
              onClick={() => window.location.href = '/'} 
              variant="outline"
            >
              <Home className="w-4 h-4 mr-2" />
              Main Site
            </Button>
            <Button onClick={handleAdd}>
              <Plus className="w-4 h-4 mr-2" />
              Add Chapter
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {chapters.map((chapter) => (
            <Card key={chapter.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{chapter.name}</CardTitle>
                    <CardDescription>{chapter.location}</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={chapter.status === "Active" ? "default" : "secondary"}>
                      {chapter.status}
                    </Badge>
                    <Button
                      onClick={() => handleEdit(chapter)}
                      variant="outline"
                      size="sm"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => handleDelete(chapter.id)}
                      variant="destructive"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{chapter.description}</p>
                <div className="flex justify-between text-sm">
                  <span><strong>Members:</strong> {chapter.members}</span>
                  <span><strong>Established:</strong> {chapter.established}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {editingChapter ? "Edit Chapter" : "Add New Chapter"}
              </DialogTitle>
              <DialogDescription>
                {editingChapter 
                  ? "Make changes to the chapter information." 
                  : "Add a new chapter to the TIDA network."
                }
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <Input
                  placeholder="Chapter Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <Input
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>
              <div>
                <Input
                  type="number"
                  placeholder="Number of Members"
                  value={formData.members}
                  onChange={(e) => setFormData({ ...formData, members: parseInt(e.target.value) || 0 })}
                />
              </div>
              <div>
                <Input
                  placeholder="Established Year"
                  value={formData.established}
                  onChange={(e) => setFormData({ ...formData, established: e.target.value })}
                />
              </div>
              <div>
                <Select
                  value={formData.status}
                  onValueChange={(value: Chapter['status']) => setFormData({ ...formData, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Developing">Developing</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Textarea
                  placeholder="Description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave}>
                {editingChapter ? "Update" : "Create"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};