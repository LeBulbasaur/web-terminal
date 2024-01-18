import GetPath from "./GetPath";

export default function Neofetch(state, dispatch) {
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "neofetch",
      type: "standard",
      origin: "user",
      path: GetPath(state),
    },
  });

  // generate multiple dispatches on every line break
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⠀⠀⠀⠀⠀⠀⣠⠴⠒⡶⠛⡉⠈⠉⠻⣌⠉⠒⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⠀⠀⠀⠀⣠⣾⠇⠀⡸⠁⠀⠘⣆⠀⠀⠈⠳⣄⠀⠈⢢⡀⠀⠀⠀⠀⠀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⠀⠀⠀⡼⢱⠃⠀⠠⡇⠀⠀⡆⠘⡄⠀⠀⠀⠈⠳⡄⠀⠹⡄⠀⠀⠀⠀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⠀⠀⡼⢣⠇⠀⠀⢀⣇⣀⣎⢹⣀⣹⣀⣀⣀⣀⣀⠘⡄⠀⢹⡀⠀⠀⠀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⠀⢰⠃⣸⠒⠉⠉⠉⠉⠁⠘⠚⠀⠀⠀⠀⠀⠀⠀⢹⢻⡀⠀⢧⠀⠀⠀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⠀⡜⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⣇⠀⢸⠀⠀⠀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⠀⡇⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠸⠀⢰⡇⠀⠀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⢸⡃⠸⠿⠀⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⡇⠀⠀⠈⡇⠀⠀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⢸⡇⠀⢻⠀⠀⠀⠘⠛⠀⠀⠉⠁⠀⠈⠟⠁⠀⠀⠀⡇⠀⡀⢠⡇⠀⠀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⣼⢹⠀⢸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⡇⠈⡇⠀⠀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⢹⣼⠇⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⡇⠐⡇⠀⠀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⢸⣿⡄⣸⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣗⠀⡇⠀⡇⠀⠀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⠀⢿⣧⣿⣿⠤⢤⠤⠤⡶⢶⣤⣔⣶⣶⣶⣶⢲⢶⠲⡏⠀⡇⢠⣿⠀⠀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⠀⠈⢻⣹⡎⡁⢸⠀⣆⣷⣼⣿⣿⣿⣿⠏⢹⣜⣼⢠⠃⠀⡇⠈⣻⡀⠀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⠀⠀⠀⡿⡇⢸⡈⣇⣿⣿⡿⠛⠟⠛⠁⠀⠸⢿⡿⣼⣀⡀⠁⠘⢿⡇⠀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⠀⠀⠀⣧⣡⣴⡟⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⣼⣧⣿⣿⣿⣿⣶⣾⣿⣀⠀⠀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⣠⣶⣿⣿⣟⣿⣿⣿⣿⣿⣿⣦⢖⣒⣒⡶⣴⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣷⡀",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⢠⣿⣿⣿⣿⣿⣿⣿⡟⠳⣯⣻⣿⣿⣿⣿⣿⣿⢟⣵⠟⠉⣼⣿⣿⣿⣿⣿⣿⡇",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠘⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠙⠮⣿⣿⣿⣿⡿⠋⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⠁",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: "⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣤⣀⡀⠈⠻⡿⠋⢀⣠⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⡆",
      type: "neofetch",
      origin: "server",
      path: GetPath(state),
    },
  });
}
