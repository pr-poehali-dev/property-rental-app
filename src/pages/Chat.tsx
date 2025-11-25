import { useState } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'support';
  timestamp: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Здравствуйте! Чем могу помочь?',
      sender: 'support',
      timestamp: '14:30',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    setTimeout(() => {
      const supportMessage: Message = {
        id: messages.length + 2,
        text: 'Спасибо за ваше сообщение! Наш специалист скоро ответит вам.',
        sender: 'support',
        timestamp: new Date().toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages((prev) => [...prev, supportMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="h-[calc(100vh-200px)] flex flex-col">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Чат поддержки</h2>
                  <p className="text-sm text-muted-foreground font-normal">
                    Онлайн
                  </p>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`flex gap-3 max-w-[70%] ${
                          message.sender === 'user' ? 'flex-row-reverse' : ''
                        }`}
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarFallback
                            className={
                              message.sender === 'support'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-accent text-accent-foreground'
                            }
                          >
                            {message.sender === 'support' ? 'П' : 'Я'}
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <div
                            className={`rounded-lg p-3 ${
                              message.sender === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted'
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Введите сообщение..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage} size="icon">
                    <Icon name="Send" size={18} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
