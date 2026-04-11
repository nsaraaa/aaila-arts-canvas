import ArtworkCard from "@/components/ArtworkCard";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import quietPatch1 from "@/assets/assets2/A Quiet Patch (i).png";
import quietPatch2 from "@/assets/assets2/A Quiet Patch (ii).png";
import railwayColony from "@/assets/assets2/Railway Colony, A love letter to Home.png";
import closingOfTheDay from "@/assets/assets2/Closing of the Day.png";
import silentGarden from "@/assets/assets2/Over the Silent Garden.png";
import landReclaims from "@/assets/assets2/The Land Reclaims.png";
import verdantStorm from "@/assets/assets2/A Verdant Storm.png";
import wallsBearWitness from "@/assets/assets2/The Walls Bear Witness.png";
import takingOver from "@/assets/assets2/Taking-Over.png";

const artistStatement =
  "Aaila Zahra, born in 2002, is a visual artist based in Lahore, Pakistan. She graduated from the National College of Arts in December 2024, specialising in Miniature painting. Using gouache on archival paper as her main medium, she paints dense and intricate paintings of her home, using the building, foliage, the weather and even light as metaphors to express her concerns that revolve around memories and the idea of home.";

const Thesis = () => {
  const thesisArtworks = [
    {
      image: quietPatch1,
      title: "A Quiet Patch (i)",
      medium: "Gouache on Wasli",
      description: "Size: 2 x 8 inches | Year: 2024",
      href: `/image?src=${encodeURIComponent(quietPatch1)}&title=${encodeURIComponent("A Quiet Patch (i)")}&desc=${encodeURIComponent("Size: 2 x 8 inches | Medium: Gouache on Wasli | Year: 2024")}`,
    },
    {
      image: quietPatch2,
      title: "A Quiet Patch (ii)",
      medium: "Gouache on Wasli",
      description: "Size: 2 x 6 inches | Year: 2024",
      href: `/image?src=${encodeURIComponent(quietPatch2)}&title=${encodeURIComponent("A Quiet Patch (ii)")}&desc=${encodeURIComponent("Size: 2 x 6 inches | Medium: Gouache on Wasli | Year: 2024")}`,
    },
    {
      image: railwayColony,
      title: "Railway Colony, A love letter to Home",
      medium: "Gouache on Wasli",
      description: "Size: 19.5 x 21 inches | Year: 2024",
      href: `/image?src=${encodeURIComponent(railwayColony)}&title=${encodeURIComponent("Railway Colony, A love letter to Home")}&desc=${encodeURIComponent("Size: 19.5 x 21 inches | Medium: Gouache on Wasli | Year: 2024")}`,
    },
    {
      image: closingOfTheDay,
      title: "Closing of the Day",
      medium: "Gouache on Arches Paper",
      description: "Size: 17 x 13.5 inches | Year: 2024",
      href: `/image?src=${encodeURIComponent(closingOfTheDay)}&title=${encodeURIComponent("Closing of the Day")}&desc=${encodeURIComponent("Size: 17 x 13.5 inches | Medium: Gouache on Arches Paper | Year: 2024")}`,
    },
    {
      image: silentGarden,
      title: "Over the Silent Garden",
      medium: "Gouache on Wasli",
      description: "Size: 19.5 x 18.5 inches | Year: 2024",
      href: `/image?src=${encodeURIComponent(silentGarden)}&title=${encodeURIComponent("Over the Silent Garden")}&desc=${encodeURIComponent("Size: 19.5 x 18.5 inches | Medium: Gouache on Wasli | Year: 2024")}`,
    },
    {
      image: landReclaims,
      title: "The Land Reclaims",
      medium: "Gouache on Arches Paper",
      description: "Size: 19 x 17 inches | Year: 2024",
      href: `/image?src=${encodeURIComponent(landReclaims)}&title=${encodeURIComponent("The Land Reclaims")}&desc=${encodeURIComponent("Size: 19 x 17 inches | Medium: Gouache on Arches Paper | Year: 2024")}`,
    },
    {
      image: verdantStorm,
      title: "A Verdant Storm",
      medium: "Gouache on Arches Paper",
      description: "Size: 16 x 23 inches | Year: 2024",
      href: `/image?src=${encodeURIComponent(verdantStorm)}&title=${encodeURIComponent("A Verdant Storm")}&desc=${encodeURIComponent("Size: 16 x 23 inches | Medium: Gouache on Arches Paper | Year: 2024")}`,
    },
    {
      image: wallsBearWitness,
      title: "The Walls Bear Witness",
      medium: "Gouache on Wasli",
      description: "Size: 20 x 30 inches | Year: 2024",
      href: `/image?src=${encodeURIComponent(wallsBearWitness)}&title=${encodeURIComponent("The Walls Bear Witness")}&desc=${encodeURIComponent("Size: 20 x 30 inches | Medium: Gouache on Wasli | Year: 2024")}`,
    },
    {
      image: takingOver,
      title: "Taking-Over",
      medium: "Gouache on Arches Paper",
      description: "Size: 20 x 30 inches | Year: 2024",
      href: `/image?src=${encodeURIComponent(takingOver)}&title=${encodeURIComponent("Taking-Over")}&desc=${encodeURIComponent("Size: 20 x 30 inches | Medium: Gouache on Arches Paper | Year: 2024")}`,
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
            {artistStatement}
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
                This collection gathers nine works that reflect on memory, home, and the quiet
                transformations of everyday surroundings. Each piece is built from gouache and
                paper, using foliage, weather, buildings, and light as metaphors for belonging,
                distance, and returning.
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
