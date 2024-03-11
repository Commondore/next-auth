import { StrapiResponse } from "@/types";

export interface IRestaurant {
  id: number;
  title: string;
  description: string;
  averageBill: number;
  content: Content[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  photo: any;
}

export interface Content {
  type: string;
  children: Children[];
}

export interface Children {
  type: string;
  text: string;
}

export type RestaurantsResponse = StrapiResponse<IRestaurant[]>;
export type RestaurantItemResponse = StrapiResponse<IRestaurant>;
