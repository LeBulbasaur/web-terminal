import "./history.scss";
import { useContext } from "react";
import { MessageContext } from "../../context/context";
import Message from "../terminal-message/Message";

function History() {
  const { state } = useContext(MessageContext);

  return (
    <div className="history__container">
      {state.history.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
}

export default History;
