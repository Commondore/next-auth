import { RestaurantItemResponse, RestaurantsResponse } from "@/types/restaurants";
import { IAuthUser, ICredentials } from "@/types/user";
import ky from "ky";

const strapi = ky.create({ prefixUrl: process.env.STRAPI });

export const fetchRestaurants = (): Promise<RestaurantsResponse> => {
  return strapi.get("restaurants").json();
};

export const fetchRestaurantById = (id: number): Promise<RestaurantItemResponse> => {
  return strapi.get(`restaurants/${id}?populate=photo`).json();
};

export const authLogin = (credentials: ICredentials): Promise<IAuthUser> => {
  return strapi.post("auth/local", { json: credentials }).json();
};
