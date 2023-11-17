import "./input.scss";
import { useState, useRef, useEffect } from "react";

function Input() {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        console.log(inputRef.current.value);
        setInput("");
      }
    };
    inputRef.current.style.height = "auto";
    inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    inputRef.current?.addEventListener("keydown", handleKeyDown);
    const handleClick = () => {
      inputRef.current?.focus();
    };

    document.addEventListener("click", handleClick);
    return () => {
      inputRef.current?.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);

  return (
    <div className="input__container">
      <div className="input__text">
        <span className="input__prefix">
          <span className="input__prefix__tilde">~ </span>
          <span className="input__prefix__mark">&gt;</span>
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
