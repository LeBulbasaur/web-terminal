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
  }
  throw Error("Unknown action: " + action.type);
}

export const initialState = {
  history: [],
  commands: [],
  files: [],
  currentDirectory: 0,
  nanoMode: false,
};
