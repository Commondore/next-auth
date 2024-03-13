"use server";

import { authLogin } from "@/utils/api/request";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = async (prevState: any, data: FormData) => {
  const identifier = data.get("identifier") as string;
  const password = data.get("password") as string;

  try {
    const user = await authLogin({ identifier, password });

    if (user) {
      cookies().set("jwt", user.jwt, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        expires: new Date().getTime() + 20 * 1000,
      });
    }
  } catch (error) {
    return "Invalid credetials";
  }

  redirect("/");
};
