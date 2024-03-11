import Restaurants from "@/components/Restaurants";
import { Suspense } from "react";

export const revalidate = 5;

export default async function RestaurantsPage() {
  return (
    <>
      <h1>Список ресторанов</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Restaurants />
      </Suspense>
    </>
  );
}
