import HandleSetFiles from "./HandleSetFiles";
import GetPath from "./GetPath";

export default async function HandleMV(message, state, dispatch) {
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: message,
      type: "standard",
      origin: "user",
      path: GetPath(state),
    },
  });

  if (message.split(" ").length !== 3) {
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: {
        text: "Invalid command syntax: wrong number of arguments",
        type: "error",
        origin: "server",
        path: GetPath(state),
      },
    });
    return;
  }

  const args = message.split(" ");
  const fileName = args[1];
  const newPath = args[2];

  const newPathArray = newPath.split("/");

  // get id of the file, than get the id of the new parent directory and update the file parentId
  let file;
  state.files.forEach((element) => {
    if (
      element.name === fileName &&
      element.parentId === state.currentDirectory
    ) {
      file = element;
    }
  });

  if (!file) {
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: {
        text: "File not found",
        type: "error",
        origin: "server",
        path: GetPath(state),
      },
    });
    return;
  }

  const directories = [];
  const data = state.files;
  data.forEach((element) => {
    if (element.type === "dir") {
      directories.push(element);
    }
  });

  let tempDirectory = -1;
  let found = true;

  for (let i = 0; i < newPathArray.length; i++) {
    found = false;
    directories.forEach((element) => {
      if (
        element.name === newPathArray[i] &&
        element.parentId === tempDirectory
      ) {
        tempDirectory = element.id;
        found = true;
      }
    });
    if (!found) {
      break;
    }
  }

  if (!found) {
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

  // update file parentId
  if (file.type === "txt") {
    await fetch(`http://localhost:5277/systemobject/puttxt/${file.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: file.id,
        name: file.name,
        type: file.type,
        parentId: tempDirectory,
        content: file.content ? file.content : "",
      }),
    })
      .then((res) => res.text())
      .then((text) => (text ? JSON.parse(text) : {}))
      .then((data) => {
        console.log("updated");
        HandleSetFiles(dispatch);
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (file.type === "dir") {
    await fetch(`http://localhost:5277/systemobject/putdir/${file.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: file.id,
        name: file.name,
        type: file.type,
        parentId: tempDirectory,
      }),
    })
      .then((res) => res.text())
      .then((text) => (text ? JSON.parse(text) : {}))
      .then((data) => {
        console.log("updated");
        HandleSetFiles(dispatch);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
