import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8 flex justify-center">
          <div className="bg-primary/10 p-4 rounded-full">
            <MapPin className="h-16 w-16 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Страница не найдена</h2>
        <p className="text-muted-foreground mb-8">
          Похоже, вы заблудились. Страница, которую вы ищете, не существует или была перемещена.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/">
              Вернуться на главную
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/destinations">
              Посмотреть направления
            </Link>
          </Button>
        </div>
        <img
          src="/4x/lost-traveler.jpg"
          alt="Заблудившийся путешественник"
          className="mt-12 rounded-lg w-full"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
      </div>
    </div>
  );
};

export default NotFound;