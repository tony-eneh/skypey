import "./Chat.css";

export const Chat = ({ chat, ...props }) => {
  const { text, date } = chat;
  return (
    <span className="chat" {...props}>
      <span className="chat__text">{text}</span>
      <span className="chat__time">
        {date.getHours()}:{date.getMinutes()}
      </span>
    </span>
  );
};
