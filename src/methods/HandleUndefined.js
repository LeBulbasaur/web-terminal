import GetPath from "./GetPath";

export default function HandleUndefined(message, state, dispatch) {
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
      text: "Unknown command: " + message,
      type: "error",
      origin: "server",
      path: GetPath(state),
    },
  });
}
