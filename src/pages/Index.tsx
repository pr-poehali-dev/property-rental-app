import { useState } from 'react';
import { Header } from '@/components/Header';
import { PropertyCard } from '@/components/PropertyCard';
import { MapView } from '@/components/MapView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const properties = [
  {
    id: 1,
    image: 'https://cdn.poehali.dev/projects/9b1fd13d-3abb-410b-b84c-6b6f8b5e7bcc/files/443c7236-1e50-4310-9d1f-77666702692a.jpg',
    title: 'Роскошная квартира в центре',
    location: 'Москва, Пресненский район',
    price: 120000,
    bedrooms: 3,
    bathrooms: 2,
    area: 95,
    type: 'Квартира',
    lat: 55.7558,
    lng: 37.6173,
  },
  {
    id: 2,
    image: 'https://cdn.poehali.dev/projects/9b1fd13d-3abb-410b-b84c-6b6f8b5e7bcc/files/75e734b0-018c-4599-9fe4-1ada89007296.jpg',
    title: 'Уютная студия у метро',
    location: 'Москва, Таганский район',
    price: 45000,
    bedrooms: 1,
    bathrooms: 1,
    area: 32,
    type: 'Студия',
    lat: 55.7400,
    lng: 37.6530,
  },
  {
    id: 3,
    image: 'https://cdn.poehali.dev/projects/9b1fd13d-3abb-410b-b84c-6b6f8b5e7bcc/files/7c227a95-4c75-4a64-8a71-e3149d049e0e.jpg',
    title: 'Пентхаус с панорамным видом',
    location: 'Москва, Хамовники',
    price: 250000,
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    type: 'Пентхаус',
    lat: 55.7267,
    lng: 37.5675,
  },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[500px] bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Найдите идеальное жильё
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Тысячи объектов недвижимости для аренды в лучших районах города
          </p>

          <div className="w-full max-w-3xl flex gap-2">
            <div className="relative flex-1">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Введите адрес, район или метро..."
                className="pl-10 h-14 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button size="lg" className="h-14 px-8">
              Найти
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Tabs defaultValue="grid" className="w-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              Доступные объекты
            </h2>
            <TabsList>
              <TabsTrigger value="grid">
                <Icon name="Grid3x3" size={18} className="mr-2" />
                Сетка
              </TabsTrigger>
              <TabsTrigger value="map">
                <Icon name="Map" size={18} className="mr-2" />
                Карта
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="grid" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="map" className="mt-0">
            <MapView properties={properties} />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
