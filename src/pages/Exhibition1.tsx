import ArtworkCard from "@/components/ArtworkCard";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.jpeg";
import image4 from "@/assets/image4.jpeg";
import image5 from "@/assets/image5.jpeg";
import image6 from "@/assets/image6.jpeg";

const Exhibition1 = () => {
  const exhibition1Artworks = [
    {
      image: image1,
      title: "Woven Stories",
      medium: "Textile & Natural Materials",
      description: "Handcrafted piece combining traditional weaving techniques with modern aesthetics and sustainable materials",
      href: `/image?src=${encodeURIComponent(image1)}&title=${encodeURIComponent("Woven Stories")}&desc=${encodeURIComponent("Handcrafted piece combining traditional weaving techniques with modern aesthetics and sustainable materials")}`,
    },
    {
      image: image2,
      title: "Natural Threads",
      medium: "Organic Textiles",
      description: "Exploring the relationship between natural materials and contemporary textile art",
      href: `/image?src=${encodeURIComponent(image2)}&title=${encodeURIComponent("Natural Threads")}&desc=${encodeURIComponent("Exploring the relationship between natural materials and contemporary textile art")}`,
    },
    {
      image: image3,
      title: "Fiber Dialogues",
      medium: "Mixed Textile Techniques",
      description: "Conversation between different weaving methods and material textures",
      href: `/image?src=${encodeURIComponent(image3)}&title=${encodeURIComponent("Fiber Dialogues")}&desc=${encodeURIComponent("Conversation between different weaving methods and material textures")}`,
    },
    {
      image: image4,
      title: "Sustainable Beauty",
      medium: "Eco-Friendly Materials",
      description: "Artistic expression through environmentally conscious material choices",
      href: `/image?src=${encodeURIComponent(image4)}&title=${encodeURIComponent("Sustainable Beauty")}&desc=${encodeURIComponent("Artistic expression through environmentally conscious material choices")}`,
    },
    {
      image: image5,
      title: "Textile Traditions",
      medium: "Heritage Techniques",
      description: "Honoring traditional textile methods while exploring contemporary applications",
      href: `/image?src=${encodeURIComponent(image5)}&title=${encodeURIComponent("Textile Traditions")}&desc=${encodeURIComponent("Honoring traditional textile methods while exploring contemporary applications")}`,
    },
    {
      image: image6,
      title: "Material Harmony",
      medium: "Natural Fiber Composition",
      description: "Creating visual harmony through the careful selection and arrangement of natural materials",
      href: `/image?src=${encodeURIComponent(image6)}&title=${encodeURIComponent("Material Harmony")}&desc=${encodeURIComponent("Creating visual harmony through the careful selection and arrangement of natural materials")}`,
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
              Exhibition 1
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-arts-light-blue via-arts-pink to-arts-green rounded-full"></div>
          </div>
          <p className="text-xl font-body text-arts-dark-blue/70 max-w-3xl mx-auto leading-relaxed">
            A curated exhibition focusing on textile art and natural materials, showcasing the 
            beauty of sustainable artistic practices and traditional craftsmanship techniques.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="creative-grid">
          {exhibition1Artworks.map((artwork, index) => (
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
                Exhibition 1 celebrates the intersection of traditional textile arts and contemporary 
                environmental consciousness. Each piece demonstrates the incredible potential of natural 
                materials when combined with innovative artistic vision. The works explore themes of 
                sustainability, heritage, and the evolving relationship between art and nature.
              </p>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                <div className="w-16 h-16 bg-gradient-to-br from-arts-light-blue/20 to-arts-light-blue/40 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🧵</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-arts-pink/20 to-arts-pink/40 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-arts-green/20 to-arts-green/40 rounded-full flex items-center justify-center">
                  <span className="text-2xl">♻️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition1;
