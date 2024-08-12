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
      <footer className="footer"> Copyright © 2024 LeBulbasaur </footer>
    </div>
  );
}

export default App;
