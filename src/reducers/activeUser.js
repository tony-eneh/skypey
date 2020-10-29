import { getActiveUser } from "../static-data";

export const activeUser = (state = getActiveUser(), action) => state;
