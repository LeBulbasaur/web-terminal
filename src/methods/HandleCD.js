import GetPath from "./GetPath";

export default function HandleCD(message, state, dispatch) {
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: message,
      type: "standard",
      origin: "user",
      path: GetPath(state),
    },
  });
  if (message.split(" ").length > 2) {
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
  } else if (message.split(" ").length !== 2 || message.split(" ")[1] === "") {
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: {
        text: "Invalid command syntax: missing path",
        type: "error",
        origin: "server",
        path: GetPath(state),
      },
    });
    return;
  }
  const path = message.split(" ")[1];
  const pathArray = path.split("/");

  // filter path array from empty strings
  for (let i = 0; i < pathArray.length; i++) {
    if (pathArray[i] === "") {
      pathArray.splice(i, 1);
    }
  }

  const directories = [];
  const data = state.files;
  data.forEach((element) => {
    if (element.type === "dir") {
      directories.push(element);
    }
  });

  let tempDirectory = state.currentDirectory;
  let found = true;

  for (let i = 0; i < pathArray.length; i++) {
    found = false;
    directories.forEach((element) => {
      if (element.name === pathArray[i] && element.parentId === tempDirectory) {
        tempDirectory = element.id;
        found = true;
      } else if (
        pathArray[i] === ".." &&
        element.id === tempDirectory &&
        element.name !== "root"
      ) {
        tempDirectory = element.parentId;
        found = true;
      }
    });

    if (!found) {
      break;
    }
  }

  if (found) {
    dispatch({
      type: "SET_PATH",
      payload: tempDirectory,
    });
    return;
  } else {
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: {
        text: "The directory does not exist",
        type: "error",
        origin: "server",
        path: GetPath(state),
      },
    });
    return;
  }
}
