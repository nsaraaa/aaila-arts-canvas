import ArtworkCard from "@/components/ArtworkCard";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const Thesis = () => {
  const thesisArtworks = [
    {
      image: artwork1,
      title: "Abstract Dreams",
      medium: "Mixed Media on Canvas",
      description: "An exploration of color and texture through layered abstract forms, combining acrylic paints with collage elements",
    },
    {
      image: artwork2,
      title: "Color Symphony",
      medium: "Acrylic on Canvas",
      description: "Vibrant exploration of complementary colors creating a harmonious visual rhythm",
    },
    {
      image: artwork3,
      title: "Texture Tales",
      medium: "Mixed Media",
      description: "Experimental piece focusing on tactile surfaces and dimensional layers",
    },
    {
      image: artwork1,
      title: "Emotional Landscapes",
      medium: "Oil & Mixed Media",
      description: "A journey through emotional states expressed through abstract landscapes",
    },
    {
      image: artwork2,
      title: "Material Conversations",
      medium: "Textile & Paint",
      description: "Dialogue between different materials creating unexpected textures and forms",
    },
    {
      image: artwork3,
      title: "Thesis Conclusion",
      medium: "Mixed Media Installation",
      description: "Final piece representing the culmination of artistic exploration and discovery",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 artistic-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-arts-light-blue hover:text-arts-dark-blue transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-body font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-20 fade-in-up">
          <div className="relative inline-block mb-8">
            <h1 className="text-6xl sm:text-7xl font-heading font-bold mb-6 artistic-text creative-text-shadow">
              Thesis Collection
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-arts-light-blue via-arts-pink to-arts-green rounded-full"></div>
          </div>
          <p className="text-xl font-body text-arts-dark-blue/70 max-w-3xl mx-auto leading-relaxed">
            A comprehensive collection representing my artistic thesis work, exploring themes of 
            color, texture, and emotional expression through mixed media and contemporary techniques.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="creative-grid">
          {thesisArtworks.map((artwork, index) => (
            <div 
              key={index} 
              className="fade-in-up artistic-hover" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ArtworkCard {...artwork} />
            </div>
          ))}
        </div>

        {/* Collection Info */}
        <div className="mt-24 fade-in-up">
          <div className="max-w-4xl mx-auto">
            <div className="creative-card p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 text-arts-dark-blue">
                About This Collection
              </h2>
              <p className="font-body text-arts-dark-blue/80 leading-relaxed text-lg mb-8">
                This thesis collection represents a deep exploration of artistic expression through 
                mixed media techniques. Each piece tells a story of discovery, experimentation, and 
                the evolution of my artistic voice. The works explore themes of emotion, texture, 
                and the dialogue between different materials and techniques.
              </p>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                <div className="w-16 h-16 bg-gradient-to-br from-arts-light-blue/20 to-arts-light-blue/40 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-arts-pink/20 to-arts-pink/40 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🧵</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-arts-green/20 to-arts-green/40 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📄</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thesis;
