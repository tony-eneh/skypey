import { Chat } from "./Chat";
import "./Chats.css";

export const Chats = () => {
  return (
    <div className="chats">
      <Chat />
      <Chat data-user-message />
      <Chat />
    </div>
  );
};
