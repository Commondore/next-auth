import RestaurantsList from "@/components/Restaurants/RestaurantsList";
import { fetchRestaurants } from "@/utils/api/request";

const Restaurants = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await fetchRestaurants();
  return <RestaurantsList restaurants={data.data} />;
};

export default Restaurants;
