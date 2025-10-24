import ArtworkCard from "@/components/ArtworkCard";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const Exhibition2 = () => {
  const exhibition2Artworks = [
    {
      image: artwork3,
      title: "Paper Harmony",
      medium: "Paper Collage",
      description: "Contemporary composition celebrating simplicity and balance through carefully layered paper elements",
    },
    {
      image: artwork1,
      title: "Serene Spaces",
      medium: "Watercolor & Ink",
      description: "Minimalist composition inspired by natural landscapes and quiet moments",
    },
    {
      image: artwork2,
      title: "Layered Stories",
      medium: "Mixed Paper Techniques",
      description: "Narrative exploration through the layering of different paper textures and colors",
    },
    {
      image: artwork3,
      title: "Geometric Balance",
      medium: "Paper Sculpture",
      description: "Three-dimensional exploration of balance and form using paper as the primary medium",
    },
    {
      image: artwork1,
      title: "Organic Forms",
      medium: "Handmade Paper",
      description: "Celebrating the natural beauty of handmade paper and organic shapes",
    },
    {
      image: artwork2,
      title: "Paper Dialogues",
      medium: "Collage & Mixed Media",
      description: "Conversation between different paper types creating visual harmony and texture",
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
              Exhibition 2
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-arts-light-blue via-arts-pink to-arts-green rounded-full"></div>
          </div>
          <p className="text-xl font-body text-arts-dark-blue/70 max-w-3xl mx-auto leading-relaxed">
            An exploration of paper as an artistic medium, showcasing the versatility and beauty 
            of collage, watercolor, and mixed media techniques in contemporary art.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="creative-grid">
          {exhibition2Artworks.map((artwork, index) => (
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
                About This Exhibition
              </h2>
              <p className="font-body text-arts-dark-blue/80 leading-relaxed text-lg mb-8">
                Exhibition 2 delves into the world of paper-based art, demonstrating the incredible 
                versatility of this humble material. From delicate watercolor compositions to bold 
                collage works, this collection explores how paper can be transformed into powerful 
                artistic statements. Each piece celebrates the tactile nature of paper and its 
                ability to convey emotion and meaning through texture, color, and form.
              </p>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                <div className="w-16 h-16 bg-gradient-to-br from-arts-light-blue/20 to-arts-light-blue/40 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📄</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-arts-pink/20 to-arts-pink/40 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-arts-green/20 to-arts-green/40 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✂️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition2;
