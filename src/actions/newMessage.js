import shortid from "shortid";
import { NEW_MESSAGE } from "../constants";
import { store } from "../store";

export const newMessage = (text, currentChat) => {
  return {
    type: NEW_MESSAGE,
    payload: {
      message: {
        text,
        date: new Date().toUTCString(),
        messageId: shortid.generate(),
        sender: store.getState().activeUser.userId,
      },
      currentChat,
    },
  };
};
