import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ArtworkCardProps {
  image: string;
  title: string;
  medium: string;
  description: string;
  route?: string;
}

const ArtworkCard = ({ image, title, medium, description, route }: ArtworkCardProps) => {
  const CardContent = (
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
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
        />
        
        {/* Simplified overlay for better image focus */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl font-heading font-bold text-white mb-1">{title}</h3>
            <p className="text-sm font-body text-white/90 mb-2 uppercase tracking-wider">{medium}</p>
            <p className="text-sm font-body text-white/80 line-clamp-2 leading-relaxed">{description}</p>
          </div>
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

  // If route is provided, wrap in Link, otherwise return as is
  if (route) {
    return (
      <Link to={route} className="block">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};

export default ArtworkCard;
