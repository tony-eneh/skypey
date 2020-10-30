import "./Header.css";
import { store } from "../store";

export const Header = () => {
  const state = store.getState();
  console.log("state from inside Header", state);
  const currentChat = state.chats.find(
    (chat) => chat.chatId === state.currentChatId
  );
  const chatPartnerId = currentChat.members[0];
  const chatPartner = state.users.find((user) => user.userId === chatPartnerId);

  const { name, profilePic, status } = chatPartner;
  return (
    <header className="header">
      <img className="header__img" src={profilePic} alt={name} />
      <h1 className="header__name">{name}</h1>
      <p className="header__status">{status}</p>
    </header>
  );
};
