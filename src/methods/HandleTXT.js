import HandleSetFiles from "./HandleSetFiles";
import GetPath from "./GetPath";

export async function HandleTOUCH(message, state, dispatch) {
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

  let exists = false;
  state.files.forEach((element) => {
    if (
      element.name === message.split(" ")[1] &&
      element.parentId === state.currentDirectory &&
      element.type === "txt"
    ) {
      dispatch({
        type: "ADD_TO_HISTORY",
        payload: {
          text: "File already exists",
          type: "error",
          origin: "server",
          path: GetPath(state),
        },
      });
      exists = true;
    }
  });

  if (exists) {
    return;
  }

  fetch("http://localhost:5277/systemobject/posttxt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: message.split(" ")[1],
      parentId: state.currentDirectory,
      type: "txt",
      content: "",
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
          path: GetPath(state),
        },
      });
    });
}

export async function HandleRM(message, state, dispatch) {
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
      element.type === "txt"
    ) {
      id = element.id;
    }
  });

  if (id === "") {
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
          path: GetPath(state),
        },
      });
    });
}

export async function HandleCAT(message, state, dispatch) {
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

  // get id of the file, than get the file from the server and display its content
  let id = "";
  state.files.forEach((element) => {
    if (
      element.name === message.split(" ")[1] &&
      element.parentId === state.currentDirectory &&
      element.type === "txt"
    ) {
      id = element.id;
    }
  });

  if (id === "") {
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

  await fetch(`http://localhost:5277/systemobject/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "ADD_TO_HISTORY",
        payload: {
          text: data.content,
          type: "standard",
          origin: "server",
          path: GetPath(state),
        },
      });
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
