import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Property {
  id: number;
  title: string;
  type: string;
  price: number;
  area: number;
  rooms: number;
  district: string;
  image: string;
  amenities: string[];
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Современная квартира в центре',
    type: 'Квартира',
    price: 75000,
    area: 85,
    rooms: 2,
    district: 'Центральный',
    image: 'https://cdn.poehali.dev/projects/9b1fd13d-3abb-410b-b84c-6b6f8b5e7bcc/files/e22204a7-36c1-45d4-b0cf-b9dc0e833afc.jpg',
    amenities: ['Wi-Fi', 'Парковка', 'Лифт', 'Охрана']
  },
  {
    id: 2,
    title: 'Уютная студия с кирпичной стеной',
    type: 'Студия',
    price: 45000,
    area: 42,
    rooms: 1,
    district: 'Промышленный',
    image: 'https://cdn.poehali.dev/projects/9b1fd13d-3abb-410b-b84c-6b6f8b5e7bcc/files/14afa7cf-fab7-4d02-b7a7-b1a81219fede.jpg',
    amenities: ['Wi-Fi', 'Мебель', 'Бытовая техника']
  },
  {
    id: 3,
    title: 'Роскошный пентхаус с панорамным видом',
    type: 'Пентхаус',
    price: 180000,
    area: 150,
    rooms: 4,
    district: 'Центральный',
    image: 'https://cdn.poehali.dev/projects/9b1fd13d-3abb-410b-b84c-6b6f8b5e7bcc/files/e8f9bfc6-a44a-447b-b7f2-ec885560937f.jpg',
    amenities: ['Wi-Fi', 'Парковка', 'Консьерж', 'Лифт', 'Терраса', 'Охрана']
  },
  {
    id: 4,
    title: 'Светлая 3-комнатная квартира',
    type: 'Квартира',
    price: 95000,
    area: 110,
    rooms: 3,
    district: 'Советский',
    image: 'https://cdn.poehali.dev/projects/9b1fd13d-3abb-410b-b84c-6b6f8b5e7bcc/files/e22204a7-36c1-45d4-b0cf-b9dc0e833afc.jpg',
    amenities: ['Wi-Fi', 'Парковка', 'Балкон', 'Мебель']
  },
  {
    id: 5,
    title: 'Комфортная студия для студентов',
    type: 'Студия',
    price: 35000,
    area: 35,
    rooms: 1,
    district: 'Ленинский',
    image: 'https://cdn.poehali.dev/projects/9b1fd13d-3abb-410b-b84c-6b6f8b5e7bcc/files/14afa7cf-fab7-4d02-b7a7-b1a81219fede.jpg',
    amenities: ['Wi-Fi', 'Мебель']
  },
  {
    id: 6,
    title: 'Квартира с видом на реку',
    type: 'Квартира',
    price: 120000,
    area: 95,
    rooms: 2,
    district: 'Приморский',
    image: 'https://cdn.poehali.dev/projects/9b1fd13d-3abb-410b-b84c-6b6f8b5e7bcc/files/e8f9bfc6-a44a-447b-b7f2-ec885560937f.jpg',
    amenities: ['Wi-Fi', 'Парковка', 'Лифт', 'Балкон', 'Охрана']
  }
];

