import "./input.scss";
import { MessageContext } from "../../context/context";
import { useState, useRef, useEffect, useContext } from "react";

function Input() {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(MessageContext);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();

        // save command to history
        if (inputRef.current.value === "clear") {
          dispatch({
            type: "CLEAR_HISTORY",
          });
        } else {
          dispatch({
            type: "ADD_TO_HISTORY",
            payload: {
              text: inputRef.current.value,
              type: "output",
              origin: "user",
            },
          });
        }

        // clear input
        setInput("");
      }
    };
    // reset height of input
    inputRef.current.style.height = "auto";

    // set height of input to match height of text
    inputRef.current.style.height = inputRef.current.scrollHeight + "px";

    // add event listener for keys
    inputRef.current?.addEventListener("keydown", handleKeyDown);

    // define handleClick function which focuses on input
    const handleClick = () => {
      inputRef.current?.focus();
    };
    // add click event listener to document so that it always focuses on input
    document.addEventListener("click", handleClick);
    return () => {
      inputRef.current?.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);

  return (
    <div className="input__container">
      <div className="input__text">
        <span className="message__prefix">
          <span className="message__prefix__tilde">~ </span>
          <span className="message__prefix__mark">&gt;</span>
        </span>
      </div>
      <textarea
        className="input__input"
        type="text"
        rows={1}
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default Input;
