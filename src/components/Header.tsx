import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <Icon name="Home" size={28} className="text-primary" />
          <span className="text-2xl font-bold text-primary">RentHub</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" onClick={() => navigate('/')}>
            Главная
          </Button>
          <Button variant="ghost" onClick={() => navigate('/contacts')}>
            Контакты
          </Button>
          <Button variant="ghost" onClick={() => navigate('/chat')}>
            <Icon name="MessageCircle" size={18} className="mr-2" />
            Чат
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => navigate('/listing')}>
            <Icon name="Plus" size={18} className="mr-2" />
            Разместить
          </Button>
          <Button onClick={() => navigate('/payment')}>
            Оплата
          </Button>
        </div>
      </div>
    </header>
  );
}
