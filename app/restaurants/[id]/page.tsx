import { fetchRestaurantById } from "@/utils/api/request";
import Image from "next/image";

export default async function RestaurantPage({ params }: { params: any }) {
  const restID = parseInt(params.id);
  const { data: restaurant } = await fetchRestaurantById(restID);
  console.log(restaurant);

  return (
    <div>
      <h1>Name: {restaurant.title}</h1>
      <p>Average Bill: {restaurant.averageBill}</p>
      <Image
        className="image"
        src={`http://localhost:1337${restaurant?.photo?.url}`}
        alt="Next js"
        width={500}
        height={700}
      />
    </div>
  );
}
