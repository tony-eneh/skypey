import { Contact } from "./Contact";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Contact />
      <Contact />
      <Contact />
    </aside>
  );
};
