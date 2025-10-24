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
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6">
            Portfolio
          </h1>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            A collection of my visual art and handcrafted pieces, each telling its own story
            through color, texture, and form.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <div 
              key={index} 
              className="fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
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
