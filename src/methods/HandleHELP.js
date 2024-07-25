import GetPath from "./GetPath";

export default function HandleHELP(message, state, dispatch) {
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
    type: "ADD_TO_HISTORY",
    payload: {
      text: "<span>help</span> - list of available commands:",
      type: "blue",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "<span class='message__green'>neofetch</span> \u00A0\u00A0\u00A0\u00A0- display system-like info about me",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "<span class='message__green'>projects</span> \u00A0\u00A0\u00A0\u00A0- list pinned projects from my GitHub",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: `<span class='message__green'>cd</span> [path]\u00A0\u00A0\u00A0\u00A0- change working directory`,
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "<span class='message__green'>ls</span>\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0- list files in current directory",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "<span class='message__green'>clear</span>\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0- clear the terminal screen",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "<span class='message__green'>touch</span> [file]\u00A0- create a new file",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "<span class='message__green'>mkdir</span> [dir]\u00A0\u00A0- create a new directory",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "<span class='message__green'>rm</span> [file]\u00A0\u00A0\u00A0\u00A0- delete a file",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "<span class='message__green'>rmdir</span> [dir]\u00A0\u00A0- delete a directory",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "<span class='message__green'>cat</span> [file]\u00A0\u00A0\u00A0- read a file",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "<span class='message__green'>nano</span> [file]\u00A0\u00A0- edit existing or create a new file",
      type: "standard",
      origin: "server",
      path: GetPath(state),
    },
  });
}
