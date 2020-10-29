import "./Contact.css";
import { store } from "../store";
import { setCurrentChat } from "../actions";

export const Contact = ({ contact }) => {
  const { profilePic, name, status, userId } = contact;

  // find the chat in my redux store which has this contact as a member.
  // this code is working on the assumption that only one chat should have this contact as a member
  // TODO: rewrite the code when you introduce group chats, because the assumption will no longer hold
  const chatWithContact = store
    .getState()
    .chats.find((chat) => chat.members.includes(userId));

  const handleChatOpen = (e) => {
    store.dispatch(setCurrentChat(chatWithContact.chatId));
  };
  return (
    <div className="contact" onClick={handleChatOpen}>
      <img src={profilePic} alt={name} className="contact__img" />
      <div className="contact__details">
        <p className="contact__details-name">{name}</p>
        <p className="contact__details-status">{status}</p>
      </div>
    </div>
  );
};
