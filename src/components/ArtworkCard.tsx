import { Card, CardContent } from "@/components/ui/card";

interface ArtworkCardProps {
  image: string;
  title: string;
  medium: string;
  description: string;
}

const ArtworkCard = ({ image, title, medium, description }: ArtworkCardProps) => {
  return (
    <Card className="overflow-hidden hover-lift group cursor-pointer border-border">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-xl font-heading font-semibold text-white mb-1">{title}</h3>
          <p className="text-sm font-body text-white/90 mb-2">{medium}</p>
          <p className="text-sm font-body text-white/80 line-clamp-2">{description}</p>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-heading font-semibold mb-1">{title}</h3>
        <p className="text-sm font-body text-muted-foreground">{medium}</p>
      </CardContent>
    </Card>
  );
};

export default ArtworkCard;
