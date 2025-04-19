import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Palmtree, Mountain, Ship, Utensils, Ticket, Users } from "lucide-react";

interface TourCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const categories: TourCategory[] = [
  {
    id: "beach",
    name: "Пляжный отдых",
    description: "Расслабляющий отдых на лучших пляжах мира",
    icon: <Palmtree className="h-10 w-10 text-travel-teal" />,
    link: "/destinations?category=beach",
  },
  {
    id: "adventure",
    name: "Приключения",
    description: "Захватывающие маршруты для любителей активного отдыха",
    icon: <Mountain className="h-10 w-10 text-travel-teal" />,
    link: "/destinations?category=adventure",
  },
  {
    id: "cruise",
    name: "Круизы",
    description: "Морские путешествия с посещением множества стран",
    icon: <Ship className="h-10 w-10 text-travel-teal" />,
    link: "/destinations?category=cruise",
  },
  {
    id: "gastronomy",
    name: "Гастрономические туры",
    description: "Погружение в культуру через местную кухню",
    icon: <Utensils className="h-10 w-10 text-travel-teal" />,
    link: "/destinations?category=gastronomy",
  },
  {
    id: "excursion",
    name: "Экскурсионные туры",
    description: "Знакомство с историей и достопримечательностями",
    icon: <Ticket className="h-10 w-10 text-travel-teal" />,
    link: "/destinations?category=excursion",
  },
  {
    id: "family",
    name: "Семейный отдых",
    description: "Отдых с детьми и развлечения для всей семьи",
    icon: <Users className="h-10 w-10 text-travel-teal" />,
    link: "/destinations?category=family",
  },
];

const TourCategories = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="travel-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-travel-dark">Категории туров</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите тип отдыха, который подходит именно вам
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.link}
              className="group"
            >
              <Card className="h-full transition-all duration-300 group-hover:shadow-md group-hover:border-primary/20">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourCategories;