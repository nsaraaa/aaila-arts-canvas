import ArtworkCard from "@/components/ArtworkCard";
import quietPatch1 from "@/assets/assets2/A Quiet Patch (i).png";
import quietPatch2 from "@/assets/assets2/A Quiet Patch (ii).png";
import railwayColony from "@/assets/assets2/Railway Colony, A love letter to Home.png";
import closingOfTheDay from "@/assets/assets2/Closing of the Day.png";
import silentGarden from "@/assets/assets2/Over the Silent Garden.png";
import landReclaims from "@/assets/assets2/The Land Reclaims.png";

const Portfolio = () => {
  const artworks = [
    {
      image: quietPatch1,
      title: "A Quiet Patch (i)",
      medium: "Gouache on Wasli",
      description: "Size: 2 x 8 inches | Year: 2024",
    },
    {
      image: quietPatch2,
      title: "A Quiet Patch (ii)",
      medium: "Gouache on Wasli",
      description: "Size: 2 x 6 inches | Year: 2024",
    },
    {
      image: railwayColony,
      title: "Railway Colony, A love letter to Home",
      medium: "Gouache on Wasli",
      description: "Size: 19.5 x 21 inches | Year: 2024",
    },
    {
      image: closingOfTheDay,
      title: "Closing of the Day",
      medium: "Gouache on Arches Paper",
      description: "Size: 17 x 13.5 inches | Year: 2024",
    },
    {
      image: silentGarden,
      title: "Over the Silent Garden",
      medium: "Gouache on Wasli",
      description: "Size: 19.5 x 18.5 inches | Year: 2024",
    },
    {
      image: landReclaims,
      title: "The Land Reclaims",
      medium: "Gouache on Arches Paper",
      description: "Size: 19 x 17 inches | Year: 2024",
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
            A selected portfolio of recent thesis works, exploring home, memory, weather,
            and light through gouache on paper.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="creative-grid">
          {artworks.map((artwork, index) => {
            const href = `/image?src=${encodeURIComponent(artwork.image)}&title=${encodeURIComponent(artwork.title)}&desc=${encodeURIComponent(artwork.description)}`;
            return (
              <div 
                key={index} 
                className="fade-in-up artistic-hover" 
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <ArtworkCard {...artwork} href={href} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
