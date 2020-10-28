import { Contact } from "./Contact";
import "./Sidebar.css";
import { store } from "../store";

export const Sidebar = () => {
  const contacts = store.getState().users;
  return (
    <aside className="sidebar">
      {contacts.map((contact) => (
        <Contact contact={contact} key={contact.userId} />
      ))}
    </aside>
  );
};
