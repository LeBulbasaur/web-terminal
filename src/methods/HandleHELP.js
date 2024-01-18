import GetPath from "./GetPath";

export default function HandleHELP(dispatch) {
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "help",
      type: "standard",
      origin: "user",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "Available commands:",
      type: "blue",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "cd [path] - change working directory",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "ls - list files in current directory",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "clear - clear the terminal screen",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "touch [file] - create a new file",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "mkdir [directory] - create a new directory",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "rm [file] - delete file",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "rmdir [directory] - delete a directory",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "cat [file] - read file",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "nano [file] - edit existing or create new file",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
}
