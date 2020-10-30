import { SET_CURRENT_CHAT } from "../constants";
import { getCurrentChatId } from "../static-data";

export const currentChatId = (state = getCurrentChatId(), action) => {
  switch (action.type) {
    case SET_CURRENT_CHAT:
      console.log("current chat Id changed to", action.payload.chatId);
      return action.payload.chatId;
    default:
      return state;
  }
};
