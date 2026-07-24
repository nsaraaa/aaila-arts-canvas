import { ArrowRight, MessageCircle, Palette, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroArtwork from "@/assets/hero-artwork.jpeg";
import quietPatch1 from "@/assets/assets2/A Quiet Patch (i).png";
import studioVideo from "../../assets/Aaila 1.mp4";
import ArtworkCard from "@/components/ArtworkCard";
import studioPoster from "../../images/image12.jpeg";
const ctaBackground = new URL("../../assets/background.jpeg", import.meta.url).href;

const Home = () => {
  const featuredWorks = [
    {
      id: "thesis",
      image: quietPatch1,
      title: "Thesis Collection",
      medium: "Mixed Media Series",
      description: "An exploration of color and texture through layered abstract forms",
      route: "/thesis"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Your artwork as full-width background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroArtwork}
            alt="Aaila Zahra's artwork background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-tight text-white">
                <span className="block">Hi, I'm</span>
                <span className="text-arts-light-blue">Aaila Zahra</span>
              </h1>
              
              <p className="text-2xl sm:text-3xl font-heading text-white mb-6">
                <span className="inline-block ">Visual artist</span>
                
              </p>
              
              <p className="text-xl font-body text-white/90 mb-10 max-w-xl leading-relaxed">
                Color, texture, and emotion in every piece. Explore my journey through
                visual art and handcrafted creations that tell stories beyond words.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/portfolio">
                  <button className="px-8 py-4 rounded-full text-lg font-semibold bg-white text-arts-dark-blue hover:bg-arts-light-blue hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                    View Portfolio
                    <ArrowRight className="ml-3 inline-block group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-arts-dark-blue transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Studio Film Section - Text on Left, Video on Right */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
            <div className="fade-in-up">
              <div className="relative inline-block mb-8">
                <h2 className="text-5xl sm:text-6xl font-heading font-bold artistic-text creative-text-shadow">
                  In Motion
                </h2>
                <div className="absolute -bottom-2 left-0 w-28 h-1 bg-gradient-to-r from-arts-light-blue to-arts-pink rounded-full"></div>
              </div>
              <p className="text-xl font-body text-arts-dark-blue/75 leading-relaxed max-w-xl">
                A glimpse into the atmosphere behind the work, where memory, surface,
                and hand-drawn detail come together slowly through the process.
              </p>
            </div>

            <div className="fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[0.5rem] shadow-[var(--shadow-hover)] bg-arts-dark-blue">
                <video
                  className="w-full aspect-[9/16] object-cover"
                  src={studioVideo}
                  poster={studioPoster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  data-autoplay
                  controls
                  preload="metadata"
                  aria-label="Aaila Zahra studio video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section - Artwork on Left, Text on Right */}
      <section className="py-24 artistic-section relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
            {/* Artwork Card - Left Side */}
            <div className="fade-in-up max-w-md mx-auto lg:mx-0">
              <div className="artistic-hover">
                {featuredWorks.map((work, index) => (
                  <ArtworkCard key={index} {...work} />
                ))}
              </div>
            </div>

            {/* Text Content - Right Side */}
            <div className="fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="relative inline-block mb-6">
                <h2 className="text-5xl sm:text-6xl font-heading font-bold artistic-text creative-text-shadow">
                  Featured Works
                </h2>
                <div className="absolute -bottom-1 left-0 w-32 h-1 bg-gradient-to-r from-arts-light-blue to-arts-pink rounded-full"></div>
              </div>
              <p className="text-xl font-body text-arts-dark-blue/70 leading-relaxed max-w-xl">
                A curated selection of recent pieces showcasing my artistic exploration
                through color, texture, and creative expression.
              </p>
              
              <div className="mt-10">
                <Link to="/thesis">
                  <button className="px-10 py-4 rounded-full text-lg font-semibold text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" style={{ backgroundColor: '#4f7987' }}>
                    View Thesis Collection
                    <ArrowRight className="ml-3 inline-block group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaBackground})` }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto fade-in-up">
            <h2 className="text-5xl sm:text-6xl font-heading font-bold mb-6 text-white creative-text-shadow">
              Let's Create Together
            </h2>
            
            <p className="text-xl font-body text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Interested in a custom piece or collaboration? I'd love to hear about your vision
              and bring your artistic dreams to life through color, texture, and creative expression.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <button className="px-12 py-5 rounded-full text-xl font-semibold bg-white text-arts-dark-blue hover:bg-arts-light-blue hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  Start a Conversation
                </button>
              </Link>
              
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
                  <MessageCircle className="text-white" size={20} aria-hidden="true" />
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
                  <Palette className="text-white" size={20} aria-hidden="true" />
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
                  <Sparkles className="text-white" size={20} aria-hidden="true" />
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