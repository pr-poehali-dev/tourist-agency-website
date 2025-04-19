import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Типы данных для направлений
interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  price: string;
}

// Данные популярных направлений
const popularDestinations: Destination[] = [
  {
    id: "paris",
    name: "Париж",
    location: "Франция",
    image: "/4x/paris.jpg",
    description: "Город любви и искусства с множеством достопримечательностей",
    price: "от 65 000 ₽",
  },
  {
    id: "bali",
    name: "Бали",
    location: "Индонезия",
    image: "/4x/bali.jpg",
    description: "Тропический рай с великолепными пляжами и богатой культурой",
    price: "от 85 000 ₽",
  },
  {
    id: "santorini",
    name: "Санторини",
    location: "Греция",
    image: "/4x/santorini.jpg",
    description: "Живописный остров с белоснежными домами и голубыми куполами",
    price: "от 75 000 ₽",
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="travel-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-travel-dark">Популярные направления</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Исследуйте наши лучшие туристические направления, выбранные тысячами довольных путешественников
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDestinations.map((destination) => (
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
              <CardContent className="flex-1 p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <p className="text-muted-foreground">{destination.location}</p>
                  </div>
                  <div className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {destination.price}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  {destination.description}
                </p>
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

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/destinations">
              Все направления
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;