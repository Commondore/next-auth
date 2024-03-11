import { RestaurantItemResponse, RestaurantsResponse } from "@/types/restaurants";
import ky from "ky";

const strapi = ky.create({ prefixUrl: process.env.STRAPI });

export const fetchRestaurants = (): Promise<RestaurantsResponse> => {
  return strapi.get("restaurants").json();
};

export const fetchRestaurantById = (id: number): Promise<RestaurantItemResponse> => {
  return strapi.get(`restaurants/${id}?populate=photo`).json();
};
