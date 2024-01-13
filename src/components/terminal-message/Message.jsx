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
      <span className={`message__${type}`}>{text}</span>
    </div>
  );
}

export default Message;
