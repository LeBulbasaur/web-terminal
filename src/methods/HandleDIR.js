import HandleSetFiles from "./HandleSetFiles";

export async function HandleMKDIR(message, state, dispatch) {
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: message,
      type: "standard",
      origin: "user",
    },
  });

  if (message.split(" ").length > 2) {
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

  // check if file with same name already exists in the current directory
  let exists = false;
  state.files.forEach((element) => {
    if (
      element.name === message.split(" ")[1] &&
      element.parentId === state.currentDirectory &&
      element.type === "dir"
    ) {
      exists = true;
    }
  });

  if (exists) {
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: {
        text: "File with same name already exists",
        type: "error",
        origin: "server",
      },
    });
    return;
  }

  await fetch("http://localhost:5277/systemobject/postdir", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: message.split(" ")[1],
      parentId: state.currentDirectory,
      type: "dir",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      HandleSetFiles(dispatch);
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "ADD_TO_HISTORY",
        payload: {
          text: `${err}`,
          type: "error",
          origin: "server",
        },
      });
    });
}

export async function HandleRMDIR(message, state, dispatch) {
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: message,
      type: "standard",
      origin: "user",
    },
  });

  if (message.split(" ").length > 2) {
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

  // get id of the directory to be deleted
  let id = "";
  state.files.forEach((element) => {
    if (
      element.name === message.split(" ")[1] &&
      element.parentId === state.currentDirectory &&
      element.type === "dir"
    ) {
      id = element.id;
    }
  });

  if (id === "") {
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: {
        text: "Directory not found",
        type: "error",
        origin: "server",
      },
    });
    return;
  }

  await fetch(`http://localhost:5277/systemobject/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      HandleSetFiles(dispatch);
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "ADD_TO_HISTORY",
        payload: {
          text: `${err}`,
          type: "error",
          origin: "server",
        },
      });
    });
}
