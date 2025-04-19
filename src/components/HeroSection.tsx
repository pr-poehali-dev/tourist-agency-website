import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Compass, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section 
      className="relative pt-16 pb-24 overflow-hidden" 
      style={{
        backgroundImage: "linear-gradient(to right, rgba(0, 114, 206, 0.85), rgba(0, 178, 176, 0.85)), url('/4x/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white"
      }}
    >
      {/* Декоративный фон */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
      </div>

      <div className="travel-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Откройте для себя мир невероятных путешествий
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Исследуйте удивительные места, создавайте незабываемые воспоминания и наслаждайтесь путешествием вашей мечты
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-travel-blue hover:bg-white/90">
                <Link to="/destinations">
                  Исследовать направления
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/plan-trip">
                  Спланировать поездку
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:block">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Поиск идеального тура</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Куда</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                        <Input className="pl-10" placeholder="Любая страна" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Тип отдыха</label>
                      <div className="relative">
                        <Compass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                        <Select>
                          <SelectTrigger className="pl-10">
                            <SelectValue placeholder="Любой тип" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beach">Пляжный</SelectItem>
                            <SelectItem value="excursion">Экскурсионный</SelectItem>
                            <SelectItem value="adventure">Приключения</SelectItem>
                            <SelectItem value="cruise">Круизы</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Даты поездки</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                        <Input className="pl-10" placeholder="Выберите даты" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Бюджет</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Любой бюджет" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Эконом</SelectItem>
                          <SelectItem value="standard">Стандарт</SelectItem>
                          <SelectItem value="premium">Премиум</SelectItem>
                          <SelectItem value="luxury">Люкс</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Найти туры
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;