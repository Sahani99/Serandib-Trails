import Carousel from "@/components/Carousel";
import CustomerReviews from "@/components/CustomerReviews";
import FeaturedTrips from "@/components/FeaturedTrips";

export default function Home() {
  return (
    <main>
      <Carousel />
      <FeaturedTrips />
      <CustomerReviews />
    </main>
  );
}
