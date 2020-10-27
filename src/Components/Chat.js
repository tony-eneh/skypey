import "./Chat.css";

export const Chat = (props) => {
  return (
    <span className="chat" {...props}>
      <span className="chat__text">Hello Niggi</span>
      <span className="chat__time">03:15pm</span>
    </span>
  );
};
