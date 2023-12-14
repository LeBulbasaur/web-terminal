export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_HISTORY": {
      return {
        ...state,
        history: [...state.history, action.payload],
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
};
