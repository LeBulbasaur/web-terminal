export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_HISTORY": {
      console.log("xd");
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    }
    case "CLEAR_HISTORY": {
      return {
        ...state,
        history: [],
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

export const initialState = {
  history: [
    {
      text: "Hello, World!",
      type: "output",
      origin: "user",
    },
    {
      text: "Hello, World!",
      type: "output",
      origin: "system",
    },
  ],
  messages: [],
};
