import "./message.scss";

function Message({ message }) {
  // destructuring message object
  const { text, type, origin } = message;

  return (
    <div className="message__text">
      {origin === "user" ? (
        <span className="message__prefix">
          <span className="message__prefix__tilde">~ </span>
          <span className="message__prefix__mark">&gt;</span>
        </span>
      ) : null}
      <div className={`message_${type}`}>
        <span className="message__input__text">&nbsp;{text}</span>
      </div>
    </div>
  );
}

export default Message;
