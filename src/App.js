import "./App.css";
import { Sidebar } from "./Components/Sidebar";
import { ChatWindow } from "./Components/ChatWindow";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

export default App;
