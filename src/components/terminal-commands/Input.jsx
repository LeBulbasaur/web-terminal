import "./input.scss";
import { MessageContext } from "../../context/context";
import { useState, useRef, useEffect, useContext } from "react";
import HandleSetFiles from "../../methods/HandleSetFiles";
import HandleHELP from "../../methods/HandleHELP";
import HandleCLEAR from "../../methods/HandleCLEAR";
import HandleLS from "../../methods/HandleLS";
import HandleUndefined from "../../methods/HandleUndefined";
import HandleCD from "../../methods/HandleCD";
import HandleMV from "../../methods/HandleMV";
import { HandleMKDIR, HandleRMDIR } from "../../methods/HandleDIR";
import { HandleTOUCH, HandleRM, HandleCAT } from "../../methods/HandleTXT";
import { HandleNANO } from "../../methods/HandleNANO";

function Input() {
  const [input, setInput] = useState("");
  const { state, dispatch } = useContext(MessageContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    async function init() {
      await HandleSetFiles(dispatch);
    }
    init();
  }, []);

  useEffect(() => {
    const handleKeyDown = async (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        dispatch({
          type: "ADD_COMMAND",
          payload: { text: input },
        });

        await HandleSetFiles(dispatch);

        // save command to history based on input
        switch (inputRef.current.value.split(" ")[0]) {
          case "clear":
            HandleCLEAR(inputRef.current.value, dispatch);
            break;
          case "help":
            HandleHELP(dispatch);
            break;
          case "ls":
            HandleLS(inputRef.current.value, state, dispatch);
            break;
          case "cd":
            HandleCD(inputRef.current.value, state, dispatch);
            break;
          case "mkdir":
            HandleMKDIR(inputRef.current.value, state, dispatch);
            break;
          case "rmdir":
            HandleRMDIR(inputRef.current.value, state, dispatch);
            break;
          case "touch":
            HandleTOUCH(inputRef.current.value, state, dispatch);
            break;
          case "rm":
            HandleRM(inputRef.current.value, state, dispatch);
            break;
          case "cat":
            HandleCAT(inputRef.current.value, state, dispatch);
            break;
          case "nano":
            HandleNANO(inputRef.current.value, dispatch);
            break;
          case "mv":
            HandleMV(inputRef.current.value, state, dispatch);
            break;
          default:
            HandleUndefined(inputRef.current.value, dispatch);
            break;
        }

        // clear input
        setInput("");

        // TODO: upgrade command history system
      } else if (e.key === "ArrowUp") {
        e.preventDefault();

        // get previous command
        if (state.commands.length === 0) return;
        const previousCommand = state.commands[state.commands.length - 1];
        setInput(previousCommand.text);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();

        // get next command
        setInput("");
      }
    };
    // reset height of input
    inputRef.current.style.height = "auto";

    // set height of input to match height of text
    inputRef.current.style.height = inputRef.current.scrollHeight + "px";

    // add event listener for keys
    inputRef.current?.addEventListener("keydown", handleKeyDown);

    // scroll to bottom of input
    inputRef.current?.scrollIntoView({ behavior: "smooth" });

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
