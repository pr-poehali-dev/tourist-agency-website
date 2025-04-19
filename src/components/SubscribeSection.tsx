import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SubscribeSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-travel-blue to-travel-teal text-white">
      <div className="travel-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Подпишитесь на специальные предложения</h2>
          <p className="text-lg opacity-90 mb-8">
            Получайте уникальные предложения и скидки до 50% на туры по всему миру
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Ваш email" 
              className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
            />
            <Button variant="default" className="bg-white text-travel-blue hover:bg-white/90">
              Подписаться
            </Button>
          </div>
          
          <p className="text-sm opacity-80 mt-4">
            Мы не рассылаем спам. Вы можете отписаться в любой момент.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;