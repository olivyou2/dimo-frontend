import { redirect, type Cookies } from "@sveltejs/kit";

/**
 * 
 * @param cookies 
 * @returns userId
 */
export const checkLogin = (cookies: Cookies): string => {
    const userId = cookies.get("uesrId");

    const admins = [1, 2, 102];

    if (!userId || !admins.includes(parseInt(userId))) {
        console.log("throw")
        throw redirect(307, "/");
    }

    return userId;
}