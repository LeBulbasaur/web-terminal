import HandleSetFiles from "./HandleSetFiles";
import GetPath from "./GetPath";

export function HandleNANO(message, state, dispatch) {
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
    type: "SET_NANO_MODE",
    payload: true,
  });
}

export async function HandleNANOInitial(state, dispatch) {
  const fileName = state.commands[state.commands.length - 1].text.split(" ")[1];

  const file = state.files.find(
    (file) =>
      file.name === fileName &&
      file.type === "txt" &&
      file.parentId === state.currentDirectory
  );

  let message = "";

  if (!file) {
    return message;
  }

  await fetch(`http://localhost:5277/systemobject/${file.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      message = data.content;
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
      dispatch({
        type: "SET_NANO_MODE",
        payload: false,
      });
    });
  return message;
}

export async function HandleNANOChange(message, state, dispatch, savedRef) {
  if (message.length > 250) {
    savedRef.current.innerText = "[Input is too long!]";
    savedRef.current.style.display = "block";
    return;
  }

  const fileName = state.commands[state.commands.length - 1].text.split(" ")[1];

  const file = state.files.find(
    (file) =>
      file.name === fileName &&
      file.type === "txt" &&
      file.parentId === state.currentDirectory
  );

  if (!file) {
    await fetch("http://localhost:5277/systemobject/posttxt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fileName,
        parentId: state.currentDirectory,
        type: "txt",
        content: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        savedRef.current.innerText = "[Saved]";
        savedRef.current.style.display = "block";
        HandleSetFiles(dispatch);
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  }

  await fetch(`http://localhost:5277/systemobject/puttxt/${file.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: file.id,
      name: file.name,
      type: file.type,
      parentId: file.parentId,
      content: message,
    }),
  })
    .then((res) => res.text())
    .then((text) => (text ? JSON.parse(text) : {}))
    .then((data) => {
      console.log("updated");
      savedRef.current.style.display = "block";
      HandleSetFiles(dispatch);
    })
    .catch((err) => {
      console.log(err);
    });
}
