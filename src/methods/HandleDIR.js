import HandleSetFiles from "./HandleSetFiles";
import GetPath from "./GetPath";

export async function HandleMKDIR(message, state, dispatch) {
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
        path: GetPath(state),
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
      // console.log(data);
      if (data.error) {
        dispatch({
          type: "ADD_TO_HISTORY",
          payload: {
            text: "ERROR: name is too long or too many directories already exist!",
            type: "error",
            origin: "server",
            path: GetPath(state),
          },
        });
        return;
      }
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
          path: GetPath(state),
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
        path: GetPath(state),
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
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if (data.error) {
        dispatch({
          type: "ADD_TO_HISTORY",
          payload: {
            text: "Cannot remove selected object!",
            type: "error",
            origin: "server",
            path: GetPath(state),
          },
        });
        return;
      }
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
          path: GetPath(state),
        },
      });
    });
}
