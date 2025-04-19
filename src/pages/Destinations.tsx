import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowRight, Search, MapPin, Check } from "lucide-react";
import { Link } from "react-router-dom";

// Типы для направлений
interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  price: number;
  category: string;
  duration: number;
  region: string;
  features: string[];
  rating: number;
}

// Мок-данные для направлений
const allDestinations: Destination[] = [
  {
    id: "paris",
    name: "Париж",
    location: "Франция",
    image: "/4x/paris.jpg",
    description: "Город любви и искусства с множеством достопримечательностей. Посетите Эйфелеву башню, Лувр и прогуляйтесь по Елисейским полям.",
    price: 65000,
    category: "excursion",
    duration: 7,
    region: "europe",
    features: ["Экскурсии", "Исторические места", "Шоппинг"],
    rating: 4.8
  },
  {
    id: "bali",
    name: "Бали",
    location: "Индонезия",
    image: "/4x/bali.jpg",
    description: "Тропический рай с великолепными пляжами и богатой культурой. Исследуйте храмы, рисовые террасы и потрясающие пляжи.",
    price: 85000,
    category: "beach",
    duration: 10,
    region: "asia",
    features: ["Пляжи", "Храмы", "Активный отдых"],
    rating: 4.7
  },
  {
    id: "santorini",
    name: "Санторини",
    location: "Греция",
    image: "/4x/santorini.jpg",
    description: "Живописный остров с белоснежными домами и голубыми куполами. Насладитесь захватывающими видами и местной кухней.",
    price: 75000,
    category: "beach",
    duration: 7,
    region: "europe",
    features: ["Пляжи", "Романтика", "Гастрономия"],
    rating: 4.9
  },
  {
    id: "tokyo",
    name: "Токио",
    location: "Япония",
    image: "/4x/tokyo.jpg",
    description: "Удивительное сочетание традиций и современности. Познакомьтесь с японской культурой, технологиями и кухней.",
    price: 95000,
    category: "excursion",
    duration: 8,
    region: "asia",
    features: ["Технологии", "Культура", "Гастрономия"],
    rating: 4.7
  },
  {
    id: "barcelona",
    name: "Барселона",
    location: "Испания",
    image: "/4x/barcelona.jpg",
    description: "Яркий город с уникальной архитектурой Гауди, отличными пляжами и вкусной кухней.",
    price: 55000,
    category: "excursion",
    duration: 6,
    region: "europe",
    features: ["Архитектура", "Пляжи", "Гастрономия"],
    rating: 4.6
  },
  {
    id: "maldives",
    name: "Мальдивы",
    location: "Мальдивская Республика",
    image: "/4x/maldives.jpg",
    description: "Роскошный отдых на белоснежных пляжах с кристально чистой водой. Идеальное место для релаксации.",
    price: 120000,
    category: "beach",
    duration: 9,
    region: "asia",
    features: ["Пляжи", "Романтика", "Роскошь"],
    rating: 5.0
  },
];

