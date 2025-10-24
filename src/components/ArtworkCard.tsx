import { Card, CardContent } from "@/components/ui/card";

interface ArtworkCardProps {
  image: string;
  title: string;
  medium: string;
  description: string;
}

const ArtworkCard = ({ image, title, medium, description }: ArtworkCardProps) => {
  return (
    <div className="creative-card artistic-hover group cursor-pointer overflow-hidden rounded-3xl relative">
      {/* Creative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 right-4 w-8 h-8 bg-arts-light-blue rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-arts-pink rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-arts-green rounded-full"></div>
      </div>
      
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Artistic Overlay */}
        <div className="absolute inset-0 gradient-artistic opacity-0 group-hover:opacity-90 transition-all duration-500 flex flex-col justify-end p-8">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">{title}</h3>
            <p className="text-sm font-body text-white/90 mb-3 uppercase tracking-wider">{medium}</p>
            <p className="text-sm font-body text-white/80 line-clamp-3 leading-relaxed">{description}</p>
          </div>
        </div>
        
        {/* Floating Creative Elements */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-45 transition-transform duration-500 opacity-0 group-hover:opacity-100">
          <span className="text-arts-light-blue font-bold text-lg">✨</span>
        </div>
        
        <div className="absolute bottom-4 left-4 w-10 h-10 bg-arts-pink/90 rounded-full flex items-center justify-center transform -rotate-12 group-hover:rotate-12 transition-transform duration-500 opacity-0 group-hover:opacity-100">
          <span className="text-white font-bold text-sm">🎨</span>
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-white via-white to-arts-light-blue/5 relative">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-heading font-bold text-arts-dark-blue">{title}</h3>
          <div className="w-8 h-1 bg-gradient-to-r from-arts-light-blue to-arts-pink rounded-full"></div>
        </div>
        <p className="text-sm font-body text-arts-dark-blue/70 uppercase tracking-wider">{medium}</p>
        
        {/* Creative Decorative Line */}
        <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-arts-light-blue/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default ArtworkCard;
