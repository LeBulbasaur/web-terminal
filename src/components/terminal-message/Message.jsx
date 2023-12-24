import "./message.scss";

function Message({ message }) {
  // destructuring message object
  const { text, type, origin } = message;

  return (
    <div className="message__text">
      {origin === "user" ? (
        <div className="message__prefix">
          <span className="message__prefix__tilde">~ </span>
          <span className="message__prefix__mark">&gt;</span>
        </div>
      ) : null}
      <div className={`message_${type}`}>
        <span className="message__input__text">{text}</span>
      </div>
    </div>
  );
}

export default Message;
