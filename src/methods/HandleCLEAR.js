export default function HandleCLEAR(message, dispatch) {
  if (message.split(" ").length === 2) {
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: {
        text: message,
        type: "standard",
        origin: "user",
      },
    });
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: {
        text: "Invalid command syntax: too many arguments",
        type: "error",
        origin: "server",
      },
    });
    return;
  }
  dispatch({
    type: "CLEAR_HISTORY",
  });
}
