import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [inquiryType, setInquiryType] = useState("general");
  const [message, setMessage] = useState("");
  const [translatedMessage, setTranslatedMessage] = useState("");
  const [language, setLanguage] = useState("es"); // Default to Spanish

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });
  };

  const handleTranslate = async () => {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${message}&langpair=en|${language}`);
    const data = await response.json();
    setTranslatedMessage(data.responseData.translatedText);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-orange-50 py-12">
          <div className="container text-center">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg text-muted-foreground">Have questions or feedback? We'd love to hear from you</p>
          </div>
        </section>
        <section className="py-12">
          <div className="container grid gap-8 md:grid-cols-3">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center"><Mail className="mr-2 h-5 w-5 text-orange-500" /> Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@edconnect.org" className="text-blue-600 hover:underline">info@edconnect.org</a>
                  <p className="mt-2 text-sm text-muted-foreground">For general inquiries and information</p>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="language">Translate to</Label>
                      <select id="language" className="w-full border p-2" value={language} onChange={(e) => setLanguage(e.target.value)}>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="zh">Chinese</option>
                      </select>
                    </div>
                    <Button type="button" onClick={handleTranslate} className="w-full md:w-auto">Translate</Button>
                    {translatedMessage && (
                      <div className="mt-4 p-4 border rounded-lg bg-gray-100">
                        <p className="font-bold">Translated Message:</p>
                        <p>{translatedMessage}</p>
                      </div>
                    )}
                    <Button type="submit" className="w-full md:w-auto">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
