import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-travel-dark text-white pt-12 pb-6">
      <div className="travel-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin size={24} className="text-accent" />
              <span className="text-xl font-bold">ТурВояж</span>
            </div>
            <p className="text-gray-300 mb-4">
              Ваш надежный партнер в мире удивительных путешествий и незабываемых приключений.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Популярные направления</h3>
            <ul className="space-y-2">
              <li><Link to="/destinations?region=europe" className="text-gray-300 hover:text-accent transition-colors">Европа</Link></li>
              <li><Link to="/destinations?region=asia" className="text-gray-300 hover:text-accent transition-colors">Азия</Link></li>
              <li><Link to="/destinations?region=africa" className="text-gray-300 hover:text-accent transition-colors">Африка</Link></li>
              <li><Link to="/destinations?region=americas" className="text-gray-300 hover:text-accent transition-colors">Америка</Link></li>
              <li><Link to="/destinations?region=beach" className="text-gray-300 hover:text-accent transition-colors">Пляжный отдых</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors">О компании</Link></li>
              <li><Link to="/plan-trip" className="text-gray-300 hover:text-accent transition-colors">Спланировать поездку</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-accent transition-colors">Часто задаваемые вопросы</Link></li>
              <li><Link to="/contacts" className="text-gray-300 hover:text-accent transition-colors">Контакты</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-accent transition-colors">Блог о путешествиях</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Подпишитесь на новости</h3>
            <p className="text-gray-300 mb-4">Получайте эксклюзивные предложения и новости о путешествиях</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Ваш email" className="bg-white/10 border-white/20" />
              <Button variant="secondary">Подписаться</Button>
            </div>
            <div className="mt-6">
              <div className="flex items-center space-x-2 mb-2">
                <Mail size={16} className="text-accent" />
                <span className="text-gray-300">info@turvoyage.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-accent" />
                <span className="text-gray-300">+7 (800) 555-35-35</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 ТурВояж. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-accent transition-colors">Политика конфиденциальности</Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-accent transition-colors">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;