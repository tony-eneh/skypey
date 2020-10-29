import { Chat } from "./Chat";
import "./Chats.css";
import { store } from "../store";

// there is a little in the meaning of Chats in my UI and in the redux store
// Chats in my UI represents the discussion (chat) with one of my contacts. Hence a Chat in my UI is actually a message in the redux store

export const Chats = () => {
  const state = store.getState();
  const currentChat = state.chats.find(
    (chat) => chat.chatId === state.currentChatId
  );
  const messages = currentChat.messages;
  const activeUser = state.activeUser;
  console.log("chat members", currentChat.members);
  console.log("messages", messages);
  return (
    <div className="chats">
      {messages.map((message) =>
        message.sender === activeUser.userId ? (
          <Chat chat={message} key={message.messageId} data-user-message />
        ) : (
          <Chat chat={message} key={message.messageId} />
        )
      )}
    </div>
  );
};
