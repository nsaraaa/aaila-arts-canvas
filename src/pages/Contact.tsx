import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Instagram, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@aailazahra.com",
      link: "mailto:hello@aailazahra.com",
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@aaila_zahra",
      link: "https://instagram.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Available for commissions",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Interested in a custom piece, collaboration, or just want to say hello? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="fade-in">
            <Card className="border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-body font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="font-body"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-body font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="font-body"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-body font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      className="font-body"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full font-body">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="fade-in-up space-y-6">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">
                Contact Information
              </h2>
              <p className="font-body text-muted-foreground mb-8">
                Feel free to reach out through any of these channels. I typically respond
                within 24-48 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-border hover-lift">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="font-body text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Commission Work
              </h3>
              <p className="font-body text-muted-foreground">
                I'm currently accepting commissions for custom artwork. Whether you have a
                specific vision or want to discuss possibilities, I'd be happy to work with
                you to create something unique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
