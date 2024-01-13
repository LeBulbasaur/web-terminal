export default function HandleUndefined(message, dispatch) {
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: message,
      type: "output",
      origin: "user",
    },
  });

  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "Unknown command: " + message,
      type: "error",
      origin: "server",
    },
  });
}
