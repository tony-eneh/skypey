import { Header } from "./Header";
import { Chats } from "./Chats";
import { MessageInput } from "./MessageInput";
import "./ChatWindow.css";

export const ChatWindow = () => {
  return (
    <main className="chat-window">
      <Header />
      <Chats />
      <MessageInput />
    </main>
  );
};
