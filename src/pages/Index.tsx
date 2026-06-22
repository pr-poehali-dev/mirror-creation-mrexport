import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/96d8ec40-59f5-4080-b7fe-c9eec7e745e1/files/940c4571-8683-44d4-b0e0-6c3da367ec44.jpg';
const IMG_HEADPHONES = 'https://cdn.poehali.dev/projects/96d8ec40-59f5-4080-b7fe-c9eec7e745e1/files/bc083007-c9ef-47e1-9c98-8ad94fd84a13.jpg';
const IMG_WATCH = 'https://cdn.poehali.dev/projects/96d8ec40-59f5-4080-b7fe-c9eec7e745e1/files/4e22ae4d-c20f-4617-a78e-473cd943a06c.jpg';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  badge?: string;
};

const products: Product[] = [
  { id: 1, name: 'Беспроводные наушники Pro', category: 'Электроника', price: 8990, oldPrice: 12990, rating: 4.9, image: IMG_HEADPHONES, badge: 'Хит' },
  { id: 2, name: 'Смарт-часы Ultra', category: 'Электроника', price: 14990, oldPrice: 18990, rating: 4.8, image: IMG_WATCH, badge: '-21%' },
  { id: 3, name: 'Игровая мышь RGB', category: 'Электроника', price: 3490, rating: 4.7, image: IMG_HEADPHONES },
  { id: 4, name: 'Механическая клавиатура', category: 'Электроника', price: 6990, rating: 4.9, image: IMG_WATCH, badge: 'Новинка' },
  { id: 5, name: 'Портативная колонка', category: 'Аудио', price: 4290, oldPrice: 5990, rating: 4.6, image: IMG_HEADPHONES },
  { id: 6, name: 'Фитнес-браслет Sport', category: 'Гаджеты', price: 2990, rating: 4.5, image: IMG_WATCH },
  { id: 7, name: 'Веб-камера 4K', category: 'Электроника', price: 7490, rating: 4.8, image: IMG_HEADPHONES, badge: 'Хит' },
  { id: 8, name: 'Беспроводная зарядка', category: 'Гаджеты', price: 1990, oldPrice: 2990, rating: 4.4, image: IMG_WATCH },
];

const categories = ['Все', 'Электроника', 'Аудио', 'Гаджеты'];

const navLinks = ['Главная', 'Каталог', 'О нас', 'Доставка', 'Отзывы', 'Блог', 'Контакты'];

const features = [
  { icon: 'Truck', title: 'Быстрая доставка', text: 'По всей России за 1–3 дня' },
  { icon: 'ShieldCheck', title: 'Гарантия качества', text: 'Официальная гарантия на всё' },
  { icon: 'CreditCard', title: 'Удобная оплата', text: 'Картой, наличными, в рассрочку' },
  { icon: 'Headset', title: 'Поддержка 24/7', text: 'Всегда на связи с вами' },
];

