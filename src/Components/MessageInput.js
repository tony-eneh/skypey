import { store } from "../store";
import "./MessageInput.css";
import { newMessage } from "../actions";
import { createRef } from "react";

export const MessageInput = () => {
  const inputRef = createRef();

  const handleSubmit = (e) => {
    // prevent page reloading
    e.preventDefault();

    console.log("form value", e.target.value);
    console.log("inputRef.current.value", inputRef.current.value);

    //   find the currently opened chat using its id
    const state = store.getState();
    const currentChat = state.chats.find(
      (chat) => chat.chatId === state.currentChatId
    );
    const _newMessage = newMessage(inputRef.current.value, currentChat);
    console.log("newly created message before dispatching", _newMessage);

    // send typed message to store
    store.dispatch(_newMessage);

    // clear input field
    inputRef.current.value = "";
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <input ref={inputRef} placeholder="type a message here..." />
    </form>
  );
};
