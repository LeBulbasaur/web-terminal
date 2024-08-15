export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_HISTORY": {
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    }
    case "ADD_COMMAND": {
      return {
        ...state,
        commands: [...state.commands, action.payload],
      };
    }
    case "CLEAR_HISTORY": {
      return {
        ...state,
        history: [],
      };
    }
    case "SET_PATH": {
      return {
        ...state,
        currentDirectory: action.payload,
      };
    }
    case "SET_FILES": {
      return {
        ...state,
        files: action.payload,
      };
    }
    case "SET_NANO_MODE": {
      return {
        ...state,
        nanoMode: action.payload,
      };
    }
    case "OPEN_FLOATING_BOX": {
      return {
        ...state,
        floatingVisibility: "block",
        floatingContent: action.payload,
      };
    }
    case "CLOSE_FLOATING_BOX": {
      return {
        ...state,
        floatingVisibility: "none",
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

export const initialState = {
  history: [
    {
      origin: "server",
      path: "",
      text: `
      <pre class='message__portfolio message__purple'>
                   _    __       _ _       
  _ __   ___  _ __| |_ / _| ___ | (_) ___  
 | '_ \\\ / _ \\\| '__| __| |_ / _ \\\| | |/ _ \\\ 
 | |_) | (_) | |  | |_|  _| (_) | | | (_) |
 | .__/ \\\___/|_|   \\\__|_|  \\\___/|_|_|\\\___/ 
 |_|        
      </pre>
      <div class='message__portfolio__description'>
      Hi, my name is <span class='message__blue'>Antoni Zaremba</span> and this is my terminal-like portfolio project! I'm a 22 yo student based in Kraków. To find more about me, please feel free to take a look at my app <span class='message__yellow'>(⁀ᗢ⁀)</span>.
      <br/>
      </div>
      `,
      type: "standard",
    },
  ],
  commands: [],
  files: [],
  currentDirectory: 0,
  nanoMode: false,
  floatingVisibility: "none",
  floatingContent: "",
};
