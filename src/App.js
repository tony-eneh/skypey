import "./App.css";
import { Sidebar } from "./Components/Sidebar";
import { ChatWindow } from "./Components/ChatWindow";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleResize = () => {
      // create a custom property a.k.a css variable to hold the current viewport height
      document.documentElement.style.setProperty(
        "--vh100",
        `${window.innerHeight}px`
      );
    };

    // add resize event listener
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
  });

  return (
    <div className="app">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

export default App;
