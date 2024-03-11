import { IRestaurant } from "@/types/restaurants";
import Link from "next/link";

interface RestaurantsListProps {
  restaurants: IRestaurant[];
}

const RestaurantsList = ({ restaurants }: RestaurantsListProps) => {
  return (
    <ul>
      {restaurants.map((restaurant) => {
        return (
          <li key={restaurant.id}>
            <Link href={`/restaurants/${restaurant.id}`}>{restaurant.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default RestaurantsList;
