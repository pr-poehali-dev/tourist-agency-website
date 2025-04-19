import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, PlaneLanding, Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="travel-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <MapPin size={24} className="text-primary" />
            <span className="text-xl font-bold text-travel-blue">ТурВояж</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={cn(
                    "px-2 py-1.5 text-sm font-medium transition-colors",
                    isActive("/") ? "text-primary" : "text-foreground/80 hover:text-primary"
                  )}>
                    Главная
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Направления</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link to="/destinations" className="flex flex-col h-full p-6 no-underline rounded-md bg-muted hover:bg-muted/80">
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Все направления
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Исследуйте все наши туристические предложения
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link to="/destinations?region=europe" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium">Европа</div>
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            Культурные и исторические туры
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/destinations?region=asia" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium">Азия</div>
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            Экзотические приключения
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/destinations?region=beach" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium">Пляжный отдых</div>
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            Лучшие курорты мира
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/plan-trip" className={cn(
                    "px-2 py-1.5 text-sm font-medium transition-colors",
                    isActive("/plan-trip") ? "text-primary" : "text-foreground/80 hover:text-primary"
                  )}>
                    Спланировать поездку
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button variant="default" size="sm" className="ml-4">
              <Search className="mr-2 h-4 w-4" />
              Поиск тура
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="travel-container py-4 space-y-4">
            <Link to="/" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
              Главная
            </Link>
            <Link to="/destinations" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
              Направления
            </Link>
            <Link to="/plan-trip" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
              Спланировать поездку
            </Link>
            <Button variant="default" size="sm" className="w-full">
              <Search className="mr-2 h-4 w-4" />
              Поиск тура
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;