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

  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "Fetching pinned projects from GitHub...",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });

  await fetch("http://localhost:5277/api/scrape", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(async (res) => {
      const projectsArray = [];

      await res.forEach((element) => {
        const projectElement = `
        <div class="project__card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9MzSxtQWZNC-KECl9uaSQnskTwMIPvyy99w&s" alt="anime baba" />
          <div class="project__card__data">
            <a href=${element.url} target="_blank">
              <h3>${
                element.url.split("/")[element.url.split("/").length - 1]
              }</h3>
            </a>
            ${element.description}
          </div>
        </div>
        `;
        projectsArray.push(projectElement);
      });

      dispatch({
        type: "OPEN_FLOATING_BOX",
        payload: projectsArray.join(""),
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
