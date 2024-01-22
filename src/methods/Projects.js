import GetPath from "./GetPath";

export default async function Projects(message, state, dispatch) {
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: message,
      type: "standard",
      origin: "user",
      path: GetPath(state),
    },
  });

  if (message.split(" ").length >= 2) {
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

  await fetch("http://localhost:5277/api/scrape", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(async (res) => {
      dispatch({
        type: "ADD_TO_HISTORY",
        payload: {
          text: "Projects:",
          type: "standard",
          origin: "server",
          path: GetPath(state),
        },
      });
      dispatch({
        type: "ADD_TO_HISTORY",
        payload: {
          text: "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
          type: "standard",
          origin: "server",
          path: GetPath(state),
        },
      });

      await res.forEach((element) => {
        dispatch({
          type: "ADD_TO_HISTORY",
          payload: {
            text: element.url,
            type: "link",
            origin: "server",
            path: GetPath(state),
          },
        });
        dispatch({
          type: "ADD_TO_HISTORY",
          payload: {
            text: element.description,
            type: "description",
            origin: "server",
            path: GetPath(state),
          },
        });
        dispatch({
          type: "ADD_TO_HISTORY",
          payload: {
            text: "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
            type: "standard",
            origin: "server",
            path: GetPath(state),
          },
        });
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
