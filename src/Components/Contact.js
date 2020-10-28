import "./Contact.css";

export const Contact = ({ contact }) => {
  const { profilePic, name, status } = contact;
  return (
    <div className="contact">
      <img src={profilePic} alt={name} className="contact__img" />
      <div className="contact__details">
        <p className="contact__details-name">{name}</p>
        <p className="contact__details-status">{status}</p>
      </div>
    </div>
  );
};