const reviews = [
  { name: 'Анна К.', text: 'Заказала наушники — пришли за два дня, всё работает отлично!', rating: 5 },
  { name: 'Дмитрий П.', text: 'Отличный магазин, цены ниже рынка. Буду заказывать ещё.', rating: 5 },
  { name: 'Елена С.', text: 'Удобный сайт, быстрая доставка и приятная поддержка.', rating: 5 },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [cart, setCart] = useState<number[]>([]);

  const filtered = activeCategory === 'Все' ? products : products.filter((p) => p.category === activeCategory);
  const addToCart = (id: number) => setCart((c) => [...c, id]);
  const format = (n: number) => n.toLocaleString('ru-RU') + ' ₽';

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-border">
        <div className="container flex items-center justify-between h-16 gap-4">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center">
              <Icon name="ShoppingBag" size={20} className="text-white" />
            </div>
            <span className="text-xl font-heading font-extrabold tracking-tight">Mr<span className="text-gradient">Export</span></span>
          </a>
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a key={l} href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex"><Icon name="Search" size={20} /></Button>
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-brand-gradient text-white text-[11px] font-bold flex items-center justify-center">{cart.length}</span>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-soft">
        <div className="container grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div className="animate-fade-in">
            <Badge className="mb-5 bg-white text-foreground border border-border hover:bg-white">🚀 Скидки до 40% уже сегодня</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mb-5">
              Всё нужное <span className="text-gradient">в одном месте</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Тысячи товаров с быстрой доставкой по всей России. Покупай выгодно вместе с MrExport.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-brand-gradient gradient-animated animate-gradient-move text-white border-0 hover:opacity-90 px-8">
                Перейти в каталог
                <Icon name="ArrowRight" size={18} className="ml-1" />
              </Button>
              <Button size="lg" variant="outline">Акции недели</Button>
            </div>
            <div className="flex gap-8 mt-10">
              {[['10K+', 'товаров'], ['50K+', 'клиентов'], ['4.9', 'рейтинг']].map(([n, t]) => (
                <div key={t}>
                  <div className="text-2xl font-extrabold font-heading">{n}</div>
                  <div className="text-sm text-muted-foreground">{t}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-brand-gradient rounded-[2rem] blur-2xl opacity-30" />
            <img src={HERO_IMG} alt="MrExport" className="relative rounded-[2rem] shadow-2xl w-full animate-float" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f) => (
          <Card key={f.title} className="p-6 border-border hover-lift">
            <div className="w-12 h-12 rounded-xl bg-brand-soft flex items-center justify-center mb-4">
              <Icon name={f.icon} size={24} className="text-gradient" />
            </div>
            <h3 className="font-bold text-lg mb-1">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.text}</p>
          </Card>
        ))}
      </section>

      {/* Catalog */}
      <section className="container py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <Badge className="mb-3 bg-brand-soft text-foreground hover:bg-brand-soft border-0">Каталог</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold">Популярные товары</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === c ? 'bg-brand-gradient text-white' : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <Card key={p.id} className="group overflow-hidden border-border hover-lift">
              <div className="relative aspect-square bg-brand-soft overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {p.badge && (
                  <Badge className="absolute top-3 left-3 bg-brand-gradient text-white border-0">{p.badge}</Badge>
                )}
              </div>
              <div className="p-4">
                <div className="text-xs text-muted-foreground mb-1">{p.category}</div>
                <h3 className="font-bold leading-snug mb-2 line-clamp-1">{p.name}</h3>
                <div className="flex items-center gap-1 mb-3 text-sm">
                  <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">{p.rating}</span>
                </div>
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <div className="font-extrabold font-heading">{format(p.price)}</div>
                    {p.oldPrice && <div className="text-xs text-muted-foreground line-through">{format(p.oldPrice)}</div>}
                  </div>
                  <Button size="icon" onClick={() => addToCart(p.id)} className="bg-brand-gradient text-white border-0 hover:opacity-90 rounded-xl shrink-0">
                    <Icon name="Plus" size={18} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="container py-16">
        <div className="rounded-3xl bg-brand-gradient gradient-animated animate-gradient-move p-8 md:p-14 text-white grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">О магазине MrExport</h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              Мы — команда, которая делает онлайн-покупки простыми и приятными. Тщательно отбираем товары, работаем напрямую с поставщиками и гарантируем качество каждой позиции.
            </p>
            <Button size="lg" variant="secondary" className="text-foreground">Узнать больше</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['Truck', '1–3 дня', 'доставка'], ['Package', '10 000+', 'товаров'], ['Users', '50 000+', 'клиентов'], ['Award', '5 лет', 'на рынке']].map(([icon, n, t]) => (
              <div key={t} className="bg-white/15 backdrop-blur rounded-2xl p-5">
                <Icon name={icon} size={26} className="mb-2" />
                <div className="text-2xl font-extrabold font-heading">{n}</div>
                <div className="text-sm text-white/80">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container py-10">
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-brand-soft text-foreground hover:bg-brand-soft border-0">Отзывы</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold">Что говорят покупатели</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <Card key={r.name} className="p-6 border-border hover-lift">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-5">«{r.text}»</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-white font-bold">{r.name[0]}</div>
                <span className="font-semibold">{r.name}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contacts / Footer */}
      <footer className="bg-foreground text-white mt-16">
        <div className="container py-14 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center">
                <Icon name="ShoppingBag" size={20} className="text-white" />
              </div>
              <span className="text-xl font-heading font-extrabold">MrExport</span>
            </div>
            <p className="text-white/60 text-sm">Современный интернет-магазин с доставкой по всей России.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Разделы</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {navLinks.map((l) => <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2"><Icon name="Phone" size={16} /> 8 (800) 555-35-35</li>
              <li className="flex items-center gap-2"><Icon name="Mail" size={16} /> info@mrexport.ru</li>
              <li className="flex items-center gap-2"><Icon name="MapPin" size={16} /> Москва, ул. Примерная, 1</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-3">
              {['Send', 'Instagram', 'Youtube'].map((s) => (
                <a key={s} href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-brand-gradient transition-colors">
                  <Icon name={s} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-sm text-white/40">
          © 2026 MrExport. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;
