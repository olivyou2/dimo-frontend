import { redirect, type Cookies } from "@sveltejs/kit";
import { getUserProfile } from "./user";

export const checkLogin = async (cookies: Cookies) => {
    const accessToken = cookies.get("accessToken");

    if (!accessToken) {
        throw redirect(307, "/");
    }

    const user = await getUserProfile(accessToken);

    console.log(user);

    if (user?.level < 1) {
        throw redirect(307, "/");
    }
}