import { Feather, FileText, Heart, Leaf, Palette, Sparkles } from "lucide-react";
import potraitImg from "@/assets/potrait.jpeg";

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
    <div className="min-h-screen pt-28 pb-20 artistic-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 fade-in-up">
          <div className="relative inline-block mb-8">
            <h1 className="text-6xl sm:text-7xl font-heading font-bold mb-6 artistic-text creative-text-shadow">
              About Me
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-arts-light-blue to-arts-pink rounded-full"></div>
          </div>
          <p className="text-xl font-body text-arts-dark-blue/70 max-w-3xl mx-auto leading-relaxed">
            A journey through art, creativity, and self-expression
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="fade-in relative">
            <div className="relative group">
              <div className="absolute -inset-6 gradient-pink-blue rounded-[3rem] blur-2xl opacity-30"></div>
              <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-arts-light-blue/10 to-arts-pink/10 overflow-hidden border-4 border-arts-light-blue/20">
                <img
                  src={potraitImg}
                  alt="Portrait of Aaila Zahra"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Creative decorative elements */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/80 rounded-full flex items-center justify-center transform rotate-12">
                  <Palette className="text-arts-light-blue" size={28} aria-hidden="true" />
                </div>
                
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-arts-pink/80 rounded-full flex items-center justify-center transform -rotate-12">
                  <Sparkles className="text-white" size={22} aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="fade-in-up space-y-8">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-arts-dark-blue creative-text-shadow">
              Hello, I'm Aaila Zahra
            </h2>
            <div className="space-y-6 font-body text-arts-dark-blue/80 leading-relaxed text-lg">
              <p>
                Born in 2002, Aaila Zahra is a Visual Artist based in Lahore, Pakistan. She graduated from the National College of Arts  Lahore in December 2024, specialising in Miniature painting.
              </p>
              <p>
                She has been actively exhibiting across Pakistan, at notable Galleries such as Creative Current at Ejaz Art Gallery 2025. Dreams at Alliance Fracaise De Lahore 2025. The Next Wave at Gallery6 Islamabad 2025.  Broadcast volume1,O Art Space Lahore 2025. Chinese Embassy at  Islamabad 2025. Art for life solidarity with Gaza people at Silk Road Culture Center Islamabad 2025. Hazar Afsaneh at Dastaangoi Islamabad 2025. Heaven, Gallery6 Islamabad 2026, Special edition Dubai Art 2026 .

              </p>
              <p>
                Using gouache on archival paper as her main medium, she paints dense and intricate paintings of her home, using the building, foliage, the weather and even light as metaphors to express her concerns that revolve around memories and the idea of home. 
              </p>
              <p>
                These elements are carefully chosen to express her concerns, which persistently revolve around the nature of different relationships and the profound, multifaceted idea of 'home.' Each brushstroke is like a deliberate act of recollection, an attempt to preserve the essence of moments lived and the emotions that they evoke.
              </p>
              <p>
                Through this process, she seeks not only to document a physical space but also the emotions that it represents. Her work is an exploration of belonging coupled with the enduring human need for a sense of place, and to express the connections between family, security and strength in togetherness. 
              </p>
              <p>
                The choice of using gouache on paper is integral to her artistic expression. It allows her to build layers of color and texture as she renders her intricate and meticulously detailed works. The archival paper, though seemingly merely a surface, is almost like a metaphor: a silent witness to the passage of time spent making the works and the preservation of the themes she explores.
              </p>
    
            </div>
          </div>
        </div>

        {/* Inspiration Section */}
        <div className="fade-in-up mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 artistic-text creative-text-shadow">
              What Inspires Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-arts-light-blue to-arts-pink rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {inspirations.map((item, index) => (
              <div 
                key={index} 
                className="creative-card p-8 text-center relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-arts-light-blue/20 to-arts-pink/20 flex items-center justify-center relative">
                  <item.icon className="text-arts-light-blue" size={40} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-arts-pink/80 rounded-full flex items-center justify-center">
                    <span className="block w-2 h-2 rounded-full bg-white" aria-hidden="true"></span>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-arts-dark-blue">
                  {item.title}
                </h3>
                <p className="font-body text-arts-dark-blue/70 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Creative decorative line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-arts-light-blue/30 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Materials Section */}
        <div className="mt-24 fade-in-up">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-12">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 artistic-text creative-text-shadow">
                Favorite Materials
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-arts-light-blue to-arts-green rounded-full"></div>
            </div>
            
            <div className="creative-card p-12 relative">
              <p className="font-body text-arts-dark-blue/80 leading-relaxed text-lg mb-8">
                I work with a variety of mediums, each offering unique possibilities for
                expression. My favorites include acrylic paints for their vibrant colors,
                textiles for their tactile qualities, handmade papers for their organic
                textures, and natural materials that bring an authentic, earthy element
                to my work.
              </p>
              
              {/* Creative material icons */}
              <div className="flex justify-center items-center gap-8 flex-wrap">
                <div className="w-16 h-16 bg-gradient-to-br from-arts-light-blue/20 to-arts-light-blue/40 rounded-full flex items-center justify-center">
                  <Palette className="text-arts-light-blue" size={28} aria-hidden="true" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-arts-pink/20 to-arts-pink/40 rounded-full flex items-center justify-center">
                  <Feather className="text-arts-pink" size={28} aria-hidden="true" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-arts-green/20 to-arts-green/40 rounded-full flex items-center justify-center">
                  <FileText className="text-arts-green" size={28} aria-hidden="true" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-arts-light-blue/20 to-arts-pink/20 rounded-full flex items-center justify-center">
                  <Leaf className="text-arts-dark-blue" size={28} aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
