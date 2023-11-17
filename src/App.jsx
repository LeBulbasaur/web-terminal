import "./app.scss";
import Input from "./components/terminal-commands/Input";

function App() {
  return (
    <div className="main">
      <div className="terminal__container">
        <Input />
      </div>
      <footer className="footer"> Copyright © 2023 LeBulbasaur </footer>
    </div>
  );
}

export default App;
