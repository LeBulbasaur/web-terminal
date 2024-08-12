import { useState, useContext } from "react";
import { MessageContext } from "../../context/context";
import "./floating.scss";

export default function Floating() {
  const [isClicked, setIsClicked] = useState(false);
  const { state, dispatch } = useContext(MessageContext);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [initialPos, setInitialPos] = useState({ x: 0, y: 0 });

  //  TODO: FIX MOVING SYSTEM
  const MouseMovement = (e) => {
    e.stopPropagation();
    if (isClicked) {
      setPos({ x: e.clientX - initialPos.x, y: e.clientY - initialPos.y });
    }
  };

  return (
    <div
      className="floating__container"
      style={{
        display: state.floatingVisibility,
        top: pos.y + "px",
        left: pos.x + "px",
      }}
    >
      <div
        className="floating__topbar"
        onMouseDown={(e) => {
          e.stopPropagation();
          setIsClicked(true);
          setInitialPos({ x: e.clientX, y: e.clientY });
          e.target.style.cursor = "grabbing";
        }}
        onMouseUp={(e) => {
          e.stopPropagation();
          setIsClicked(false);
          e.target.style.cursor = "grab";
        }}
        onMouseMove={(e) => MouseMovement(e)}
      >
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
      <div className="floating__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maiores
        ullam consequatur. Molestias placeat autem tempora cumque accusantium
        totam nobis, a adipisci voluptates natus magnam sunt assumenda, ullam
        inventore nesciunt.
      </div>
    </div>
  );
}
