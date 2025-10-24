import { Palette, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const inspirations = [
    {
      icon: Palette,
      title: "Natural Beauty",
      description: "Drawing inspiration from organic forms, landscapes, and the ever-changing colors of nature",
    },
    {
      icon: Heart,
      title: "Emotional Expression",
      description: "Creating art that resonates with feelings, memories, and the human experience",
    },
    {
      icon: Sparkles,
      title: "Texture & Touch",
      description: "Exploring tactile surfaces and dimensional layers that invite closer inspection",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            About Me
          </h1>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            A journey through art, creativity, and self-expression
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/5] rounded-3xl bg-muted overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-body">
                  Portrait Photo
                </div>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="fade-in-up space-y-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold">
              Hello, I'm Aaila Zahra
            </h2>
            <div className="space-y-4 font-body text-foreground/80 leading-relaxed">
              <p>
                I'm a visual artist and craft creator based in [location], passionate about
                bringing color, texture, and emotion into every piece I create. My journey
                into art began [story of how you started], and it has been an incredible
                exploration of self-expression and creativity ever since.
              </p>
              <p>
                Working primarily with mixed media, I love combining traditional techniques
                with contemporary approaches. Each artwork is a conversation between materials,
                colors, and the emotions they evoke. I believe that art should not just be seen
                but felt—inviting viewers to pause and connect with something deeper.
              </p>
              <p>
                When I'm not in my studio, you'll find me [hobbies/interests], always seeking
                new inspiration in the world around me. I'm constantly experimenting with new
                materials and techniques, pushing the boundaries of what's possible while
                staying true to my artistic vision.
              </p>
            </div>
          </div>
        </div>

        {/* Inspiration Section */}
        <div className="fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12">
            What Inspires Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {inspirations.map((item, index) => (
              <Card 
                key={index} 
                className="border-border hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Materials Section */}
        <div className="mt-20 fade-in-up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Favorite Materials
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-8">
              I work with a variety of mediums, each offering unique possibilities for
              expression. My favorites include acrylic paints for their vibrant colors,
              textiles for their tactile qualities, handmade papers for their organic
              textures, and natural materials that bring an authentic, earthy element
              to my work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
