import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface PropertyCardProps {
  id: number;
  image: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
}

export function PropertyCard({
  id,
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  type,
}: PropertyCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {type}
        </Badge>
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-4 right-4 rounded-full"
        >
          <Icon name="Heart" size={18} />
        </Button>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-card-foreground">{title}</h3>
        <div className="flex items-center text-muted-foreground mb-4">
          <Icon name="MapPin" size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Icon name="Bed" size={16} className="mr-1" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Icon name="Bath" size={16} className="mr-1" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Icon name="Maximize" size={16} className="mr-1" />
            <span>{area} м²</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <span className="text-2xl font-bold text-primary">
              {price.toLocaleString('ru-RU')} ₽
            </span>
            <span className="text-muted-foreground text-sm">/мес</span>
          </div>
          <Button onClick={() => navigate(`/property/${id}`)}>
            Подробнее
          </Button>
        </div>
      </div>
    </Card>
  );
}
