import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroArtwork from "@/assets/hero-artwork.jpg";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import ArtworkCard from "@/components/ArtworkCard";

const Home = () => {
  const featuredWorks = [
    {
      image: artwork1,
      title: "Abstract Dreams",
      medium: "Mixed Media on Canvas",
      description: "An exploration of color and texture through layered abstract forms",
    },
    {
      image: artwork2,
      title: "Woven Stories",
      medium: "Textile & Natural Materials",
      description: "Handcrafted piece combining traditional weaving with modern aesthetics",
    },
    {
      image: artwork3,
      title: "Paper Harmony",
      medium: "Paper Collage",
      description: "Contemporary composition celebrating simplicity and balance",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center artistic-section overflow-hidden">
        {/* Floating Shapes */}
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="fade-in-up artistic-brush-stroke">
              <div className="relative">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-tight">
                  <span className="block">Hi, I'm</span>
                  <span className="artistic-text creative-text-shadow">Aaila Zahra</span>
                </h1>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-arts-pink to-arts-light-blue rounded-full opacity-20 animate-pulse"></div>
              </div>
              
              <p className="text-2xl sm:text-3xl font-heading text-arts-dark-blue mb-6 relative">
                <span className="inline-block transform -rotate-2">Visual artist</span>
                <span className="mx-4 text-arts-pink">&</span>
                <span className="inline-block transform rotate-1">craft creator</span>
              </p>
              
              <p className="text-xl font-body text-arts-dark-blue/80 mb-10 max-w-xl leading-relaxed">
                Color, texture, and emotion in every piece. Explore my journey through
                visual art and handcrafted creations that tell stories beyond words.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/portfolio">
                  <button className="creative-button px-8 py-4 rounded-full text-lg font-semibold">
                    View Portfolio
                    <ArrowRight className="ml-3 inline-block group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-arts-pink text-arts-pink hover:bg-arts-pink hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </div>

            {/* Hero Image - Ready for your artwork background */}
            <div className="fade-in relative">
              {/* This space is ready for your artwork background */}
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
                {/* Placeholder for your artwork - you can replace this with your own image */}
                <div className="w-full h-full bg-gradient-to-br from-arts-light-blue/20 via-arts-pink/20 to-arts-green/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🎨</span>
                    </div>
                    <p className="text-arts-dark-blue font-body text-lg">Your artwork will go here</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform rotate-12 hover:rotate-45 transition-transform duration-500">
                  <span className="text-arts-light-blue font-bold text-xl">✨</span>
                </div>
                
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-arts-pink/90 rounded-full flex items-center justify-center transform -rotate-12 hover:rotate-12 transition-transform duration-500">
                  <span className="text-white font-bold text-lg">🎨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-24 artistic-section relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <div className="relative inline-block">
              <h2 className="text-5xl sm:text-6xl font-heading font-bold mb-6 artistic-text creative-text-shadow">
                Featured Works
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-arts-light-blue to-arts-pink rounded-full"></div>
            </div>
            <p className="text-xl font-body text-arts-dark-blue/70 max-w-3xl mx-auto leading-relaxed">
              A curated selection of recent pieces showcasing my artistic exploration
              through color, texture, and creative expression
            </p>
          </div>

          <div className="creative-grid">
            {featuredWorks.map((work, index) => (
              <div 
                key={index} 
                className="fade-in-up artistic-hover" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ArtworkCard {...work} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/portfolio">
              <button className="creative-button px-10 py-4 rounded-full text-lg font-semibold">
                Explore All Artworks
                <ArrowRight className="ml-3 inline-block group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-artistic relative overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto fade-in-up">
            <div className="relative inline-block mb-8">
              <h2 className="text-5xl sm:text-6xl font-heading font-bold mb-6 text-white creative-text-shadow">
                Let's Create Together
              </h2>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
            </div>
            
            <p className="text-xl font-body text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Interested in a custom piece or collaboration? I'd love to hear about your vision
              and bring your artistic dreams to life through color, texture, and creative expression.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <button className="px-12 py-5 rounded-full text-xl font-semibold bg-white text-arts-dark-blue hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  Start a Conversation
                </button>
              </Link>
              
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">💬</span>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🎨</span>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
