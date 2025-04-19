import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Star, 
  Check, 
  Utensils, 
  Wifi, 
  Home, 
  Car, 
  Sun 
} from "lucide-react";

// Мок-данные для тура
const tourData = {
  id: "paris",
  name: "Париж: Город любви и искусства",
  location: "Франция",
  images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  description: "Париж – один из самых посещаемых городов мира, настоящая столица романтики, искусства и гастрономии. Этот город очаровывает своей элегантностью, богатой историей и уникальной атмосферой, которую невозможно найти больше нигде.",
  price: 65000,
  duration: 7,
  rating: 4.8,
  reviews: 234,
  features: [
    "Посещение Эйфелевой башни с гидом",
    "Билеты в Лувр и другие музеи",
    "Круиз по Сене",
    "Экскурсия в Версаль",
    "Дегустация французских вин",
    "Прогулка по Монмартру",
  ],
  itinerary: [
    {
      day: 1,
      title: "Прибытие в Париж",
      description: "Встреча в аэропорту, трансфер в отель. Свободное время для отдыха. Вечерняя обзорная экскурсия по городу."
    },
    {
      day: 2,
      title: "Эйфелева башня и круиз по Сене",
      description: "Посещение знаменитой Эйфелевой башни с подъемом на смотровую площадку. После обеда – романтический круиз по реке Сене."
    },
    {
      day: 3,
      title: "Лувр и Латинский квартал",
      description: "Экскурсия в Лувр с профессиональным гидом. Свободное время. Вечером – прогулка по атмосферному Латинскому кварталу."
    },
    {
      day: 4,
      title: "Версаль",
      description: "Поездка в Версаль. Экскурсия по дворцу и садам. Возвращение в Париж. Свободное время."
    },
    {
      day: 5,
      title: "Монмартр и Сакре-Кёр",
      description: "Экскурсия по богемному кварталу Монмартр. Посещение базилики Сакре-Кёр. Свободное время для посещения кафе и магазинов."
    },
    {
      day: 6,
      title: "Дегустация вин и шоппинг",
      description: "Дегустация французских вин с сомелье. После обеда – свободное время для шоппинга на Елисейских полях."
    },
    {
      day: 7,
      title: "Отъезд",
      description: "Свободное время. Трансфер в аэропорт. Вылет."
    }
  ],
  accommodation: {
    name: "Hôtel Le Parisien",
    type: "4-звездочный отель",
    location: "Центр Парижа, 5 минут пешком до метро",
    features: ["Wi-Fi", "Завтрак включен", "Кондиционер", "Бар и ресторан"]
  },
  faq: [
    {
      question: "Что включено в стоимость тура?",
      answer: "В стоимость включено: авиаперелет, проживание в отеле 4*, завтраки, трансферы, экскурсии по программе с русскоговорящим гидом, медицинская страховка."
    },
    {
      question: "Нужна ли виза?",
      answer: "Да, для посещения Франции требуется шенгенская виза. Мы оказываем визовую поддержку нашим клиентам."
    },
    {
      question: "Какой размер группы?",
      answer: "Группы небольшие, до 15 человек, что позволяет обеспечить комфорт и индивидуальный подход к каждому туристу."
    }
  ]
};

const TourDetails = () => {
  const { id } = useParams();
  
  // В реальном приложении здесь был бы запрос к API для получения данных тура по ID
  // const tour = useTour(id);
  const tour = tourData; // Используем мок-данные для примера
  
  if (!tour) {
    return <div className="travel-container py-16 text-center">Тур не найден</div>;
  }

  return (
    <div className="pb-16">
      {/* Верхний баннер */}
      <div className="bg-travel-blue text-white py-16">
        <div className="travel-container">
          <h1 className="text-3xl font-bold mb-2">{tour.name}</h1>
          <div className="flex items-center space-x-2 mb-4">
            <MapPin size={18} />
            <span>{tour.location}</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>{tour.duration} дней</span>
            </div>
            <div className="flex items-center">
              <Users size={18} className="mr-2" />
              <span>Группа до 15 человек</span>
            </div>
            <div className="flex items-center">
              <Star size={18} className="mr-2 fill-amber-400 text-amber-400" />
              <span>{tour.rating} ({tour.reviews} отзывов)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="travel-container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Основная информация */}
          <div className="lg:col-span-2">
            {/* Галерея */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tour.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`rounded-lg overflow-hidden ${
                      index === 0 ? "md:col-span-2 md:row-span-2" : ""
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${tour.name} - изображение ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Табы с информацией */}
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="overview">Обзор</TabsTrigger>
                <TabsTrigger value="itinerary">Программа тура</TabsTrigger>
                <TabsTrigger value="accommodation">Проживание</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Описание</h2>
                  <p className="text-muted-foreground">
                    {tour.description}
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Что включено</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {tour.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mt-0.5 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="itinerary" className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Программа тура</h2>
                <div className="space-y-4">
                  {tour.itinerary.map((day) => (
                    <Card key={day.day} className="border-none shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                            {day.day}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{day.title}</h3>
                            <p className="text-muted-foreground">{day.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="accommodation" className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Проживание</h2>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{tour.accommodation.name}</h3>
                    <p className="text-muted-foreground mb-1">{tour.accommodation.type}</p>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin size={16} className="mr-1" />
                      <span>{tour.accommodation.location}</span>
                    </div>
                    
                    <h4 className="font-medium mb-2">Удобства отеля:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {tour.accommodation.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          {feature.includes("Wi-Fi") ? (
                            <Wifi className="h-4 w-4 text-primary mr-2" />
                          ) : feature.includes("Завтрак") ? (
                            <Utensils className="h-4 w-4 text-primary mr-2" />
                          ) : feature.includes("Кондиционер") ? (
                            <Sun className="h-4 w-4 text-primary mr-2" />
                          ) : (
                            <Home className="h-4 w-4 text-primary mr-2" />
                          )}
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="faq" className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Часто задаваемые вопросы</h2>
                <Accordion type="single" collapsible className="w-full">
                  {tour.faq.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Боковая панель с ценой и бронированием */}
          <div className="lg:col-span-1">
            <Card className="border-none shadow-lg sticky top-24">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Цена за человека от</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{tour.price.toLocaleString()} ₽</span>
                    <span className="text-muted-foreground ml-2">/ человека</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium">{tour.duration} дней / {tour.duration - 1} ночей</p>
                      <p className="text-sm text-muted-foreground">Продолжительность</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium">до 15 человек</p>
                      <p className="text-sm text-muted-foreground">Размер группы</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Car className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium">Включены</p>
                      <p className="text-sm text-muted-foreground">Трансферы</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 space-y-4">
                  <Button className="w-full" size="lg">
                    Забронировать
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Запросить консультацию
                  </Button>
                </div>
                
                <p className="text-sm text-center text-muted-foreground">
                  Бесплатная отмена бронирования за 30 дней до начала тура
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;