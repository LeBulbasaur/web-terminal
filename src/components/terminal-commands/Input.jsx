import "./input.scss";
import { MessageContext } from "../../context/context";
import { useState, useRef, useEffect, useContext } from "react";

function Input() {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(MessageContext);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = async (e) => {
      if (e.key === "Enter") {
        e.preventDefault();

        // save command to history
        switch (inputRef.current.value) {
          case "clear":
            dispatch({
              type: "CLEAR_HISTORY",
            });
            break;
          case "ls":
            dispatch({
              type: "ADD_TO_HISTORY",
              payload: {
                text: inputRef.current.value,
                type: "output",
                origin: "user",
              },
            });

            await fetch("http://localhost:5277/systemobject", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                dispatch({
                  type: "ADD_TO_HISTORY",
                  payload: {
                    text: inputRef.current.value,
                    type: "output",
                    origin: "server",
                  },
                });
              })
              .catch((err) => {
                console.log(err);
                dispatch({
                  type: "ADD_TO_HISTORY",
                  payload: {
                    text: `${err}!`,
                    type: "error",
                    origin: "server",
                  },
                });
              });
            break;
          default:
            dispatch({
              type: "ADD_TO_HISTORY",
              payload: {
                text: inputRef.current.value,
                type: "output",
                origin: "user",
              },
            });
            break;
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
