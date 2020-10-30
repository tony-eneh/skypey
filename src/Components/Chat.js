import "./Chat.css";

export const Chat = ({ chat, ...props }) => {
  const { text, date } = chat;
  return (
    <span className="chat" {...props}>
      <span className="chat__text">{text}</span>
      <span className="chat__time">
        {/* parse the date string to object before extracting the hours and minutes */}
        {new Date(date).getHours()}:{new Date(date).getMinutes()}
      </span>
    </span>
  );
};