const Index = () => {
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [activeSection, setActiveSection] = useState('main');

  const propertyTypes = ['Квартира', 'Студия', 'Пентхаус'];
  const districts = ['Центральный', 'Промышленный', 'Советский', 'Ленинский', 'Приморский'];
  const amenities = ['Wi-Fi', 'Парковка', 'Лифт', 'Охрана', 'Мебель', 'Балкон', 'Терраса', 'Консьерж', 'Бытовая техника'];

  const filteredProperties = properties.filter(property => {
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    const matchesType = selectedType.length === 0 || selectedType.includes(property.type);
    const matchesDistrict = selectedDistrict.length === 0 || selectedDistrict.includes(property.district);
    const matchesAmenities = selectedAmenities.length === 0 || selectedAmenities.every(amenity => property.amenities.includes(amenity));
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) || property.district.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesPrice && matchesType && matchesDistrict && matchesAmenities && matchesSearch;
  });

  const toggleArrayItem = (array: string[], setArray: (arr: string[]) => void, item: string) => {
    if (array.includes(item)) {
      setArray(array.filter(i => i !== item));
    } else {
      setArray([...array, item]);
    }
  };

  const resetFilters = () => {
    setPriceRange([0, 200000]);
    setSelectedType([]);
    setSelectedDistrict([]);
    setSelectedAmenities([]);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" className="h-6 w-6 text-primary" />
            <span className="font-heading text-xl font-bold">RentHome</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => setActiveSection('main')} className="text-sm font-medium transition-colors hover:text-primary">
              Главная
            </button>
            <button onClick={() => setActiveSection('placement')} className="text-sm font-medium transition-colors hover:text-primary">
              Размещение
            </button>
            <button onClick={() => setActiveSection('payment')} className="text-sm font-medium transition-colors hover:text-primary">
              Оплата
            </button>
            <button onClick={() => setActiveSection('contacts')} className="text-sm font-medium transition-colors hover:text-primary">
              Контакты
            </button>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Icon name="MessageCircle" className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Чат с поддержкой</SheetTitle>
                <SheetDescription>
                  Задайте ваш вопрос и мы ответим в ближайшее время
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-2">
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-sm">Здравствуйте! Чем могу помочь?</p>
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <div className="flex gap-2">
                    <Input placeholder="Введите сообщение..." />
                    <Button size="icon">
                      <Icon name="Send" className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {activeSection === 'main' && (
        <main className="container py-8">
          <div className="mb-8 space-y-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold">Найдите идеальное жильё</h1>
            <p className="text-lg text-muted-foreground">Более 1000 объектов недвижимости в вашем городе</p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Поиск по названию или району..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12"
                />
              </div>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="lg" className="gap-2">
                    <Icon name="SlidersHorizontal" className="h-4 w-4" />
                    Фильтры
                    {(selectedType.length + selectedDistrict.length + selectedAmenities.length > 0) && (
                      <Badge variant="secondary" className="ml-1">
                        {selectedType.length + selectedDistrict.length + selectedAmenities.length}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Фильтры поиска</SheetTitle>
                    <SheetDescription>
                      Настройте параметры для точного поиска
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <label className="font-medium">Цена (₽/мес)</label>
                      <div className="space-y-2">
                        <Slider
                          min={0}
                          max={200000}
                          step={5000}
                          value={priceRange}
                          onValueChange={setPriceRange}
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{priceRange[0].toLocaleString()} ₽</span>
                          <span>{priceRange[1].toLocaleString()} ₽</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="font-medium">Тип жилья</label>
                      {propertyTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            checked={selectedType.includes(type)}
                            onCheckedChange={() => toggleArrayItem(selectedType, setSelectedType, type)}
                          />
                          <label className="text-sm cursor-pointer">{type}</label>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <label className="font-medium">Район</label>
                      {districts.map((district) => (
                        <div key={district} className="flex items-center space-x-2">
                          <Checkbox
                            checked={selectedDistrict.includes(district)}
                            onCheckedChange={() => toggleArrayItem(selectedDistrict, setSelectedDistrict, district)}
                          />
                          <label className="text-sm cursor-pointer">{district}</label>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <label className="font-medium">Удобства</label>
                      {amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center space-x-2">
                          <Checkbox
                            checked={selectedAmenities.includes(amenity)}
                            onCheckedChange={() => toggleArrayItem(selectedAmenities, setSelectedAmenities, amenity)}
                          />
                          <label className="text-sm cursor-pointer">{amenity}</label>
                        </div>
                      ))}
                    </div>

                    <Button onClick={resetFilters} variant="outline" className="w-full">
                      Сбросить фильтры
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="mb-4 text-sm text-muted-foreground">
            Найдено объектов: {filteredProperties.length}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <Card
                key={property.id}
                className="overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                onClick={() => setSelectedProperty(property)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading font-semibold text-lg leading-tight">{property.title}</h3>
                      <Badge variant="secondary">{property.type}</Badge>
                    </div>
                    <p className="font-heading text-2xl font-bold text-primary">
                      {property.price.toLocaleString()} ₽
                      <span className="text-sm font-normal text-muted-foreground">/мес</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Maximize" className="h-4 w-4" />
                      <span>{property.area} м²</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Bed" className="h-4 w-4" />
                      <span>{property.rooms} комн.</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="MapPin" className="h-4 w-4" />
                      <span>{property.district}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {property.amenities.slice(0, 3).map((amenity) => (
                      <Badge key={amenity} variant="outline" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {property.amenities.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{property.amenities.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <Icon name="SearchX" className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-heading text-xl font-semibold mb-2">Ничего не найдено</h3>
              <p className="text-muted-foreground mb-4">Попробуйте изменить параметры поиска</p>
              <Button onClick={resetFilters} variant="outline">
                Сбросить фильтры
              </Button>
            </div>
          )}
        </main>
      )}

      {activeSection === 'placement' && (
        <main className="container py-12">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-2">
              <h1 className="font-heading text-4xl font-bold">Разместить объект</h1>
              <p className="text-muted-foreground">Сдайте свою недвижимость быстро и выгодно</p>
            </div>
            
            <Card className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="font-medium">Название объявления</label>
                  <Input placeholder="Например: Уютная 2-комнатная квартира" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-medium">Тип недвижимости</label>
                    <Input placeholder="Квартира" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-medium">Цена (₽/мес)</label>
                    <Input type="number" placeholder="50000" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-medium">Площадь (м²)</label>
                    <Input type="number" placeholder="60" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-medium">Комнат</label>
                    <Input type="number" placeholder="2" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-medium">Район</label>
                  <Input placeholder="Центральный" />
                </div>

                <Button className="w-full" size="lg">
                  Разместить объявление
                </Button>
              </div>
            </Card>
          </div>
        </main>
      )}

      {activeSection === 'payment' && (
        <main className="container py-12">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-2">
              <h1 className="font-heading text-4xl font-bold">Оплата</h1>
              <p className="text-muted-foreground">Безопасные способы оплаты аренды</p>
            </div>
            
            <div className="grid gap-4">
              <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="CreditCard" className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold">Банковская карта</h3>
                    <p className="text-sm text-muted-foreground">Visa, MasterCard, МИР</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Smartphone" className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold">Электронные кошельки</h3>
                    <p className="text-sm text-muted-foreground">ЮMoney, QIWI, WebMoney</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Building" className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold">Банковский перевод</h3>
                    <p className="text-sm text-muted-foreground">Безналичный расчет для юр. лиц</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      )}

      {activeSection === 'contacts' && (
        <main className="container py-12">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-2">
              <h1 className="font-heading text-4xl font-bold">Контакты</h1>
              <p className="text-muted-foreground">Свяжитесь с нами удобным способом</p>
            </div>
            
            <div className="grid gap-4">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Phone" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@renthome.ru</p>
                    <p className="text-sm text-muted-foreground mt-1">Ответим в течение 24 часов</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Адрес офиса</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                    <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 10:00 - 19:00</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      )}

      <Dialog open={!!selectedProperty} onOpenChange={() => setSelectedProperty(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProperty && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">{selectedProperty.title}</DialogTitle>
                <DialogDescription>{selectedProperty.district}</DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  className="w-full rounded-lg aspect-video object-cover"
                />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading text-3xl font-bold text-primary">
                      {selectedProperty.price.toLocaleString()} ₽
                      <span className="text-base font-normal text-muted-foreground">/мес</span>
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-base px-3 py-1">
                    {selectedProperty.type}
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-y">
                  <div className="text-center">
                    <Icon name="Maximize" className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                    <p className="font-semibold">{selectedProperty.area} м²</p>
                    <p className="text-sm text-muted-foreground">Площадь</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Bed" className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                    <p className="font-semibold">{selectedProperty.rooms} комн.</p>
                    <p className="text-sm text-muted-foreground">Комнат</p>
                  </div>
                  <div className="text-center">
                    <Icon name="MapPin" className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                    <p className="font-semibold">{selectedProperty.district}</p>
                    <p className="text-sm text-muted-foreground">Район</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-semibold">Удобства:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProperty.amenities.map((amenity) => (
                      <Badge key={amenity} variant="outline">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1" size="lg">
                    <Icon name="Phone" className="mr-2 h-4 w-4" />
                    Позвонить
                  </Button>
                  <Button variant="outline" className="flex-1" size="lg">
                    <Icon name="Mail" className="mr-2 h-4 w-4" />
                    Написать
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
