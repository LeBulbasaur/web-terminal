import "./app.scss";
import { useReducer } from "react";
import { MessageContext } from "./context/context";
import { initialState, reducer } from "./hooks/reducer";
import Input from "./components/terminal-commands/Input";
import History from "./components/terminal-history/History";
import NanoInput from "./components/terminal-nano-input/NanoInput";
import Floating from "./components/floating-window/Floating";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="main">
      <MessageContext.Provider value={{ state, dispatch }}>
        <Floating />
        {state.nanoMode ? (
          <div className="terminal__container">
            <NanoInput />
          </div>
        ) : (
          <div className="terminal__container">
            <History />
            <Input />
          </div>
        )}
      </MessageContext.Provider>
      <footer>
        {" "}
        <p>Copyright © 2024 LeBulbasaur </p>
        <div className="svg__container">
          <a href="https://github.com/LeBulbasaur">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="svg__github"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
          </a>
        </div>
        <div className="svg__container">
          <a href="https://www.linkedin.com/in/antoni-zaremba-695397225/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="svg__linkedin"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
