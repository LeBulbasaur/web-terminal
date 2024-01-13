export default async function HandleLS(message, dispatch) {
  dispatch({
    type: "ADD_TO_HISTORY",
    payload: {
      text: message,
      type: "output",
      origin: "user",
    },
  });

  await fetch("http://localhost:5277/systemobject", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        dispatch({
          type: "ADD_TO_HISTORY",
          payload: {
            text: element.name,
            type: "output",
            origin: "server",
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
        },
      });
    });
}
