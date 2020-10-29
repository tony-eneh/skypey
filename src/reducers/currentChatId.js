import { SET_CURRENT_CHAT } from "../constants";

export const currentChatId = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_CHAT:
      return action.payload.chatId;
    default:
      return state;
  }
};
