import { serialize } from "cookie";

export const makeCookie = (message: string) => {
  const expire = new Date();
  expire.setHours(expire.getMinutes() + 10);

  const messageId = serialize("messageId", message, {
    httpOnly: true,
    path: "/",
    expires: expire,
    sameSite: "strict",
  });
  return messageId;
};
