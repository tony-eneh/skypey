import { combineReducers } from "redux";
import { currentChatId } from "./currentChatId";
import { chats } from "./chats";
import { users } from "./users";
import { activeUser } from "./activeUser";
import { typing } from "./typing";

export const reducer = combineReducers({
  typing,
  users,
  chats,
  activeUser,
  currentChatId,
});
