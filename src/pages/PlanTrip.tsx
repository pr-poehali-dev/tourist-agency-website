import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Plane, 
  Home, 
  Utensils, 
  CheckCircle2, 
  ArrowRight, 
  Palmtree, 
  Mountain, 
  Ticket
} from "lucide-react";

const PlanTrip = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [tripType, setTripType] = useState("preset");
  
  // Переход на следующий шаг
  const goToNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Переход на предыдущий шаг
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="pb-16">
      <div className="bg-travel-blue text-white py-16">
        <div className="travel-container">
          <h1 className="text-3xl font-bold mb-4">Спланируйте свою поездку</h1>
          <p className="text-lg opacity-90 max-w-3xl">
            Создайте индивидуальное путешествие с нашей помощью. Выберите направление, тип отдыха и другие параметры, а мы подберем оптимальный вариант для вас.
          </p>
        </div>
      </div>

      <div className="travel-container py-8">
        <div className="max-w-4xl mx-auto">
          {/* Прогресс */}
          <div className="mb-8">
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                }`}>
                  1
                </div>
                <p className="mt-2 text-sm">Параметры</p>
              </div>
              <div className="flex-1 flex items-center mx-4">
                <div className={`h-1 w-full ${
                  currentStep >= 2 ? "bg-primary" : "bg-gray-200"
                }`}></div>
              </div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                }`}>
                  2
                </div>
                <p className="mt-2 text-sm">Детали</p>
              </div>
              <div className="flex-1 flex items-center mx-4">
                <div className={`h-1 w-full ${
                  currentStep >= 3 ? "bg-primary" : "bg-gray-200"
                }`}></div>
              </div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 3 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                }`}>
                  3
                </div>
                <p className="mt-2 text-sm">Контакты</p>
              </div>
            </div>
          </div>

          <Card className="border-none shadow-md">
            <CardContent className="p-8">
              {/* Шаг 1: Основные параметры */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Выберите тип поездки</h2>
                    
                    <RadioGroup 
                      defaultValue={tripType} 
                      onValueChange={setTripType}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div className="relative">
                        <RadioGroupItem 
                          value="preset" 
                          id="preset" 
                          className="peer sr-only" 
                        />
                        <Label 
                          htmlFor="preset" 
                          className="flex flex-col gap-2 border-2 rounded-lg p-6 cursor-pointer peer-data-[state=checked]:border-primary"
                        >
                          <div className="flex justify-between">
                            <span className="text-lg font-medium">Готовый тур</span>
                            <div className="bg-primary/10 rounded-full p-2">
                              <Ticket className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                          <p className="text-muted-foreground">
                            Выберите один из наших готовых туров с фиксированной программой
                          </p>
                        </Label>
                      </div>
                      
                      <div className="relative">
                        <RadioGroupItem 
                          value="custom" 
                          id="custom" 
                          className="peer sr-only" 
                        />
                        <Label 
                          htmlFor="custom" 
                          className="flex flex-col gap-2 border-2 rounded-lg p-6 cursor-pointer peer-data-[state=checked]:border-primary"
                        >
                          <div className="flex justify-between">
                            <span className="text-lg font-medium">Индивидуальный тур</span>
                            <div className="bg-primary/10 rounded-full p-2">
                              <Users className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                          <p className="text-muted-foreground">
                            Создайте уникальное путешествие по вашим предпочтениям
                          </p>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-2">Куда бы вы хотели поехать?</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label>Направление</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                          <Input className="pl-10" placeholder="Страна или город" />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Label>Тип отдыха</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите тип отдыха" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beach">
                              <div className="flex items-center">
                                <Palmtree className="h-4 w-4 mr-2" />
                                <span>Пляжный отдых</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="excursion">
                              <div className="flex items-center">
                                <Ticket className="h-4 w-4 mr-2" />
                                <span>Экскурсионный тур</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="adventure">
                              <div className="flex items-center">
                                <Mountain className="h-4 w-4 mr-2" />
                                <span>Приключенческий тур</span>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label>Даты поездки</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                        <Input className="pl-10" placeholder="Примерные даты" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Количество человек</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                        <Input className="pl-10" type="number" placeholder="Количество путешественников" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button onClick={goToNextStep} className="px-8">
                      Далее
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Шаг 2: Детали поездки */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Детали поездки</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-3">
                        <Label>Бюджет на человека</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите бюджет" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="economy">До 50 000 ₽</SelectItem>
                            <SelectItem value="standard">50 000 - 100 000 ₽</SelectItem>
                            <SelectItem value="premium">100 000 - 150 000 ₽</SelectItem>
                            <SelectItem value="luxury">Свыше 150 000 ₽</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-3">
                        <Label>Продолжительность</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите длительность" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="short">3-5 дней</SelectItem>
                            <SelectItem value="medium">6-9 дней</SelectItem>
                            <SelectItem value="long">10-14 дней</SelectItem>
                            <SelectItem value="extended">Более 14 дней</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <Label>Тип размещения</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="relative">
                          <RadioGroupItem 
                            value="hotel" 
                            id="hotel" 
                            className="peer sr-only" 
                          />
                          <Label 
                            htmlFor="hotel" 
                            className="flex flex-col items-center gap-2 border-2 rounded-lg p-4 cursor-pointer peer-data-[state=checked]:border-primary text-center"
                          >
                            <Home className="h-6 w-6 text-primary" />
                            <span className="font-medium">Отель</span>
                          </Label>
                        </div>
                        
                        <div className="relative">
                          <RadioGroupItem 
                            value="apartment" 
                            id="apartment" 
                            className="peer sr-only" 
                          />
                          <Label 
                            htmlFor="apartment" 
                            className="flex flex-col items-center gap-2 border-2 rounded-lg p-4 cursor-pointer peer-data-[state=checked]:border-primary text-center"
                          >
                            <Home className="h-6 w-6 text-primary" />
                            <span className="font-medium">Апартаменты</span>
                          </Label>
                        </div>
                        
                        <div className="relative">
                          <RadioGroupItem 
                            value="any" 
                            id="any" 
                            className="peer sr-only" 
                          />
                          <Label 
                            htmlFor="any" 
                            className="flex flex-col items-center gap-2 border-2 rounded-lg p-4 cursor-pointer peer-data-[state=checked]:border-primary text-center"
                          >
                            <Home className="h-6 w-6 text-primary" />
                            <span className="font-medium">Любой</span>
                          </Label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Включить в тур</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Switch id="flight" />
                          <Label htmlFor="flight" className="flex items-center">
                            <Plane className="h-4 w-4 mr-2" />
                            <span>Авиаперелет</span>
                          </Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Switch id="transfers" />
                          <Label htmlFor="transfers">Трансферы</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Switch id="insurance" />
                          <Label htmlFor="insurance">Страховка</Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Switch id="meals" />
                          <Label htmlFor="meals">
                            <Utensils className="h-4 w-4 mr-2 inline-block" />
                            <span>Питание</span>
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <Label>Особые пожелания</Label>
                    <Textarea 
                      placeholder="Расскажите о ваших предпочтениях, интересах или других деталях, которые помогут нам подобрать идеальный тур"
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <div className="pt-4 flex justify-between">
                    <Button variant="outline" onClick={goToPreviousStep}>
                      Назад
                    </Button>
                    <Button onClick={goToNextStep} className="px-8">
                      Продолжить
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Шаг 3: Контактная информация */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Ваши контактные данные</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-3">
                        <Label htmlFor="name">Имя</Label>
                        <Input id="name" placeholder="Введите ваше имя" />
                      </div>
                      
                      <div className="space-y-3">
                        <Label htmlFor="surname">Фамилия</Label>
                        <Input id="surname" placeholder="Введите вашу фамилию" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-3">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Введите ваш email" />
                      </div>
                      
                      <div className="space-y-3">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <Label htmlFor="contact-method">Предпочтительный способ связи</Label>
                      <Select>
                        <SelectTrigger id="contact-method">
                          <SelectValue placeholder="Выберите способ связи" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Телефон</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          <SelectItem value="telegram">Telegram</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-6">
                      <Switch id="consent" />
                      <Label htmlFor="consent" className="text-sm text-muted-foreground">
                        Я согласен на обработку персональных данных и принимаю условия пользовательского соглашения
                      </Label>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-between">
                    <Button variant="outline" onClick={goToPreviousStep}>
                      Назад
                    </Button>
                    <Button className="px-8">
                      Отправить заявку
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Информация о процессе */}
          <div className="mt-8 bg-muted rounded-lg p-6">
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-primary mt-1 mr-4" />
              <div>
                <h3 className="font-semibold mb-2">Что будет после отправки заявки?</h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li>1. Наш менеджер свяжется с вами в течение 24 часов</li>
                  <li>2. Мы подберем несколько вариантов туров, исходя из ваших пожеланий</li>
                  <li>3. Вы выбираете подходящий вариант, и мы организуем вашу поездку</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;