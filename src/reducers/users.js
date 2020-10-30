import { getUsers } from "../static-data";

export const users = (state = getUsers(), action) => state;
