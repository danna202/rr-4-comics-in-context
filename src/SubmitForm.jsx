import React, { useContext } from "react";
import StylesContext from "./StylesContext"

export default function CollectorButton() {
  const buttonStyling = useContext(StylesContext);

  const buttonStyleWithHover = {
    ...buttonStyling,
    textAlign: "center", // Center align the text
    transition: "background-color 0.3s ease",
    ":hover": {
      backgroundColor: "blue", // Change to the desired hover color
      color: "white", // Change to the desired hover text color
    },
  };

  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <button style={buttonStyleWithHover}>
        Click Here!
      </button>
    </div>
  );
}