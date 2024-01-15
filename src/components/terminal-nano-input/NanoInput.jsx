import "./nano-input.scss";
import { MessageContext } from "../../context/context";
import { useState, useRef, useEffect, useContext } from "react";
import { HandleNANOInitial, HandleNANOChange } from "../../methods/HandleNANO";

function NanoInput() {
  const { state, dispatch } = useContext(MessageContext);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const savedRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.value = await HandleNANOInitial(state, dispatch);
      }
    };
    init();
  }, []);

  useEffect(() => {
    const handleKeyDown = async (e) => {
      if (e.ctrlKey && e.key === "x") {
        e.preventDefault();
        dispatch({
          type: "SET_NANO_MODE",
          payload: false,
        });
        setInput("");
      } else if (e.ctrlKey && e.key === "o") {
        e.preventDefault();
        HandleNANOChange(inputRef.current.value, state, dispatch, savedRef);
      }
    };

    // focus on input
    const handleClick = () => {
      inputRef.current?.focus();
    };
    // add click event listener to document so that it always focuses on input
    document.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input, dispatch]);

  return (
    <div className="nano__container">
      <div className="nano__header">
        <div className="nano__header__left">
          <div className="nano__header__left__text">GNU nano 2.9.3</div>
        </div>
        <div className="nano__header__right">
          <div className="nano__header__right__text">Modified</div>
        </div>
      </div>
      <textarea
        className="nano__input"
        type="text"
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="nano__footer">
        <div className="nano__footer__top" ref={savedRef}>
          [Saved]
        </div>
        <div className="nano__footer__bottom">
          <div className="nano__footer__text">
            <span className="nano__footer__shortcut">^O</span> Write Out
          </div>
          <div className="nano__footer__text">
            <span className="nano__footer__shortcut">^X</span> Exit
          </div>
        </div>
      </div>
    </div>
  );
}

export default NanoInput;
