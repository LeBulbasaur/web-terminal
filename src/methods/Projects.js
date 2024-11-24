import GetPath from "./GetPath";
import CS from "../static/images/languages/cs.png";
import HTML from "../static/images/languages/html.png";
import JavaScript from "../static/images/languages/js.png";
import Jupyter from "../static/images/languages/jupyter.png";
import PC from "../static/images/languages/pc.png";
import Python from "../static/images/languages/python.png";
import Svelte from "../static/images/languages/svelte.png";

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
        <div class="project__card__image__container">
          <img src='${
            element.language == "C#"
              ? CS
              : element.language == "HTML"
              ? HTML
              : element.language == "JavaScript"
              ? JavaScript
              : element.language == "Jupyter Notebook"
              ? Jupyter
              : element.language == "Python"
              ? Python
              : element.language == "Svelte"
              ? Svelte
              : PC
          }' alt='coding language' />
          </div>
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
