import { useState } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Оплата успешно произведена!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Оплата</h1>
          <p className="text-muted-foreground text-center mb-12">
            Выберите удобный способ оплаты
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Способ оплаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-accent transition-colors">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Icon name="CreditCard" size={24} className="text-primary" />
                          <div>
                            <p className="font-semibold">Банковская карта</p>
                            <p className="text-sm text-muted-foreground">
                              Visa, Mastercard, МИР
                            </p>
                          </div>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-accent transition-colors">
                      <RadioGroupItem value="sbp" id="sbp" />
                      <Label htmlFor="sbp" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Icon name="Smartphone" size={24} className="text-primary" />
                          <div>
                            <p className="font-semibold">СБП</p>
                            <p className="text-sm text-muted-foreground">
                              Система быстрых платежей
                            </p>
                          </div>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-accent transition-colors">
                      <RadioGroupItem value="yandex" id="yandex" />
                      <Label htmlFor="yandex" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Icon name="Wallet" size={24} className="text-primary" />
                          <div>
                            <p className="font-semibold">ЮMoney</p>
                            <p className="text-sm text-muted-foreground">
                              Яндекс Деньги
                            </p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === 'card' && (
                    <form onSubmit={handlePayment} className="mt-6 space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Номер карты</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Срок действия</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            type="password"
                            maxLength={3}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="name">Имя на карте</Label>
                        <Input
                          id="name"
                          placeholder="IVAN IVANOV"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Оплатить 75 000 ₽
                      </Button>
                    </form>
                  )}

                  {paymentMethod === 'sbp' && (
                    <div className="mt-6 p-6 text-center border rounded-lg">
                      <div className="w-48 h-48 mx-auto bg-muted rounded-lg mb-4 flex items-center justify-center">
                        <Icon name="QrCode" size={120} className="text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Отсканируйте QR-код в приложении вашего банка
                      </p>
                      <Button variant="outline" className="w-full">
                        Оплатить через СБП
                      </Button>
                    </div>
                  )}

                  {paymentMethod === 'yandex' && (
                    <div className="mt-6">
                      <Button
                        className="w-full"
                        size="lg"
                        onClick={() => alert('Переход на ЮMoney...')}
                      >
                        Перейти к оплате через ЮMoney
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Детали заказа</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Объект
                    </p>
                    <p className="font-semibold">
                      Современная квартира в центре
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Период</p>
                    <p className="font-semibold">1 месяц</p>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Аренда</span>
                      <span>75 000 ₽</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Комиссия сервиса
                      </span>
                      <span>0 ₽</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Итого</span>
                    <span className="text-primary">75 000 ₽</span>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex gap-3">
                      <Icon
                        name="Shield"
                        size={20}
                        className="text-primary mt-1"
                      />
                      <div>
                        <p className="text-sm font-semibold mb-1">
                          Безопасная оплата
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Ваши данные защищены и не передаются третьим лицам
                        </p>
                      </div>
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
