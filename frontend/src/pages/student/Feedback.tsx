import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const volunteers = [
  { id: 1, name: "John Doe", subject: "Mathematics" },
  { id: 2, name: "Jane Smith", subject: "English" },
  { id: 3, name: "Alex Johnson", subject: "Science" },
];

const VolunteerFeedback = () => {
  const { toast } = useToast();
  const [selectedVolunteer, setSelectedVolunteer] = useState("");
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");

  const handleSubmit = () => {
    if (!selectedVolunteer || rating === 0) {
      toast({
        title: "Error",
        description: "Please select a volunteer and provide a rating.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Feedback Submitted",
      description: "Your feedback has been recorded. Thank you!",
    });
    setSelectedVolunteer("");
    setRating(0);
    setComments("");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Volunteer Feedback</h1>
        <p className="text-muted-foreground">Help us improve by sharing your thoughts on volunteer teachers.</p>

        <Tabs defaultValue="volunteer-feedback">
          <TabsList>
            <TabsTrigger value="volunteer-feedback">Provide Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="volunteer-feedback" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Rate Volunteer Teachers</CardTitle>
                <CardDescription>Select a volunteer and provide feedback.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Volunteer</label>
                  <select
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={selectedVolunteer}
                    onChange={(e) => setSelectedVolunteer(e.target.value)}
                  >
                    <option value="">Choose a volunteer...</option>
                    {volunteers.map((vol) => (
                      <option key={vol.id} value={vol.name}>{vol.name} ({vol.subject})</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Rate Their Teaching</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        onClick={() => setRating(num)}
                        className={`p-1 ${rating >= num ? 'text-yellow-500' : 'text-gray-400'}`}
                      >
                        <Star className="h-5 w-5" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Additional Comments</label>
                  <Textarea
                    rows={4}
                    placeholder="Write your comments here..."
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter className="justify-end">
                <Button onClick={handleSubmit}>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Feedback
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default VolunteerFeedback;
