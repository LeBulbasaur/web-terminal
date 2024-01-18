import GetPath from "./GetPath";

export default async function HandleSetFiles(dispatch) {
  await fetch("http://localhost:5277/systemobject", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "SET_FILES",
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "ADD_TO_HISTORY",
        payload: {
          text: `Error connecting to server, please try again`,
          type: "error",
          origin: "server",
          path: GetPath(state),
        },
      });
    });
}
