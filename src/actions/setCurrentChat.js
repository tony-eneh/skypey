import { SET_CURRENT_CHAT } from "../constants";

export const setCurrentChat = (chatId) => {
  return {
    type: SET_CURRENT_CHAT,
    payload: { chatId },
  };
};
