import { useState } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export default function Listing() {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedImages([...selectedImages, ...imageUrls]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Объявление успешно размещено!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Разместить объявление
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            Заполните информацию о вашей недвижимости
          </p>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="title">Название объявления</Label>
                  <Input
                    id="title"
                    placeholder="Например: Современная квартира в центре"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="type">Тип недвижимости</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Квартира</SelectItem>
                        <SelectItem value="studio">Студия</SelectItem>
                        <SelectItem value="penthouse">Пентхаус</SelectItem>
                        <SelectItem value="house">Дом</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="price">Цена (₽/мес)</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="50000"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="bedrooms">Спален</Label>
                    <Input
                      id="bedrooms"
                      type="number"
                      placeholder="2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="bathrooms">Ванных</Label>
                    <Input
                      id="bathrooms"
                      type="number"
                      placeholder="1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="area">Площадь (м²)</Label>
                    <Input id="area" type="number" placeholder="65" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location">Адрес</Label>
                  <Input
                    id="location"
                    placeholder="Москва, ул. Тверская, 15"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Описание</Label>
                  <Textarea
                    id="description"
                    placeholder="Опишите особенности вашей недвижимости..."
                    rows={5}
                    required
                  />
                </div>

                <div>
                  <Label>Фотографии</Label>
                  <div className="mt-2">
                    <label
                      htmlFor="images"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Icon
                          name="Upload"
                          size={32}
                          className="text-muted-foreground mb-2"
                        />
                        <p className="text-sm text-muted-foreground">
                          Нажмите для загрузки фото
                        </p>
                      </div>
                      <input
                        id="images"
                        type="file"
                        className="hidden"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>

                  {selectedImages.length > 0 && (
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      {selectedImages.map((image, index) => (
                        <div
                          key={index}
                          className="relative aspect-square rounded-lg overflow-hidden"
                        >
                          <img
                            src={image}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => navigate('/')}
                  >
                    Отмена
                  </Button>
                  <Button type="submit" className="flex-1">
                    Разместить объявление
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
