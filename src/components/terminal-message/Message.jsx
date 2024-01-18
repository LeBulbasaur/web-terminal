import "./message.scss";

function Message({ message }) {
  // destructuring message object
  const { text, type, origin, path } = message;

  return (
    <div className="message__text">
      {origin === "user" ? (
        <div className="message__prefix">
          <span className="message__prefix__tilde">~{path} </span>
          <span className="message__prefix__mark">&gt;</span>
        </div>
      ) : null}
      {type === "link" ? (
        <a
          className={`message__${type}`}
          href={text}
          target="_blank"
          rel="noreferrer"
        >
          {text.split("/")[text.split("/").length - 1]}
        </a>
      ) : (
        <span className={`message__${type}`}>{text}</span>
      )}
    </div>
  );
}

export default Message;