const Destinations = () => {
  const [searchParams] = useSearchParams();
  const initialRegion = searchParams.get("region") || "all";
  const initialCategory = searchParams.get("category") || "all";
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState(initialRegion);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState([0, 150000]);
  const [destinations, setDestinations] = useState<Destination[]>([]);

  // Фильтры для направлений
  useEffect(() => {
    let filtered = [...allDestinations];
    
    // Фильтр по поиску
    if (searchTerm) {
      filtered = filtered.filter(
        (dest) => 
          dest.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          dest.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Фильтр по региону
    if (selectedRegion !== "all") {
      filtered = filtered.filter((dest) => dest.region === selectedRegion);
    }
    
    // Фильтр по категории
    if (selectedCategory !== "all") {
      filtered = filtered.filter((dest) => dest.category === selectedCategory);
    }
    
    // Фильтр по цене
    filtered = filtered.filter(
      (dest) => dest.price >= priceRange[0] && dest.price <= priceRange[1]
    );
    
    setDestinations(filtered);
  }, [searchTerm, selectedRegion, selectedCategory, priceRange]);

  return (
    <div className="pb-16">
      <div className="bg-travel-blue text-white py-16">
        <div className="travel-container">
          <h1 className="text-3xl font-bold mb-4">Наши направления</h1>
          <p className="text-lg opacity-90 max-w-3xl">
            Исследуйте наши лучшие туристические направления по всему миру. Найдите идеальное путешествие для вашего следующего отпуска.
          </p>
        </div>
      </div>

      <div className="travel-container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Сайдбар с фильтрами */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Фильтры</h2>
              
              {/* Поиск */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                  <Input 
                    className="pl-10" 
                    placeholder="Поиск направлений" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Регионы */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3">Регион</h3>
                <Tabs defaultValue={selectedRegion} onValueChange={setSelectedRegion}>
                  <TabsList className="grid grid-cols-2 w-full h-auto mb-2">
                    <TabsTrigger value="all">Все</TabsTrigger>
                    <TabsTrigger value="europe">Европа</TabsTrigger>
                  </TabsList>
                  <TabsList className="grid grid-cols-2 w-full h-auto">
                    <TabsTrigger value="asia">Азия</TabsTrigger>
                    <TabsTrigger value="americas">Америка</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              {/* Категории */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3">Категория</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox 
                      id="all-category" 
                      checked={selectedCategory === "all"}
                      onClick={() => setSelectedCategory("all")}
                    />
                    <Label htmlFor="all-category" className="ml-2">Все категории</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="beach-category" 
                      checked={selectedCategory === "beach"}
                      onClick={() => setSelectedCategory("beach")}
                    />
                    <Label htmlFor="beach-category" className="ml-2">Пляжный отдых</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="excursion-category" 
                      checked={selectedCategory === "excursion"}
                      onClick={() => setSelectedCategory("excursion")}
                    />
                    <Label htmlFor="excursion-category" className="ml-2">Экскурсионные туры</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="adventure-category" 
                      checked={selectedCategory === "adventure"}
                      onClick={() => setSelectedCategory("adventure")}
                    />
                    <Label htmlFor="adventure-category" className="ml-2">Приключения</Label>
                  </div>
                </div>
              </div>
              
              {/* Цена */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <h3 className="text-sm font-semibold">Цена</h3>
                  <span className="text-sm text-muted-foreground">
                    {priceRange[0].toLocaleString()} ₽ - {priceRange[1].toLocaleString()} ₽
                  </span>
                </div>
                <Slider
                  defaultValue={priceRange}
                  min={0}
                  max={150000}
                  step={5000}
                  onValueChange={setPriceRange}
                  className="my-4"
                />
              </div>
              
              <Button className="w-full">Применить фильтры</Button>
            </div>
          </div>
          
          {/* Список направлений */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Все направления</h2>
              <span className="text-muted-foreground">Найдено: {destinations.length}</span>
            </div>
            
            {destinations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {destinations.map((destination) => (
                  <Card key={destination.id} className="destination-card border-none shadow-md h-full flex flex-col">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <CardContent className="flex-1 p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold">{destination.name}</h3>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin size={14} className="mr-1" />
                            <span>{destination.location}</span>
                          </div>
                        </div>
                        <div className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                          от {destination.price.toLocaleString()} ₽
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {destination.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {destination.features.slice(0, 3).map((feature, index) => (
                          <span key={index} className="bg-secondary/10 text-secondary-foreground px-2 py-1 rounded-md text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        to={`/destinations/${destination.id}`}
                        className="text-primary font-medium hover:text-primary/80 flex items-center gap-1 mt-auto"
                      >
                        Подробнее <ArrowRight size={16} />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="bg-muted/50 rounded-lg p-8 text-center">
                <h3 className="text-lg font-medium mb-2">Направления не найдены</h3>
                <p className="text-muted-foreground mb-4">
                  Попробуйте изменить параметры поиска или сбросить фильтры
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedRegion("all");
                    setSelectedCategory("all");
                    setPriceRange([0, 150000]);
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;