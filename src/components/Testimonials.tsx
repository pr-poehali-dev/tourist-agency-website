import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  location: string;
  rating: number;
  text: string;
  tour: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Анна Смирнова",
    avatar: undefined,
    location: "Москва",
    rating: 5,
    text: "Невероятное путешествие! Всё было организовано на высшем уровне. Отель, экскурсии, трансферы - всё точно по расписанию и с комфортом. Обязательно буду обращаться еще!",
    tour: "Экскурсионный тур по Италии",
  },
  {
    id: "2",
    name: "Максим Петров",
    avatar: undefined,
    location: "Санкт-Петербург",
    rating: 5,
    text: "Отдых превзошел все ожидания! Прекрасный отель с видом на море, вкусная еда, интересные экскурсии. Менеджер всегда был на связи и помогал решать любые вопросы.",
    tour: "Пляжный отдых в Турции",
  },
  {
    id: "3",
    name: "Елена Козлова",
    avatar: undefined,
    location: "Екатеринбург",
    rating: 4,
    text: "Очень понравилась организация тура, особенно насыщенная экскурсионная программа. Единственный минус - не хватило свободного времени. В целом, отличное путешествие!",
    tour: "Культурный тур по Франции",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="travel-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-travel-dark">Отзывы наших путешественников</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Более 10 000 довольных клиентов уже выбрали наши туры для своих незабываемых путешествий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full border-none shadow-md">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    {testimonial.avatar ? (
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    ) : (
                      <AvatarFallback className="bg-primary text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4 flex-grow">{testimonial.text}</p>
                
                <div className="mt-auto">
                  <p className="text-sm font-medium">Тур: {testimonial.tour}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;