import GetPath from "./GetPath";

export default function HandleCLEAR(message, dispatch) {
  if (message.split(" ").length === 2) {
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: {
        text: message,
        type: "standard",
        origin: "user",
        path: GetPath(state),
      },
    });
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: {
        text: "Invalid command syntax: too many arguments",
        type: "error",
        origin: "server",
        path: GetPath(state),
      },
    });
    return;
  }
  dispatch({
    type: "CLEAR_HISTORY",
  });
}
