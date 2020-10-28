import "./Header.css";
import { store } from "../store";

export const Header = () => {
  // header area currently displays details of active user which can be deceiving
  // TODO: use header to display info of current chat partner or group chat info(for group chats)
  const { name, profilePic, status } = store.getState().activeUser;
  return (
    <header className="header">
      <img className="header__img" src={profilePic} alt={name} />
      <h1 className="header__name">{name}</h1>
      <p className="header__status">{status}</p>
    </header>
  );
};
