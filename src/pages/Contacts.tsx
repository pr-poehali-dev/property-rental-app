import { Header } from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Мы всегда готовы ответить на ваши вопросы
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Отправить сообщение</h2>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Имя
                    </label>
                    <Input placeholder="Ваше имя" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Телефон
                    </label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Расскажите нам о вашем вопросе..."
                      rows={5}
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@renthub.ru</p>
                      <p className="text-muted-foreground">support@renthub.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">
                        Москва, ул. Тверская, 15
                      </p>
                      <p className="text-muted-foreground">Офис 302</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Время работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
