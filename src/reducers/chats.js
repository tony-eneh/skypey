import { getChats } from "../static-data";
import { NEW_MESSAGE } from "../constants";

export const chats = (state = getChats(), action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      console.log("you tried posting a new message", action.payload.text);

      // make a deep copy of the state so you don't mutate the original
      const newChats = JSON.parse(JSON.stringify(state));

      // find the currently opened chat using its id
      const currentChat = newChats.find(
        (chat) => chat.chatId === action.payload.currentChat.chatId
      );

      //   add new message
      currentChat.messages.push(action.payload.message);

      return newChats;
    default:
      return state;
  }
};
