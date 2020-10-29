import { SET_CURRENT_CHAT } from "../constants";

export const currentChatId = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_CHAT:
      console.log("current chat Id changed to", action.payload.chatId);
      return action.payload.chatId;
    default:
      return state;
  }
};
