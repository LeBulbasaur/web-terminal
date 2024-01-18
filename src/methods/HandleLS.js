import GetPath from "./GetPath";

export default function HandleLS(message, state, dispatch) {
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: message,
      type: "standard",
      origin: "user",
      path: GetPath(state),
    },
  });

  if (message.split(" ").length === 2) {
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

  state.files.forEach((element) => {
    if (element.parentId === state.currentDirectory) {
      if (element.type === "dir") {
        dispatch({
          type: "ADD_TO_HISTORY",
          payload: {
            text: element.name + "/",
            type: "blue",
            origin: "server",
            path: GetPath(state),
          },
        });
      } else {
        dispatch({
          type: "ADD_TO_HISTORY",
          payload: {
            text: element.name,
            type: "standard",
            origin: "server",
            path: GetPath(state),
          },
        });
      }
    }
  });
}
