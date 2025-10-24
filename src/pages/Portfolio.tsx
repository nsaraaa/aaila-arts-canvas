import ArtworkCard from "@/components/ArtworkCard";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const Portfolio = () => {
  const artworks = [
    {
      image: artwork1,
      title: "Abstract Dreams",
      medium: "Mixed Media on Canvas",
      description: "An exploration of color and texture through layered abstract forms, combining acrylic paints with collage elements",
    },
    {
      image: artwork2,
      title: "Woven Stories",
      medium: "Textile & Natural Materials",
      description: "Handcrafted piece combining traditional weaving techniques with modern aesthetics and sustainable materials",
    },
    {
      image: artwork3,
      title: "Paper Harmony",
      medium: "Paper Collage",
      description: "Contemporary composition celebrating simplicity and balance through carefully layered paper elements",
    },
    {
      image: artwork1,
      title: "Color Symphony",
      medium: "Acrylic on Canvas",
      description: "Vibrant exploration of complementary colors creating a harmonious visual rhythm",
    },
    {
      image: artwork2,
      title: "Texture Tales",
      medium: "Mixed Media",
      description: "Experimental piece focusing on tactile surfaces and dimensional layers",
    },
    {
      image: artwork3,
      title: "Serene Spaces",
      medium: "Watercolor & Ink",
      description: "Minimalist composition inspired by natural landscapes and quiet moments",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 artistic-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 fade-in-up">
          <div className="relative inline-block mb-8">
            <h1 className="text-6xl sm:text-7xl font-heading font-bold mb-6 artistic-text creative-text-shadow">
              Portfolio
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-arts-light-blue via-arts-pink to-arts-green rounded-full"></div>
          </div>
          <p className="text-xl font-body text-arts-dark-blue/70 max-w-3xl mx-auto leading-relaxed">
            A collection of my visual art and handcrafted pieces, each telling its own story
            through color, texture, and form. Every piece is a journey of creative expression.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="creative-grid">
          {artworks.map((artwork, index) => (
            <div 
              key={index} 
              className="fade-in-up artistic-hover" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ArtworkCard {...artwork} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
