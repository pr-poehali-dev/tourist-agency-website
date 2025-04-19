import HeroSection from "@/components/HeroSection";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import TourCategories from "@/components/TourCategories";
import Testimonials from "@/components/Testimonials";
import SubscribeSection from "@/components/SubscribeSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedDestinations />
      <TourCategories />
      <Testimonials />
      <SubscribeSection />
    </div>
  );
};

export default Home;