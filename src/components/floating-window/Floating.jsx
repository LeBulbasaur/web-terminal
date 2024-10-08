import { useContext } from "react";
import { MessageContext } from "../../context/context";
import parse from "react-html-parser";
import "./floating.scss";

export default function Floating() {
  const { state, dispatch } = useContext(MessageContext);

  return (
    <div
      className="floating__container"
      style={{
        display: state.floatingVisibility,
      }}
    >
      <div className="floating__topbar">
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() =>
            dispatch({
              type: "CLOSE_FLOATING_BOX",
            })
          }
        >
          <path
            d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z"
            fillRule="nonzero"
          />
        </svg>
      </div>
      <div className="floating__content">{parse(state.floatingContent)}</div>
    </div>
  );
}
