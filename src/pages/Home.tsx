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
      <section className="relative min-h-[90vh] flex items-center artistic-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="fade-in-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="text-arts-light-blue">Aaila Zahra</span>
              </h1>
              <p className="text-xl sm:text-2xl font-heading text-arts-dark-blue mb-4">
                Visual artist & craft creator
              </p>
              <p className="text-lg font-body text-arts-dark-blue/80 mb-8 max-w-xl">
                Color, texture, and emotion in every piece. Explore my journey through
                visual art and handcrafted creations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/portfolio">
                  <Button size="lg" className="group font-body bg-arts-light-blue hover:bg-arts-light-blue/90 text-white">
                    View Portfolio
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="font-body border-arts-pink text-arts-pink hover:bg-arts-pink hover:text-white">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="fade-in">
              <div className="relative">
                <div className="absolute -inset-4 gradient-pink-blue rounded-3xl blur-2xl opacity-30" />
                <img
                  src={heroArtwork}
                  alt="Featured artwork"
                  className="relative rounded-3xl shadow-2xl w-full border-4 border-arts-light-blue/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-arts-dark-blue">
              Featured Works
            </h2>
            <p className="text-lg font-body text-arts-dark-blue/70 max-w-2xl mx-auto">
              A selection of recent pieces showcasing my artistic exploration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorks.map((work, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ArtworkCard {...work} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="group font-body border-arts-green text-arts-green hover:bg-arts-green hover:text-white">
                View All Artworks
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-artistic">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-white">
              Let's Create Together
            </h2>
            <p className="text-lg font-body text-white/90 mb-8">
              Interested in a custom piece or collaboration? I'd love to hear about your vision.
            </p>
            <Link to="/contact">
              <Button size="lg" className="font-body bg-white text-arts-dark-blue hover:bg-white/90">
                Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
