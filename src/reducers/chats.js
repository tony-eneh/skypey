import { getChats } from "../static-data";

export const chats = (state = getChats(), action) => state;
