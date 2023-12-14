import "./app.scss";
import { useReducer } from "react";
import { MessageContext } from "./context/context";
import { initialState, reducer } from "./hooks/reducer";
import Input from "./components/terminal-commands/Input";
import History from "./components/terminal-history/History";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="main">
      <div className="terminal__container">
        <MessageContext.Provider value={{ state, dispatch }}>
          <History />
          <Input />
        </MessageContext.Provider>
      </div>
      <footer className="footer"> Copyright © 2023 LeBulbasaur </footer>
    </div>
  );
}

export default App;
